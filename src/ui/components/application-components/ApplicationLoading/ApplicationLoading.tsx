import { Loading } from './styles'

export function ApplicationLoading({ message }: { message?: string }) {
  return (
    <>
      <Loading />
      <p>{message}</p>
    </>
  )
}
