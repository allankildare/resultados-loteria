import { Loading } from './styles'

export function ApplicationLoading({ message }: { message?: string }) {
  return (
    <>
      <Loading data-testid="loading" />
      <p>{message}</p>
    </>
  )
}
