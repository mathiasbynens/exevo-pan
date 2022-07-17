/* eslint-disable no-shadow */
import { useState, useCallback, useMemo } from 'react'
import { useTranslations } from 'contexts/useTranslation'
import { Tabs, TextArea, Text, Button } from 'components/Atoms'
import { InfoTooltip } from 'components/Organisms'
import { Main, LabeledCard, Group, Chip, ChipWrapper } from '../../components'
import useHistory from './useHistory'
import useDisplayTimestamp from './useDisplayTimestamp'
import TransferTable from './TransferTable'
import { parse, findTransactionsRequired } from './utils'
import { defaultValue } from './defaultValue'

/* @ ToDo:
- history
    style: list, save, open dialog, delete
    modal: raw data disabled

- tooltip clipboard
- copy all (discord, ts)?
- placeholder
- none display

- 'show raw xp'
- extra expenses (tibiapal)
- remove players (tibiapal)
*/

const LootSplit = () => {
  const {
    translations: { common },
  } = useTranslations()

  const [isHistory, setIsHistory] = useState(false)
  const { list, selected, action } = useHistory()

  const [rawNewSession, setRawNewSession] = useState(defaultValue)

  const displayedSession =
    isHistory && selected ? selected.rawData : rawNewSession

  const displayTimestamp = useDisplayTimestamp()

  const { timestamp, teamReceipt, playerReceipts, transactions } =
    useMemo(() => {
      try {
        const teamReceipt = parse.TeamReceipt(displayedSession)
        const playerReceipts = parse.PlayerReceipts(displayedSession)
        const transactions = findTransactionsRequired(playerReceipts)
        const timestamp = parse.SessionTimestamp(displayedSession)

        return { teamReceipt, playerReceipts, transactions, timestamp }
      } catch {
        return {}
      }
    }, [displayedSession])

  const isInvalid = rawNewSession && !transactions
  const isWaste = teamReceipt && teamReceipt.balance < 0

  return (
    <Main>
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <Tabs.Group
            onChange={useCallback(
              (tabIndex) => setIsHistory(tabIndex === 1),
              [],
            )}
          >
            <Tabs.Panel label="New session">
              <TextArea
                label="Paste your party hunt session"
                onChange={(e) => setRawNewSession(e.target.value)}
                value={rawNewSession}
                error={isInvalid}
                className="h-64"
              />
            </Tabs.Panel>
            <Tabs.Panel label="History" className="grid gap-2">
              {list.map(({ key, timestamp }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => action.select(key)}
                >
                  {displayTimestamp(timestamp)}
                </button>
              ))}
            </Tabs.Panel>
          </Tabs.Group>
        </div>

        <LabeledCard labelText="Transfers" className="max-w-[300px]">
          <Group>
            <strong className="flex items-center gap-1 whitespace-nowrap">
              Team session{' '}
              <InfoTooltip
                className="h-3 w-3"
                content={
                  <ul className="grid gap-1 text-left">
                    {playerReceipts ? (
                      playerReceipts.map(({ name }) => (
                        <li key={name}>{name}</li>
                      ))
                    ) : (
                      <span>none</span>
                    )}
                  </ul>
                }
              />
            </strong>
            {timestamp ? (
              <span>{displayTimestamp(timestamp)}</span>
            ) : (
              <span>none</span>
            )}
          </Group>

          <Group>
            <strong>Transfers</strong>
            {transactions ? (
              <TransferTable transactions={transactions} />
            ) : (
              <span>none</span>
            )}
          </Group>

          <Group>
            <strong>Total {isWaste ? 'waste' : 'profit'}</strong>
            <ChipWrapper>
              {teamReceipt && playerReceipts ? (
                <Chip>
                  <Text.GoldCoin
                    value={Math.floor(
                      teamReceipt.balance / playerReceipts.length,
                    )}
                    displaySign={isWaste}
                  />
                  <span className="-ml-1">each</span>
                </Chip>
              ) : (
                <span>none</span>
              )}
            </ChipWrapper>
          </Group>

          <Button type="button" onClick={() => action.add(rawNewSession)}>
            Save
          </Button>
          <Button
            type="button"
            onClick={selected ? () => action.remove(selected?.key) : undefined}
          >
            Delete
          </Button>
        </LabeledCard>
      </div>
    </Main>
  )
}

export default LootSplit
