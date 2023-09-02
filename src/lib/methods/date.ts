import { faker } from '@faker-js/faker'

export function formatDate(date: Date) {
  return date.toLocaleDateString('fr-fr', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function generateSortedDates(nb: number) {
  return Array.from({ length: nb })
    .map(() => faker.date.past())
    .sort((a, b) => a.getTime() - b.getTime())
}
