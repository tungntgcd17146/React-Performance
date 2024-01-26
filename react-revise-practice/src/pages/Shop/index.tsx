import { memo } from 'react'

import CoverPhoto from '@/assets/CoverPhoto.png'

//MUI
import Box from '@mui/material/Box/Box'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'

//components
import Button from '@/components/Button/'

//utils
import useScreenWidth from '@/hooks/useScreenWidth'

const Shop = () => {
  const { isTablet, isDesktop } = useScreenWidth()

  return (
    <Box
      component='main'
      sx={{ flexGrow: 1, p: 3, marginLeft: isTablet ? '80px' : isDesktop ? '330px' : '0px', padding: '0px' }}
    >
      <img src={CoverPhoto} alt='~/assets/CoverPhoto.png' className='w-full h-[252px]' />
      <Button startIcon={<HomeOutlinedIcon />} size='medium' color='inherit' children='Button Demo' />
    </Box>
  )
}

export default memo(Shop)
