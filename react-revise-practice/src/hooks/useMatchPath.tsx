import { useMatches } from 'react-router-dom'

const useMatchPath = (patch: string) => {
  const paths = useMatches()

  const isMatch = paths.some((path) => path.pathname === patch)

  return Boolean(isMatch)
}

export default useMatchPath
