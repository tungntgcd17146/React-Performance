import { fetchProductById } from '@/api'
import { useQuery } from '@tanstack/react-query'

export const useProductQuery = ({ keys, idParam }: { keys: unknown; idParam: string }) =>
  useQuery({
    queryKey: ['contacts', keys],
    queryFn: () => fetchProductById(idParam),
    staleTime: 3 * 60 * 1000
  })
