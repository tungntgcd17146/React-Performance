import App from './App.tsx'
import Shop from '@/pages/Shop/index.tsx'

import { createBrowserRouter, RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <div> Opp!!! Error page </div>,
    children: [
      { index: true, element: <Shop />, path: '/shop' },
      {
        path: '/*',
        element: <div> Page not implemented yet</div>
      }
    ]
  }
]

export const router = createBrowserRouter(routes)
