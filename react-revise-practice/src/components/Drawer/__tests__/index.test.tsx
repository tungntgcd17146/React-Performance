import { fireEvent, render, screen } from '@/utils/testUtils'
import { describe, expect, it, vi } from 'vitest'
import Drawer, { Props, listItems } from '..'

import * as useScreenWidth from '@/hooks/useScreenWidth'
import { BrowserRouter } from 'react-router-dom'
import { ModeProvider } from '@/contexts/modeContext/modeProvider'

const defaultProp = {
  isOpen: true,
  onClose: vi.fn(),
  onChangeMode: vi.fn(),
  mode: false,
  onOpen: vi.fn()
} as Props

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps
  }

  return render(
    <BrowserRouter>
      <ModeProvider>
        <Drawer {...props} />
      </ModeProvider>
    </BrowserRouter>
  )
}

describe('Drawer Test', () => {
  it('should render correct header include close button on mobile', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isTablet: false, isDesktop: false } as any)
    setup()

    expect(screen.getByTestId('Drawer_CloseIcon')).toBeTruthy()
  })

  it('should call onClose when close button on mobile', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isTablet: false, isDesktop: false } as any)
    setup()

    expect(screen.getByTestId('Drawer_CloseIcon')).toBeTruthy()

    fireEvent.click(screen.getByTestId('Drawer_CloseIcon'))
    expect(defaultProp.onClose).toHaveBeenCalled()
  })

  it('should hidden close button on desktop and tablet', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isTablet: true, isDesktop: true } as any)
    setup()

    expect(screen.queryByTestId('Drawer_CloseIcon')).toBeFalsy()
  })

  it('render NavItem correctly', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isDeskTop: true } as any)
    setup()

    expect(screen.queryAllByTestId('NavItem_Link').length).toEqual(listItems.length + 1)
  })

  it('should show ArrowForwardIcon icon on tablet', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isTablet: true } as any)
    setup({
      isOpen: false
    })

    expect(screen.getByTestId('Drawer_ArrowForwardIcon')).toBeTruthy()
  })
})
