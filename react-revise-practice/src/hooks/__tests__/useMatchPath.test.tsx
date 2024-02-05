/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '../../utils/testUtils'

import useMatchPath from '../useMatchPath'
import { useMatches } from 'react-router-dom'
import { vi } from 'vitest'
import { ROUTES } from '@/constants/routes'

vi.mock('react-router-dom')

const defaultProp = {}
// TestComponent.jsx
const MockComponent = () => {
  const isMatch = useMatchPath(ROUTES.SHOP)

  if (isMatch) return <div data-testid='isSelected'>{'Shop'}</div>

  return null
}

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps
  }

  return render(<MockComponent {...props} />)
}

it('returns correct values', async () => {
  vi.mocked(useMatches).mockReturnValue([{ pathname: ROUTES.SHOP }] as any)
  setup()

  expect(screen.getByTestId('isSelected').textContent).toEqual('Shop')
})
