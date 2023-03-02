import { useState } from 'react'
import { constTokens as bossTokens } from 'data-dictionary/dist/dictionaries/bosses'

const SEPARATOR = '!@@!'

export const blacklistUtils = {
  split: (joinedString: string): Set<string> =>
    new Set(joinedString.split(SEPARATOR)),
  join: (set: Set<string>): string => [...set].filter(Boolean).join(SEPARATOR),
}

export const useBlacklist = (initialValue: string | null) => {
  const [string, setString] = useState(initialValue ?? '')

  const bossSet = blacklistUtils.split(string)

  const toggleValue = (value: string) => {
    if (bossSet.has(value)) {
      bossSet.delete(value)
    } else {
      bossSet.add(value)
    }

    setString(blacklistUtils.join(bossSet))
  }

  return { value: { string, set: bossSet }, toggleValue }
}

export const bossNames = Object.values(bossTokens)
