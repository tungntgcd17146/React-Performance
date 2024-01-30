import { useMatches } from 'react-router-dom'
import { NavigateItem } from '@/types/navigateItem'

const useMatchPath = (items: NavigateItem[]) => {
  const paths = useMatches()

  const newSelectedItems = items.map((item) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    if (paths.some((path) => path.pathname === item.go)) {
      return { ...item, isSelected: true }
    } else {
      return { ...item, isSelected: false }
    }
  })

  return newSelectedItems
}

export default useMatchPath
