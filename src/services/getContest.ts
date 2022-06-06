import { useQuery } from 'react-query'
import { apiClient } from '~/clients'
import { ContestData } from '~/types'
import { CONTEST_ENDPOINT } from './endpoints'

export function getContest(id?: string) {
  const { data, ...restQuery } = useQuery('getContest', async () => {
    return await apiClient.get(`${CONTEST_ENDPOINT}/${id}`)
  }, {
    enabled: Boolean(id)
  })

  const response: ContestData = data?.data

  return { data: response, ...restQuery }
}
