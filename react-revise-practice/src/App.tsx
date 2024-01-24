import CssBaseline from '@mui/material/CssBaseline/CssBaseline'
import { defaultTheme } from '@/materialTheme'
import Header from '@/pages/Header/Header'

import { useMode } from './contexts/modeContext/useModeContext'
import { Outlet } from 'react-router-dom'
import StyledEngineProvider from '@mui/styled-engine/StyledEngineProvider'
import { Grid, ThemeProvider } from '@mui/material'

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
