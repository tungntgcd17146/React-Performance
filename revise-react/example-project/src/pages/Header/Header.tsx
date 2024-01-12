import DragHandleIcon from '@mui/icons-material/DragHandle'
import SearchIcon from '@mui/icons-material/Search'
import CommonIcon from '~/components/Icon/Icon'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'

import Drawer from '@mui/material/Drawer'
import Button from '~/components/Button/Button'
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { useState } from 'react'

const Header = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    console.log('hello')

    setIsOpenDrawer(!isOpenDrawer)
  }

  const list = () => (
    <Box role='presentation'>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <div className='bg-white-600-500 p-[24px] h-[96px] flex flex-row justify-between content-center'>
      <Button children={<CommonIcon Icon={DragHandleIcon} />} onClick={toggleDrawer} />
      <Drawer
        PaperProps={{ sx: { width: '100%' } }}
        anchor={'left'}
        open={isOpenDrawer}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        {list()}
      </Drawer>

      <div className='flex flex-row'>
        <CommonIcon Icon={SearchIcon} />
        <CommonIcon Icon={ChatBubbleOutlineIcon} />
        <CommonIcon Icon={NotificationsNoneIcon} />
      </div>
    </div>
  )
}

export default Header
