import { memo } from 'react'

//MUI
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box/Box'
import Grid from '@mui/material/Grid'

//components
import ShopContent from '@/pages/Shop/ShopContent'
import BackgroundImage from '@/pages/Shop/BackgroundImage'
import OwnerInfo from '@/pages/Shop/OwnerInfo'

//utils
import useScreenWidth from '@/hooks/useScreenWidth'

const Shop = () => {
  const { isMobile, isTablet, isDesktop } = useScreenWidth()
  const theme = useTheme()

  return (
    <Box
      component='main'
      sx={{
        flexGrow: 1,
        p: 3,
        marginLeft: isTablet ? '80px' : isDesktop ? '330px' : '0px',
        padding: '0px'
      }}
      display='flex'
      flexDirection='column'
      alignItems='center'
    >
      <BackgroundImage />
      <Grid container sx={{ maxWidth: '1200px', padding: '16px' }}>
        <Grid
          container
          display='flex'
          justifyContent='center'
          sx={{
            padding: '24px',
            height: '100%',
            width: '100%',
            backgroundColor: theme.palette.background.paper,
            borderRadius: '8px',
            position: 'relative',
            marginTop: isMobile ? '-200px' : '-154px'
          }}
        >
          <OwnerInfo />
          <ShopContent />
        </Grid>
      </Grid>
    </Box>
  )
}

export default memo(Shop)
