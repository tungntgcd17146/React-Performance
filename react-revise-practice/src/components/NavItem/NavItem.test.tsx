import { fireEvent, render, screen } from '@/utils/testUtils'
import { describe, expect, it, vi } from 'vitest'
import NavItem, { Props } from './NavItem'

import * as useScreenWidth from '@/hooks/useScreenWidth'
import { BrowserRouter } from 'react-router-dom'

const defaultProp = {
  icon: <></>,
  text: 'Nav Item',
  index: 1,
  isSelected: false,
  go: '/shop',
  onClick: vi.fn()
} as Props

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps
  }

  return render(
    <BrowserRouter>
      <NavItem {...props} />
    </BrowserRouter>
  )
}

describe('NavItem Test', () => {
  it('render NavItem with icon and text correctly', () => {
    setup()

    expect(screen.getByTestId('NavItem_ListItemIcon')).toBeTruthy()
    expect(screen.getByTestId('NavItem_ListItemText')).toBeTruthy()
  })

  it('render NavItem with just icon when screen is tablet correctly', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isTablet: true } as any)
    setup()

    expect(screen.getByTestId('NavItem_ListItemIcon')).toBeTruthy()
    expect(screen.queryByTestId('NavItem_ListItemText')).toBeFalsy()
  })

  it('render NavItem selected correctly', () => {
    setup({
      isSelected: true
    })

    expect(screen.getByTestId('NavItem_ListItemButton').getAttribute('class')?.includes('Mui-selected')).toBeTruthy()
  })

  it('call onClick when click NavItem correctly', () => {
    setup()

    fireEvent.click(screen.getByTestId('NavItem_Link'))

    expect(defaultProp.onClick).toBeCalled()
  })
})
