import Box from '@mui/material/Box'
import { useState } from 'react'
import { useMode } from '@/contexts/modeContext/useModeContext'
import useScreenWidth from '@/hooks/useScreenWidth'

//mui
import { useTheme } from '@mui/material'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import SearchIcon from '@mui/icons-material/Search'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import AddIcon from '@mui/icons-material/Add'

//components
import IconButton from '@/components/IconButton'
import Drawer from '@/components/Drawer/'
import Avatar from '@/components/Avatar'
import Customer1 from '@/assets/customer1.png'
import { themes } from '@/themes'
import Button from '@/components/Button'

const Header = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)

  const { isDarkMode, toggleMode } = useMode()
  const { isMobile, isTablet, isDesktop } = useScreenWidth()
  const theme = useTheme()

  const handleCloseDrawer = () => {
    setIsOpenDrawer(false)
  }

  const handleOpenDrawer = () => {
    setIsOpenDrawer(true)
  }

  return (
    <Box
      sx={{
        marginLeft: isTablet ? '80px' : isDesktop ? '330px' : '0px',
        padding: '24px',
        height: '96px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      {isMobile && <IconButton children={<DragHandleIcon />} onClick={handleOpenDrawer} />}
      <Drawer
        isOpen={isOpenDrawer}
        onOpen={handleOpenDrawer}
        onClose={handleCloseDrawer}
        onChangeMode={toggleMode}
        mode={isDarkMode}
      />

      <div className='flex flex-row gap-[24px]'>
        {isMobile && <IconButton children={<SearchIcon />} size='large' />}
        {!isMobile && <Button startIcon={<AddIcon />} children='Create' color='primary' />}
        <IconButton
          badgeContent={0}
          children={<ChatBubbleOutlineIcon />}
          size='large'
          sx={{ ':hover': { color: theme.palette.text.secondary } }}
        />
        <IconButton
          badgeContent={0}
          children={<NotificationsNoneIcon />}
          size='large'
          sx={{ ':hover': { color: theme.palette.text.secondary } }}
        />

        <Avatar avtBackground={themes.colors.yellow[600]} size='small' src={Customer1} alt='Customer1' />
      </div>
    </Box>
  )
}

export default Header
