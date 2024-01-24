import { CssBaseline, Grid, StyledEngineProvider, ThemeProvider } from '@mui/material'
import { defaultTheme } from '@/materialTheme'
import Header from '@/pages/Header/Header'

import { useMode } from './contexts/modeContext/useModeContext'
import { Outlet } from 'react-router-dom'

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
