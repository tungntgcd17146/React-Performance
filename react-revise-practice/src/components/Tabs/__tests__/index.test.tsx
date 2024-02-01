import { fireEvent, render, screen } from '@/utils/testUtils'
import { describe, expect, it, vi } from 'vitest'
import Tabs, { Props } from '..'
import * as useScreenWidth from '@/hooks/useScreenWidth'

import { tabItems } from '@/pages/Shop'

const defaultProp = {
  onTabClick: vi.fn(),
  onTabsChange: vi.fn(),
  tabItems: tabItems
} as Props

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps
  }

  return render(<Tabs {...props} />)
}

describe('Tabs Test', () => {
  it('render Tab number correctly', () => {
    setup()

    expect(screen.queryAllByTestId('Tabs_StyledTab').length).toEqual(defaultProp.tabItems.length)
  })

  it('render Tab with item is disabled correctly', () => {
    setup({
      tabItems: [...tabItems, { ...tabItems[2], text: 'Disable', isDisabled: true }]
    })

    expect(screen.getByText('Disable').getAttribute('disabled')).toBeDefined()
  })

  it('Call onTabChange and onTabClick when click Tab', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isMobile: true } as any)
    setup()

    const tabClicking = screen.queryAllByTestId('Tabs_StyledTab')[1]
    fireEvent.click(tabClicking)

    expect(defaultProp.onTabClick).toBeCalled()
    expect(defaultProp.onTabsChange).toBeCalled()
  })
})
