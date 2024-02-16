import { fetchProducts } from '@/api'
import { useQuery } from 'react-query'

export const useQueryProducts = ({ keys, params }: { keys: any; params?: object }) =>
  useQuery({
    queryKey: ['products', keys],
    queryFn: () => fetchProducts(params),
    staleTime: 3 * 60 * 1000
  })
