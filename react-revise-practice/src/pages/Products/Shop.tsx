import Box from '@mui/material/Box/Box'
import Button from '@/components/Button/Button'
import IconButton from '@mui/material/IconButton'
import { memo } from 'react'

import CoverPhoto from '@/assets/CoverPhoto.png'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'

import { useMode } from '@/contexts/modeContext/useModeContext'
import useScreenWidth from '@/hooks/useScreenWidth'

const Shop = () => {
  const { isDarkMode, toggleMode } = useMode()
  const { isTablet, isDesktop } = useScreenWidth()

  return (
    <Box
      component='main'
      sx={{ flexGrow: 1, p: 3, marginLeft: isTablet ? '80px' : isDesktop ? '330px' : '0px', padding: '0px' }}
    >
      <img src={CoverPhoto} alt='~/assets/CoverPhoto.png' className='w-full h-[252px]' />
      <Button
        startIcon={<HomeOutlinedIcon />}
        size='medium'
        color={isDarkMode ? `secondary` : `primary`}
        children='Button Toggle mode on the right'
        variant='outlined'
        onClick={() => {
          console.log('hello word')
        }}
      />

      <IconButton children={<HomeOutlinedIcon />} onClick={toggleMode} color={isDarkMode ? `primary` : `secondary`} />
    </Box>
  )
}

export default memo(Shop)
