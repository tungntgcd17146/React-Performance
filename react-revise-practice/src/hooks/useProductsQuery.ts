import { fetchProducts } from '@/api'
import { useQuery } from 'react-query'

export const useProductsQuery = ({ keys, params }: { keys: unknown; params?: object }) =>
  useQuery({
    queryKey: ['products', keys],
    queryFn: () => fetchProducts(params),
    staleTime: 3 * 60 * 1000
  })
