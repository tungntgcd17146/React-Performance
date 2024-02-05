import { fireEvent, render, screen } from '@/utils/testUtils'
import { describe, expect, it, vi } from 'vitest'
import ImageDrawer, { Props } from '..'

import * as useScreenWidth from '@/hooks/useScreenWidth'
import DarkProductDetail from '@/assets/ProductDetailImgDark.jpg'

const defaultProp = {
  image: DarkProductDetail
} as Props

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps
  }

  return render(<ImageDrawer {...props} />)
}

describe('ImageDrawer Test', () => {
  it('render ImageDrawer with icon and text correctly', () => {
    setup()

    expect(screen.getByTestId('ImageDrawer_Img')).toBeTruthy()
  })

  it('render ImageDrawer when click image correctly', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ matchedBreakpoint: true } as any)
    setup()

    fireEvent.click(screen.getByTestId('ImageDrawer_Img'))

    expect(screen.getByTestId('ImageDrawer_Img_Modal')).toBeTruthy()
  })
})
