/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, waitFor, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { vi } from 'vitest'
import { fetchProductById } from '@/api'
import { useProductQuery } from '@/hooks/useProductQuery'

vi.mock('@/api', () => ({
  fetchProductById: vi.fn()
}))

const TestComponent = () => {
  const query = useProductQuery({ keys: '1', idParam: '1' })

  return (
    <div>
      {query.isFetching ? 'Loading...' : null}
      {query.error ? 'Error: ' + query.error : null}
      {query.data ? (
        <ul>
          <li key={query.data.id}>{query.data.productName}</li>
        </ul>
      ) : null}
    </div>
  )
}

const queryClient = new QueryClient()

describe('useContactsQuery', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('fetches contacts successfully', async () => {
    const mockContacts = {
      id: 1,
      productName: 'John Doe'
      // ... other properties
    }

    // Mock the API function
    ;(fetchProductById as any).mockResolvedValue(mockContacts)

    // Render the component with the QueryClientProvider
    render(
      <QueryClientProvider client={queryClient}>
        <TestComponent />
      </QueryClientProvider>
    )

    // Wait for the query to resolve
    await waitFor(() => screen.getByText('Loading...'))

    // Check the final state of the component
    const errorElement = screen.queryByText('Error:')
    const dataElement = await screen.findByText('John Doe')

    // Assert that the hook behaves as expected
    expect(fetchProductById).toHaveBeenCalledWith('1') // Assuming params is undefined in your case
    expect(errorElement).toBeNull()
    expect(dataElement).toBeTruthy()
  })
})
