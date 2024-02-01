import { CssBaseline, Grid, StyledEngineProvider, ThemeProvider, useMediaQuery } from '@mui/material'
import { useState } from 'react'
import { defaultTheme } from '~/materialTheme'
import Header from '~/pages/Header/Header'

import CoverPhoto from '~/assets/CoverPhoto.png'
import Button from '~/components/Button/Button'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)')
  const [mode, setMode] = useState(prefersDarkMode)

  const handleChangeMode = () => {
    if (mode) {
      setMode(false)
    } else {
      setMode(true)
    }
  }

  console.log('mode', mode)

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={defaultTheme(mode)}>
        <CssBaseline />
        <Grid container direction={'column'} className='flex'>
          <Header onChangeMode={handleChangeMode} mode={mode} />
          <img src={CoverPhoto} alt='~/assets/CoverPhoto.png' className='w-full h-[252px]' />
          <Button
            // className='w-[100px]'
            startIcon={<HomeOutlinedIcon />}
            size='medium'
            color='primary'
            children='Button'
            // disabled
            // sx={{ width: '100px' }}
            onClick={() => {
              console.log('hello word')
            }}
          />

          {/* <Button children='Button' color='primary' variant='contained' /> */}
        </Grid>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
