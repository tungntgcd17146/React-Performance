import { NavigateItem, ShopSelectInput, ShopTabs } from '@/types'

//TODO: Constant for all options
export const tabItems: NavigateItem[] = [
  {
    text: ShopTabs.PRODUCTS,
    isDisabled: false
  },
  {
    text: ShopTabs.FOLLOWERS,
    isDisabled: false
  },
  {
    text: ShopTabs.FOLLOWING,
    isDisabled: false
  }
]

export const selectOption = [
  {
    id: '1',
    name: ShopSelectInput.RECENT
  },
  {
    id: '2',
    name: ShopSelectInput.NEW
  },
  {
    id: '3',
    name: ShopSelectInput.POPULAR
  }
]
