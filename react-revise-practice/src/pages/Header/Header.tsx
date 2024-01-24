import Box from '@mui/material/Box'
import { useState } from 'react'
import { useMode } from '@/contexts/modeContext/useModeContext'
import useScreenWidth from '@/hooks/useScreenWidth'

import DragHandleIcon from '@mui/icons-material/DragHandle'
import SearchIcon from '@mui/icons-material/Search'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import IconButton from '@mui/material/IconButton'

import Drawer from '@/components/Drawer/Drawer'

const Header = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)

  const { isDarkMode, toggleMode } = useMode()
  const { isMobile, isTablet, isDesktop } = useScreenWidth()

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
        <IconButton children={<SearchIcon />} size='large' />
        <IconButton children={<ChatBubbleOutlineIcon />} size='large' />
        <IconButton children={<NotificationsNoneIcon />} size='large' />
      </div>
    </Box>
  )
}

export default Header
