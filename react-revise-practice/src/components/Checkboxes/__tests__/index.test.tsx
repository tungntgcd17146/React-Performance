import { fireEvent, render, screen, describe, expect, it, vi } from '@/utils/testUtils'
import Checkboxes, { Props } from '..'

const defaultProp = {
  checkboxOptions: [
    {
      id: '1',
      label: 'All Products',
      labelPlacement: 'start',
      onChange: vi.fn()
    },
    {
      id: '2',
      label: 'UI Kit',
      labelPlacement: 'start',
      onChange: vi.fn()
    },
    {
      id: '3',
      label: 'IIIustration',
      labelPlacement: 'start',
      onChange: vi.fn()
    },
    {
      id: '4',
      label: 'Wireframe Kit',
      labelPlacement: 'start',
      onChange: vi.fn()
    },
    {
      id: '5',
      label: 'Icons',
      labelPlacement: 'start',
      onChange: vi.fn()
    }
  ]
} as Props

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps
  }

  return render(<Checkboxes {...props} />)
}

describe('Checkboxes Test', () => {
  it('render Checkboxes  correctly', () => {
    setup()

    expect(screen.getAllByRole('checkbox').length).toEqual(5)
  })

  it('onChangeValue when click checkbox correctly', () => {
    setup()

    const checkbox = screen.getAllByRole('checkbox')[0]
    fireEvent.click(checkbox)

    expect(defaultProp.checkboxOptions[0].onChange).toBeCalled()
  })
})
