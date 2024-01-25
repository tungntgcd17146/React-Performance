import React, { createContext, useState } from 'react'
import { useMediaQuery } from '@mui/material'

interface ModeContextProps {
  isDarkMode: boolean
  toggleMode: () => void
}
// Create a context with initial state
const ModeContext = createContext<ModeContextProps | undefined>(undefined)

const ModeProvider = ({ children }: { children: React.ReactNode }) => {
  // Get the user's preferred color scheme
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  // State to manage the current mode
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode)

  // Function to toggle the mode
  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode)
  }

  return (
    // Provide the mode and toggle function to the context
    <ModeContext.Provider value={{ isDarkMode, toggleMode }}>{children}</ModeContext.Provider>
  )
}

export { ModeProvider, ModeContext }
