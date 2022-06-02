import { useQuery } from 'react-query'
import { apiClient } from '../clients'
import { IDS_ENDPOINT } from './endpoints'

export function getIds() {
  const { data, ...restQuery } = useQuery('getIds', async () => {
    return await apiClient.get(IDS_ENDPOINT)
  })
  const response = data?.data

  return { data: response, ...restQuery }
}
