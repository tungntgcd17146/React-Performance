import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { ModeProvider } from '@/contexts/modeContext/modeProvider'
import { router } from '@/routes.tsx'

const rootElement = document.getElementById('root')!
const root = ReactDOM.createRoot(rootElement!)

root.render(
  <React.StrictMode>
    <ModeProvider>
      <RouterProvider router={router} />
    </ModeProvider>
  </React.StrictMode>
)
