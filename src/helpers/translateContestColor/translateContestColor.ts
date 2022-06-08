export function translateContestColor(contest: string) {
  if (contest === 'quina') return 'var(--quina-purple)'
  if (contest === 'lotofácil') return 'var(--lotofacil-pink)'
  if (contest === 'lotomania') return 'var(--lotomania-orange)'
  if (contest === 'timemania') return 'var(--timemania-green)'
  if (contest === 'dia de sorte') return 'var(--dia-de-sorte-brownish-green)'
  return 'var(--aside-and-megasena-green)'
}
