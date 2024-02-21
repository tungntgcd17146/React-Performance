import { lazy, Suspense } from 'react'
import App from './App.tsx'
import { createBrowserRouter, RouteObject } from 'react-router-dom'

//components
import Shop from '@/pages/Shop/index.tsx'
import Loading from '@/components/Loading/index.tsx'
import PageNotFound from '@/components/PageNotFound/index.tsx'

//constants
import { ROUTES } from '@/constants/routes.ts'

const ProductDetail = lazy(() => import('@/pages/Shop/ProductDetail/index.tsx'))

const routes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: <App />,
    errorElement: <PageNotFound isBrowserError headerContent='Opp!' body='Error page' />,
    children: [
      { index: true, element: <Shop /> },
      {
        element: <Shop />,
        path: ROUTES.SHOP
      },
      {
        path: ROUTES.PRODUCT_DETAIL,
        element: (
          <Suspense fallback={<Loading />}>
            <ProductDetail />
          </Suspense>
        )
      },
      {
        path: '/*',
        element: (
          <PageNotFound
            headerContent='Oops'
            body='This page does not exist.'
            footer='This feature will be implemented in the future.'
          />
        )
      }
    ]
  }
]

export const router = createBrowserRouter(routes)
