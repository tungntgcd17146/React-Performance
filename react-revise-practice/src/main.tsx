import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { ModeProvider } from '@/contexts/modeContext/modeProvider'
import { router } from '@/routes.tsx'

import { QueryClient, QueryClientProvider } from 'react-query'

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
    </QueryClientProvider>
  </React.StrictMode>
)
