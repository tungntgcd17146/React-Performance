import './wdyr'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { ModeProvider } from '@/contexts/modeContext/modeProvider'
import { router } from '@/routes.tsx'

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const rootElement = document.getElementById('root')!
const root = ReactDOM.createRoot(rootElement!)

// Create a client
const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ModeProvider>
        <RouterProvider router={router} />
      </ModeProvider>

      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  </React.StrictMode>
)
