import App from './App.tsx'
import { createBrowserRouter, RouteObject } from 'react-router-dom'

//components
import Shop from '@/pages/Shop/index.tsx'
import PageNotFound from '@/components/PageNotFound'
import ProductDetail from '@/pages/Shop/ProductDetail/index.tsx'

//constants
import { ROUTES } from '@/constants/routes.ts'

const routes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: <App />,
    errorElement: <PageNotFound isError headerContent='Opp!' body='Error page' />,
    children: [
      { index: true, element: <Shop /> },
      {
        element: <Shop />,
        path: ROUTES.SHOP
      },
      {
        path: ROUTES.PRODUCT_DETAIL,
        element: <ProductDetail />
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
