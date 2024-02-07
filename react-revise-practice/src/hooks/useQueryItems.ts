import { useQuery } from 'react-query'

type ApiResponse<T> = T[]

const useQueryItems = <T>({
  key,
  queryFunction
}: {
  key: string | string[]
  queryFunction: Promise<ApiResponse<T>>
}) => {
  return useQuery({
    queryKey: key,
    queryFn: () => queryFunction
  })
}

export default useQueryItems
