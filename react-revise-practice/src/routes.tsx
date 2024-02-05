import App from './App.tsx'
import { createBrowserRouter, RouteObject } from 'react-router-dom'

import Shop from '@/pages/Shop/index.tsx'
import Products from '@/pages/Shop/Products'
import PageNotFound from '@/components/PageNotFound'
import Followers from '@/pages/Shop/Followers'
import Following from '@/pages/Shop/Following'
import ProductDetail from '@/pages/ProductDetail/index.tsx'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <div> Opp!!! Error page </div>,
    children: [
      { index: true, element: <Shop /> },
      {
        element: <Shop />,
        path: '/shop',
        children: [
          {
            path: '/shop/products',
            element: <Products />
          },
          {
            path: '/shop/followers',
            element: <Followers />
          },
          {
            path: '/shop/following',
            element: <Following />
          },
          {
            path: '/shop/*',
            element: <div> Other Tab not implemented yet</div>
          }
        ]
      },
      {
        path: '/product/:id',
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
