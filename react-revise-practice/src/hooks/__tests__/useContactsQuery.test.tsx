/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, waitFor, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useContactsQuery } from '../useContactsQuery'
import { vi } from 'vitest'
import { fetchContacts } from '@/api'

vi.mock('@/api', () => ({
  fetchContacts: vi.fn()
}))

const TestComponent = () => {
  const query = useContactsQuery({ keys: 'someKeys' })

  return (
    <div>
      {query.isFetching ? 'Loading...' : null}
      {query.error ? 'Error: ' + query.error : null}
      {query.data ? (
        <ul>
          {(query.data as any).map((contact: any) => (
            <li key={contact.id}>{contact.userName}</li>
          ))}
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
    const mockContacts = [
      {
        id: 1,
        userName: 'John Doe'
        // ... other properties
      }
      // ... more contacts
    ]

    // Mock the API function
    fetchContacts.mockResolvedValue(mockContacts)

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
    const dataElement = screen.queryByText('John Doe')

    // Assert that the hook behaves as expected
    expect(fetchContacts).toHaveBeenCalledWith(undefined) // Assuming params is undefined in your case
    expect(errorElement).toBeNull()
    expect(dataElement).toBeTruthy()
  })
})
