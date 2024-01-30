import NotFoundPage from '@/components/PageNotFound/index.tsx'
import App from './App.tsx'
import Shop from '@/pages/Shop/index.tsx'

import { createBrowserRouter, RouteObject } from 'react-router-dom'
import Products from '@/pages/Shop/Products.tsx'

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
          { index: true, element: <Products /> },
          {
            path: '/shop/*',
            element: <div> Other Tab not implemented yet</div>
          }
        ]
      },

      {
        path: '/product/:id',
        element: <div className='absolute'> Detail Prod not implemented yet</div>
      },
      {
        path: '/*',
        element: (
          <NotFoundPage
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
