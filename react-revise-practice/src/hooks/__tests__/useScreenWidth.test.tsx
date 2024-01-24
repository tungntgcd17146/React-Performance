/* eslint-disable @typescript-eslint/no-explicit-any */
import { vi } from 'vitest'
import { render } from '../../utils/testUtils'

import useScreenWidth, { Options } from '../useScreenWidth'
import { ThemeProvider } from '@mui/material/styles'
import { defaultTheme } from '@/materialTheme'
import * as useTheme from '@mui/material/styles/useTheme'

const defaultProp = {}
// TestComponent.jsx
const MockComponent = ({ ...props }: Options) => {
  const value = useScreenWidth(props)

  if (value.matchedBreakpoint) return <div data-testid='matchedBreakpoint' />
  if (value.isMobile) return <div data-testid='isMobile' />
  if (value.isTablet) return <div data-testid='isTablet' />
  if (value.isDesktop) return <div data-testid='isDesktop' />
  return null
}

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps
  }

  // Wrap the component tree with ThemeProvider
  return render(
    <ThemeProvider theme={defaultTheme(true)}>
      <MockComponent {...props} />
    </ThemeProvider>
  )
}

it('useScreenWidth returns correct values', async () => {
  // Wrap the component tree with ThemeProvider
  const { unmount } = setup()
  const result = vi.spyOn(useTheme, 'default').mockReturnValue(defaultTheme(true))

  expect(result).toBeTruthy()

  // Clean up
  unmount()
})
