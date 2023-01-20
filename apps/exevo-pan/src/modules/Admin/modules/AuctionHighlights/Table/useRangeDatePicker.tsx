import { useState, useMemo, useCallback } from 'react'
import { ddmmyyy2mmddyyyy } from 'utils'
import { SEPARATOR, toggleJoinedDateString, forwardOneMonth } from './utils'

const EMPTY_TOGGLE_DATE = {
  id: '',
  auctionId: 0,
  nickname: '',
  lastUpdated: '',
  joinedReadableDate: '',
}

export const useRangeDatePicker = () => {
  const [endDate] = useState(() => forwardOneMonth())
  const [toToggleDate, setToToggleDate] = useState(EMPTY_TOGGLE_DATE)
  const [originalDates, setOriginalDates] = useState('')

  return {
    toToggleDate,
    setToToggleDate: useCallback((args: typeof EMPTY_TOGGLE_DATE) => {
      setToToggleDate(args)
      setOriginalDates(args.joinedReadableDate)
    }, []),
    startDate: useMemo(
      () =>
        toToggleDate.lastUpdated
          ? new Date(toToggleDate.lastUpdated)
          : new Date(),
      [toToggleDate.lastUpdated],
    ),
    endDate,
    selectedDates: useMemo(
      () =>
        toToggleDate.joinedReadableDate
          .split(SEPARATOR)
          .map((stringDate) => new Date(ddmmyyy2mmddyyyy(stringDate))),
      [toToggleDate],
    ),
    onDateSelect: (toggleDate: Date) =>
      setToToggleDate((prev) => ({
        ...prev,
        joinedReadableDate: toggleJoinedDateString({
          toggleDate,
          joinedDateString: toToggleDate.joinedReadableDate,
        }),
      })),
    resetDates: useCallback(() => {
      setToToggleDate({ ...EMPTY_TOGGLE_DATE })
      setOriginalDates('')
    }, []),
    dateDiff: useMemo(() => {
      const originalSet = new Set(originalDates.split(SEPARATOR))
      const changeSet = new Set(
        toToggleDate.joinedReadableDate.split(SEPARATOR),
      )

      const added = [...changeSet].filter(
        (currentChange) => !originalSet.has(currentChange),
      )
      const removed = [...originalSet].filter(
        (original) => !changeSet.has(original),
      )

      return { added, removed, noChange: added.length + removed.length === 0 }
    }, [toToggleDate.joinedReadableDate, originalDates]),
  }
}
