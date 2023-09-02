export function formatDate(date: Date) {
  return date.toLocaleDateString('fr-fr', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}
