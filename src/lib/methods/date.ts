import { faker } from '@faker-js/faker'

export function formatDate(date: Date) {
  return date.toLocaleDateString('fr-fr', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function formatDateWithTime(date: Date) {
  return date.toLocaleDateString('fr-fr', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function generateSortedDates(nb: number) {
  const recent = faker.number.int({ min: Math.min(5, nb), max: nb })
  const datesRecent = Array.from({ length: recent }).map(() =>
    faker.date.recent()
  )
  const datesPast = Array.from({ length: nb - recent }).map(() =>
    faker.date.past()
  )

  return [datesPast, datesRecent]
    .flat()
    .sort((a, b) => a.getTime() - b.getTime())
}

export function isSameDay(date1_: Date, date2_: Date) {
  const date1 = new Date(
    date1_.getFullYear(),
    date1_.getMonth(),
    date1_.getDate()
  )
  const date2 = new Date(
    date2_.getFullYear(),
    date2_.getMonth(),
    date2_.getDate()
  )

  return date1.getTime() === date2.getTime()
}

export function isYesterday(date: Date) {
  const today = new Date()
  const yesterday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 1
  )

  return (
    date.getFullYear() === yesterday.getFullYear() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getDate() === yesterday.getDate()
  )
}

export function getDayOfWeek(date: Date) {
  const today = new Date()
  const sevenDaysAgo = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 7
  )

  if (date >= sevenDaysAgo && date <= today) {
    // const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const daysOfWeek = [
      'Dimanche',
      'Lundi',
      'Mardi',
      'Mercredi',
      'Jeudi',
      'Vendredi',
      'Samedi',
    ]
    return daysOfWeek[date.getDay()]
  }

  return null
}

export function getAge(birthDate: Date): number {
  const today = new Date()
  const age = today.getFullYear() - birthDate.getFullYear()
  const m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1
  }
  return age
}
