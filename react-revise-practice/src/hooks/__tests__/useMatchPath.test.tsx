/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '../../utils/testUtils'

import useMatchPath from '../useMatchPath'
import { useMatches } from 'react-router-dom'
import { NavigateItem } from '@/types/navigateItem'
import { vi } from 'vitest'

vi.mock('react-router-dom')

export const mockListItems: NavigateItem[] = [
  {
    text: 'Home',
    isSelected: false,
    go: '/home'
  },
  {
    text: 'Products',
    isSelected: false,
    go: '/products'
  },
  {
    text: 'Customers',
    isSelected: false,
    go: '/customers'
  },
  {
    text: 'Shop',
    isSelected: false,
    go: '/shop'
  }
]

const defaultProp = {
  listItems: mockListItems
}
// TestComponent.jsx
const MockComponent = ({ ...props }) => {
  const newOptions = useMatchPath(props.listItems)

  const trueOption = newOptions.find((item) => item.isSelected)

  if (trueOption) return <div data-testid='isSelected'>{trueOption.text}</div>

  return null
}

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps
  }

  return render(<MockComponent {...props} />)
}

it('returns correct values', async () => {
  vi.mocked(useMatches).mockReturnValue([{ pathname: '/shop' }] as any)
  setup()

  screen.debug()

  expect(screen.getByTestId('isSelected').textContent).toEqual('Shop')
})
