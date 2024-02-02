import { fireEvent, render, screen, describe, expect, it, vi, waitFor } from '@/utils/testUtils'
import ProductFilter, { Props } from '..'

import * as useScreenWidth from '@/hooks/useScreenWidth'

const defaultProp = {} as Props

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps
  }

  return render(<ProductFilter {...props} />)
}

describe('ProductFilter Test', () => {
  it('render ProductFilter when click icon button correctly', () => {
    setup()

    fireEvent.click(screen.getByTestId('ProductFilter_IconButton'))

    expect(screen.getByTestId('ProductFilter_Popover')).toBeTruthy()
  })

  it('render and close ProductFilter on mobile when click icon button correctly', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isMobile: true } as any)
    setup()

    fireEvent.click(screen.getByTestId('ProductFilter_IconButton'))

    expect(screen.getByTestId('ProductFilter_Popover')).toBeTruthy()

    fireEvent.click(screen.getByTestId('ProductFilter_CloseIconButton'))

    await waitFor(() => expect(screen.queryByTestId('ProductFilter_Popover')).toBeFalsy())
  })
})
