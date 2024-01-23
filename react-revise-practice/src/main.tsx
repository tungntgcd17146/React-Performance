import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ModeProvider } from '@/contexts/modeContext/modeProvider'

export const rootElement = document.getElementById('root')!
const root = ReactDOM.createRoot(rootElement!)

root.render(
  <React.StrictMode>
    <ModeProvider>
      <App />
    </ModeProvider>
  </React.StrictMode>
)
