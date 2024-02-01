import { render, screen } from '@/utils/testUtils'
import { describe, expect, it, vi } from 'vitest'
import NotFoundPage, { Props } from '..'

import * as useScreenWidth from '@/hooks/useScreenWidth'

const defaultProp = {} as Props

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps
  }

  return render(<NotFoundPage {...props} />)
}

describe('NotFoundPage Test', () => {
  it('render NotFoundPage with error 404 correctly', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isTablet: true, isDesktop: false } as any)
    setup()

    expect(screen.getByText('404')).toBeTruthy()
  })

  it('render NotFoundPage with error 404 on mobile correctly', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isTablet: false, isDesktop: false } as any)
    setup()

    expect(screen.getByText('404')).toBeTruthy()
  })

  it('render NotFoundPage with custom content correctly', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isTablet: false, isDesktop: true } as any)
    setup({
      headerContent: 'Oops',
      body: 'This page does not exist.',
      footer: 'This feature will be implemented in the future.',
      isError: false
    })

    expect(screen.getByText('Oops')).toBeTruthy()
    expect(screen.getByText('This page does not exist.')).toBeTruthy()
    expect(screen.getByText('This feature will be implemented in the future.')).toBeTruthy()
  })
})
