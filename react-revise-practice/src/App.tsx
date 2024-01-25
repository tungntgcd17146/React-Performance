import { Outlet } from 'react-router-dom'

import Header from '@/pages/Header'

import { useMode } from './contexts/modeContext/useModeContext'
import { defaultTheme } from '@/materialTheme'

import { ThemeProvider } from '@mui/material'
import Grid from '@mui/material/Grid'
import CssBaseline from '@mui/material/CssBaseline/CssBaseline'
import StyledEngineProvider from '@mui/styled-engine/StyledEngineProvider'

function App() {
  const { isDarkMode } = useMode()

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={defaultTheme(isDarkMode)}>
        <CssBaseline />
        <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
          <Header />

          <Outlet />
        </Grid>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
