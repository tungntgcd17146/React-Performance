import { useQuery } from 'react-query'

type ApiResponse<T> = T[]

const useQueryItems = <T>({ key, queryFunction }: { key: Array<unknown>; queryFunction: Promise<ApiResponse<T>> }) => {
  return useQuery({
    queryKey: key,
    queryFn: () => queryFunction,
    staleTime: 1000 * 60 * 3
  })
}

export default useQueryItems
