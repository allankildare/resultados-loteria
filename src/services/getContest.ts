import { useQuery } from 'react-query'
import { apiClient } from '../clients'
import { CONTEST_ENDPOINT } from './endpoints'

export function getContest(id: number) {
  console.log(`${CONTEST_ENDPOINT}/${id}`)
  const { data, ...restQuery } = useQuery('getContest', async () => {
    return await apiClient.get(`${CONTEST_ENDPOINT}/${id}`)
  }, {
    enabled: id > 0
  })
  const response = data?.data

  return { data: response, ...restQuery }
}
