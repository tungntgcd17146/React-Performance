import App from './App.tsx'
import { createBrowserRouter, RouteObject } from 'react-router-dom'

//components
import Shop from '@/pages/Shop/index.tsx'
import Products from '@/pages/Shop/Products'
import PageNotFound from '@/components/PageNotFound'
import Followers from '@/pages/Shop/Followers'
import Following from '@/pages/Shop/Following'
import ProductDetail from '@/pages/ProductDetail/index.tsx'

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
        path: ROUTES.SHOP,
        children: [
          { index: true, element: <Products /> },
          {
            path: ROUTES.SHOP_PRODUCTS,
            element: <Products />
          },
          {
            path: ROUTES.SHOP_FOLLOWERS,
            element: <Followers />
          },
          {
            path: ROUTES.SHOP_FOLLOWING,
            element: <Following />
          },
          {
            path: `${ROUTES.SHOP}/*`,
            element: <PageNotFound isError headerContent='Opp!' body='Other Tab not implemented yet' />
          }
        ]
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
