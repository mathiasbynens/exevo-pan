export const MILLISECONDS_IN = {
  SECONDS: 1000,
  MINUTE: 60000,
  HOUR: 3600000,
  DAY: 86400000,
}

export const SECONDS_IN = {
  MINUTE: 60,
  HOUR: 3600,
  DAY: 86400,
  YEAR: 31536000,
}

export const MINUTES_IN = {
  HOUR: 60,
  DAY: 1440,
  YEAR: 525600,
}

export const DAYS_IN = {
  WEEK: 7,
  MONTH: 30,
  YEAR: 365,
}

export const SS_UTC_HOUR = 7

export const stripTime = (date = new Date()): Date =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate())

export const getDateRelativeToSS = (date = new Date()): Date => {
  const utcHour = date.getUTCHours()

  const relativeDate = new Date(date)
  if (utcHour < SS_UTC_HOUR) relativeDate.setDate(relativeDate.getDate() - 1)

  return stripTime(relativeDate)
}
