import { render, screen } from '@/utils/testUtils'
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
  it('render Button', () => {
    setup()

    expect(screen.getByText('Button')).toBeTruthy()
  })
})
