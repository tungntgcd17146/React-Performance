/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent, render, screen } from '@/utils/testUtils'
import { describe, expect, it, vi } from 'vitest'
import NotFoundPage, { Props } from '..'

import * as useScreenWidth from '@/hooks/useScreenWidth'
import { useNavigate } from 'react-router-dom'

vi.mock('react-router-dom')

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
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isTablet: true, isDesktop: false } as any)
    setup()

    expect(screen.getByText('404')).toBeTruthy()
  })

  it('render NotFoundPage with error 404 on mobile correctly', () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isTablet: false, isDesktop: false } as any)
    setup()

    expect(screen.getByText('404')).toBeTruthy()
  })

  it('re-direct home page when click go home button correctly', () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isTablet: false, isDesktop: false } as any)
    const spyNavigate = vi.mocked(useNavigate).mockReturnValue(vi.fn() as any)
    setup()

    fireEvent.click(screen.getByTestId('NotFoundPage_Button'))

    expect(spyNavigate).toBeCalled()
  })

  it('render NotFoundPage with custom content correctly', () => {
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
