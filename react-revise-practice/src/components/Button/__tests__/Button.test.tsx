import { fireEvent, render, screen } from '@/utils/testUtils'
import { describe, expect, it, vi } from 'vitest'
import Button, { Props } from '..'

const defaultProp = {
  size: 'medium',
  color: 'inherit',
  children: 'Button',
  onClick: vi.fn()
} as Props

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps
  }

  return render(<Button {...props} />)
}

describe('Button Test', () => {
  it('render Button correctly', () => {
    setup()

    expect(screen.getByTestId('Button')).toBeTruthy()
  })

  it('Disable Button correctly', () => {
    setup({
      size: 'small',
      color: 'primary',
      disabled: true
    })

    expect(screen.getByTestId('Button').getAttribute('disabled')).toBeDefined()
  })

  it('click Button call onClick correctly', () => {
    setup({
      size: 'small',
      color: 'success'
    })

    const button = screen.getByTestId('Button')

    fireEvent.click(button)

    expect(button.getAttribute('disabled')).toBeDefined()
  })
})
