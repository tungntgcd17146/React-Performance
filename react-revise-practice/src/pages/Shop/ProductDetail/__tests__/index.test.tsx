/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent, render, screen, waitFor } from '@/utils/testUtils'
import { describe, expect, it, vi } from 'vitest'
import ProductDetail from '../'
import * as useScreenWidth from '@/hooks/useScreenWidth'
import { fakeFeatureForProductData, fakeProductOverview } from '@/constants/data'
import { QueryClient, QueryClientProvider } from 'react-query'
import { fetchProductById } from '@/api'

vi.mock('@/api', () => ({
  fetchProductById: vi.fn()
}))

vi.mock('react-router-dom')

vi.mock('react-router-dom', () => ({
  useParams: vi.fn(() => ({ id: '1' })),
  useLocation: vi.fn(() => ({ pathname: '/product/1' })),
  useNavigate: vi.fn(() => vi.fn())
}))

const mockProduct = {
  id: '1',
  productName: 'Product 1',
  productCategory: 'Category 1',
  productPrice: 100,
  productRating: 4.5,
  productRatingCount: 100,
  productOverview: fakeProductOverview,
  productFeature: fakeFeatureForProductData
  // ... other properties
}

const defaultProp = {}

const queryClient = new QueryClient()

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps
  }

  return render(
    <QueryClientProvider client={queryClient}>
      <ProductDetail {...props} />
    </QueryClientProvider>
  )
}

describe('ProductDetail Test', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })
  it('render ProductDetail correctly after fetching product data', async () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isMobile: true, isTablet: false, isDesktop: false } as any)

    // Mock the API function
    ;(fetchProductById as any).mockResolvedValue(mockProduct)
    setup()

    expect(screen.getByTestId('ProductDetail_Loading')).toBeTruthy()

    await waitFor(() => {
      expect(screen.getByTestId('ProductDetail_CloseIconButton')).toBeTruthy()
      expect(screen.getByTestId('ProductDetail_EditButton')).toBeTruthy()
    })
  })

  it('go back shop page when click close', async () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isMobile: false, isTablet: false, isDesktop: true } as any)

    // Mock the API function
    ;(fetchProductById as any).mockResolvedValue(mockProduct)
    setup()

    await waitFor(() => {
      expect(screen.getByTestId('ProductDetail_CloseIconButton')).toBeTruthy()

      fireEvent.click(screen.getByTestId('ProductDetail_CloseIconButton'))
    })
  })

  it('show Error page when fetch product data error', async () => {
    vi.restoreAllMocks()
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isMobile: false, isTablet: false, isDesktop: true } as any)

    setup()

    // Mock undefined value for the API function
    ;(fetchProductById as any).mockResolvedValue(undefined)

    await waitFor(() => {
      expect(screen.getByText('Error page')).toBeTruthy()
    })
  })
})
