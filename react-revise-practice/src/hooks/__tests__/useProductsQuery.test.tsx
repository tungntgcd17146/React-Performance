/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useProductsQuery } from '../useProductsQuery' // Replace with the actual path to your hook file
import { vi } from 'vitest'
import { fetchProducts } from '@/api'

vi.mock('@/api', () => ({
  fetchProducts: vi.fn()
}))

const TestComponent = () => {
  const query = useProductsQuery({ keys: 'someKeys' })

  return (
    <div>
      {query.isFetching ? 'Loading...' : null}
      {query.error ? 'Error: ' + query.error : null}
      {query.data ? (
        <ul>
          {(query.data as any).map((product: any) => (
            <li key={product.id}>{product.productName}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

const queryClient = new QueryClient()

describe('useProductsQuery', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('fetches products successfully', async () => {
    const mockProducts = [
      {
        id: '1',
        productName: 'Product 1'
        // ... other properties
      }
      // ... more products
    ]
    // Mock the API function
    ;(fetchProducts as any).mockResolvedValue(mockProducts)

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
    const dataElement = await screen.findByText('Product 1')

    // Assert that the hook behaves as expected
    expect(fetchProducts).toHaveBeenCalledWith(undefined) // Assuming params is undefined in your case
    expect(errorElement).toBeNull()
    expect(dataElement).toBeTruthy()
  })
})
