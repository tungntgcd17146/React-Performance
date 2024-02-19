import axios from 'axios'
import { vi } from 'vitest'
import { fetchContacts, fetchProducts, fetchProductById } from '@/api/index'
import { BASE_URL } from '@/constants/environment'

vi.mock('axios')

const mockData = {
  contacts: [
    {
      id: 1,
      userName: 'John Doe'
      // ... other properties
    }
    // ... more contacts
  ],
  products: [
    {
      id: '1',
      productName: 'Product 1'
      // ... other properties
    }
    // ... more products
  ]
}

describe('API Service', () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  it('fetches contacts successfully', async () => {
    axios.get.mockResolvedValue({ data: mockData.contacts })

    const result = await fetchContacts()

    expect(result).toEqual({
      data: mockData.contacts
    })
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`, { params: undefined })
  })

  it('fetches products successfully', async () => {
    axios.get.mockResolvedValue({ data: mockData.products })

    const result = await fetchProducts()

    expect(result).toEqual({
      data: mockData.products
    })
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/products`, { params: undefined })
  })

  it('fetches a product by id successfully', async () => {
    const productId = '1'
    axios.get.mockResolvedValue({ data: mockData.products[0] })

    const result = await fetchProductById(productId)

    expect(result).toEqual(mockData.products[0])
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/products/${productId}`, { params: undefined })
  })
})
