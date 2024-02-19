import { fetchContacts } from '@/api'
import { useQuery } from 'react-query'

export const useContactsQuery = ({ keys, params }: { keys: unknown; params?: object }) =>
  useQuery({
    queryKey: ['contacts', keys],
    queryFn: () => fetchContacts(params),
    staleTime: 3 * 60 * 1000
  })
