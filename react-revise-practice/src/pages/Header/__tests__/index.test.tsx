/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent, render, screen, waitFor } from '@/utils/testUtils'
import { describe, expect, it, vi } from 'vitest'
import Header from '../'
import * as useScreenWidth from '@/hooks/useScreenWidth'
import { ModeProvider } from '@/contexts/modeContext/modeProvider'

vi.mock('react-router-dom')

vi.mock('@/hooks/useMatchPath', () => ({
  __esModule: true,
  default: vi.fn(() => true) // Mock it to always return true for simplicity
}))

vi.mock('react-router-dom', () => ({
  useLocation: vi.fn(() => ({ pathname: '/' })),
  useNavigate: vi.fn(() => vi.fn())
}))

const defaultProp = {}

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps
  }

  return render(
    <ModeProvider>
      <Header {...props} />
    </ModeProvider>
  )
}

describe('Header Test', () => {
  it('render header on mobile', async () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isMobile: true, isTablet: false, isDesktop: false } as any)
    setup()

    expect(await screen.findByTestId('Header')).toBeTruthy()
    expect(screen.getByTestId('Header_SearchInputIcon_Mobile')).toBeTruthy()
    expect(screen.getByTestId('Header_MenuIcon')).toBeTruthy()
  })

  it('click search icon on mobile should show search input popup on mobile', async () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isMobile: true, isTablet: false, isDesktop: false } as any)
    setup()

    fireEvent.click(screen.getByTestId('Header_SearchInputIcon_Mobile'))

    expect(screen.getByTestId('Header_SearchInput_Mobile')).toBeTruthy()
  })

  it('open and close drawer on mobile ', async () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isMobile: true, isTablet: false, isDesktop: false } as any)
    setup()

    fireEvent.click(screen.getByTestId('Header_MenuIcon'))

    await waitFor(() => expect(screen.getByTestId('Drawer')).toBeTruthy())

    fireEvent.click(screen.getByTestId('Drawer_CloseIcon'))

    await waitFor(() => expect(screen.queryByTestId('Drawer')).toBeFalsy())
  })

  it('show drawer side bar on tablet correctly', () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isMobile: false, isTablet: true, isDesktop: false } as any)
    setup()

    expect(screen.findByTestId('Header_Drawer')).toBeTruthy()
  })

  it('show drawer side bar on desktop correctly', () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isMobile: false, isTablet: false, isDesktop: true } as any)
    setup()

    expect(screen.findByTestId('Header_Drawer')).toBeTruthy()
  })
})
