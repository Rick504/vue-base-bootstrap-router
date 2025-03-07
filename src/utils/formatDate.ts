export function formatDate(timestamp: { _seconds: number; _nanoseconds: number }): string {
  const milliseconds = timestamp._seconds * 1000 + timestamp._nanoseconds / 1000000
  const date = new Date(milliseconds)

  if (isNaN(date.getTime())) {
    return 'Data Inválida'
  }

  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}
