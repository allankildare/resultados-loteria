import { useQuery } from 'react-query'
import { apiClient } from '../clients'
import { LOTTERIES_ENDPOINT } from './endpoints'

export function getLotteries() {
  const { data, ...restQuery } = useQuery('getLotteries', async () => {
    return await apiClient.get(LOTTERIES_ENDPOINT)
  })
  const response = data?.data

  return { data: response, ...restQuery }
}
