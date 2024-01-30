import App from './App.tsx'
import Shop from '@/pages/Shop/index.tsx'

import { createBrowserRouter, RouteObject } from 'react-router-dom'

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
          { index: true, element: <div> Products not implemented yet</div> },
          {
            path: '/shop/products',
            element: <div> Products not implemented yet</div>
          },
          {
            path: '/shop/*',
            element: <div> Tab not implemented yet</div>
          }
        ]
      },

      {
        path: '/product/:id',
        element: <div className='absolute'> Detail Prod not implemented yet</div>
      },
      {
        path: '/*',
        element: <div className='ml-[0px] md:ml-[430px]'> Page not implemented yet</div>
      }
    ]
  }
]

export const router = createBrowserRouter(routes)
