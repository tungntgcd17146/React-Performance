import DragHandleIcon from '@mui/icons-material/DragHandle'
import SearchIcon from '@mui/icons-material/Search'
import CommonIcon from '~/components/Icon/Icon'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import { useState } from 'react'

import Button from '~/components/Button/Button'
import Drawer from '~/components/Drawer/Drawer'
import { useMediaQuery } from '@mui/material'

const Header = ({ onChangeMode, mode }) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)

  const toggleDrawer = () => {
    setIsOpenDrawer(!isOpenDrawer)
  }

  // const breakPoint = useMediaQuery('(max-width: 640px)')

  return (
    <div className='bg-white-600-500 p-[24px] h-[96px] flex flex-row justify-between content-center'>
      <Button children={<CommonIcon Icon={DragHandleIcon} />} onClick={toggleDrawer} />
      <Drawer isOpen={isOpenDrawer} onClose={toggleDrawer} onChangeMode={onChangeMode} mode={mode} />

      <div className='flex flex-row gap-[24px]'>
        <CommonIcon Icon={SearchIcon} />
        <CommonIcon Icon={ChatBubbleOutlineIcon} />
        <CommonIcon Icon={NotificationsNoneIcon} />
      </div>
    </div>
  )
}

export default Header
