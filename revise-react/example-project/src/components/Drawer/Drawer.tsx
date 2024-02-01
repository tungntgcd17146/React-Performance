import { Grid, Drawer as MuiDrawer } from '@mui/material'
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import CloseIcon from '@mui/icons-material/Close'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined'
import RecommendOutlinedIcon from '@mui/icons-material/RecommendOutlined'

import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'

import DarkLogo from '~/assets/DarkLogo.png'
import LightLogo from '~/assets/LightLogo.png'
import Button from '~/components/Button/Button'
import classNames from 'classnames'

const listItems = [
  {
    text: 'Home',
    icon: <HomeOutlinedIcon />
  },
  {
    text: 'Products',
    icon: <DiamondOutlinedIcon />
  },
  {
    text: 'Customers',
    icon: <AccountCircleOutlinedIcon />
  },
  {
    text: 'Shop',
    icon: <StorefrontOutlinedIcon />
  },
  {
    text: 'Income',
    icon: <DonutSmallOutlinedIcon />
  },
  {
    text: 'Promote',
    icon: <RecommendOutlinedIcon />
  }
]

const Drawer = ({ isOpen, onClose, onChangeMode, mode }) => {
  const list = () => (
    <Grid container className='flex flex-col justify-between h-dvh p-[16px]'>
      <Grid className='flex flex-col justify-between'>
        <Grid className='flex flex-row justify-between mb-[24px]'>
          <Button children={<CloseIcon />} onClick={onClose} />

          {!mode ? (
            <img src={DarkLogo} alt='~/assets/DarkLogo.png' className='w-[48px] h-[48px]' />
          ) : (
            <img src={LightLogo} alt='~/assets/LightLogo.png' className='w-[48px] h-[48px]' />
          )}
        </Grid>
        <List>
          {listItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Grid>

      <div className='flex flex-col'>
        <Divider />
        <div className='flex flex-col g-[16px]'>
          {/* <ListItem disablePadding> */}
          <ListItemButton>
            <ListItemIcon>{<HelpOutlineOutlinedIcon />}</ListItemIcon>
            <ListItemText primary={'Help & getting started'} />
          </ListItemButton>

          {/* <ListItemButton> */}

          {/* switchMode */}
          <div
            className={`flex flex-row justify-between w-full h-[36px] rounded-[16px] pt-[4px] pb-[4px] pl-[2px] pr-[2px] ${
              !mode ? 'bg-white-700' : 'bg-black-800'
            }`}
          >
            <Button
              className={classNames('w-full rounded-[16px] hover:bg-white-600', {
                'bg-white-600 text-black-700': !mode,
                'text-gray-700': mode
              })}
              children={'Light'}
              startIcon={<LightModeIcon />}
              onClick={onChangeMode}
            />
            <Button
              className={classNames('w-full rounded-[16px] hover:bg-black-600', {
                'bg-black-600 text-white-600': mode,
                'text-gray-700': !mode
              })}
              children='Dark'
              startIcon={<DarkModeOutlinedIcon />}
              onClick={onChangeMode}
            />
          </div>
        </div>
      </div>
    </Grid>
  )

  return (
    <MuiDrawer
      PaperProps={{ className: 'w-full sm:w-[330px] bg-none' }}
      anchor={'left'}
      open={isOpen}
      onClose={onClose}
    >
      {list()}
    </MuiDrawer>
  )
}

export default Drawer
