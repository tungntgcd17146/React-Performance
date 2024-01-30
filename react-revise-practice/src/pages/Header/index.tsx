import { useState, useCallback } from 'react'
import useScreenWidth from '@/hooks/useScreenWidth'

//mui
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import SearchIcon from '@mui/icons-material/Search'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import AddIcon from '@mui/icons-material/Add'
import Popper from '@mui/material/Popper'
import Hidden from '@mui/material/Hidden'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined'
import RecommendOutlinedIcon from '@mui/icons-material/RecommendOutlined'

//components
import IconButton from '@/components/IconButton'
import Drawer from '@/components/Drawer/'
import Avatar from '@/components/Avatar'
import Customer1 from '@/assets/customer1.png'
import { themes } from '@/themes'
import Button from '@/components/Button'
import SearchInput from '@/components/SearchInput'

//types
import { NavigateItem } from '@/types/navigateItem'
import useMatchPath from '@/hooks/useMatchPath'

//TODO: make it dynamic prop for this component
export const listItems: NavigateItem[] = [
  {
    text: 'Home',
    icon: <HomeOutlinedIcon />,
    isSelected: false,
    go: '/home'
  },
  {
    text: 'Products',
    icon: <DiamondOutlinedIcon />,
    isSelected: false,
    go: '/products'
  },
  {
    text: 'Customers',
    icon: <AccountCircleOutlinedIcon />,
    isSelected: false,
    go: '/customers'
  },
  {
    text: 'Shop',
    icon: <StorefrontOutlinedIcon />,
    isSelected: false,
    go: '/shop'
  },
  {
    text: 'Income',
    icon: <DonutSmallOutlinedIcon />,
    isSelected: false,
    go: '/income'
  },
  {
    text: 'Promote',
    icon: <RecommendOutlinedIcon />,
    isSelected: false,
    go: '/promote'
  }
]

const Header = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false)
  const [searchIconAnchorEl, setSearchIconAnchorEl] = useState<null | HTMLElement>(null)

  const { isMobile, isTablet, isDesktop } = useScreenWidth()
  const theme = useTheme()

  const newSelectedNavItem = useMatchPath(listItems)

  const handleClickMobileSearchIcon = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setSearchIconAnchorEl(searchIconAnchorEl ? null : event.currentTarget)
    },
    [searchIconAnchorEl]
  )

  const openSearchInputPopup = Boolean(searchIconAnchorEl)

  const handleCloseDrawer = useCallback(() => {
    setIsOpenDrawer(false)
  }, [setIsOpenDrawer])

  const handleOpenDrawer = useCallback(() => {
    setIsOpenDrawer(true)
  }, [setIsOpenDrawer])

  return (
    <Box
      sx={{
        marginLeft: isTablet ? '80px' : isDesktop ? '330px' : '0px',
        padding: '24px',
        height: '96px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.palette.background.paper
      }}
    >
      <Hidden mdDown>
        <SearchInput searchWidth='356px' placeholder='Search or type a command' endHelper='⌘ F' />
      </Hidden>

      {isMobile && <IconButton children={<DragHandleIcon />} onClick={handleOpenDrawer} />}
      <Drawer
        isOpen={isOpenDrawer}
        onOpen={handleOpenDrawer}
        onClose={handleCloseDrawer}
        listItems={newSelectedNavItem}
      />

      <div className='flex flex-row gap-[24px]'>
        {/* search input on mobile */}
        {isMobile && (
          <div>
            <IconButton onClick={handleClickMobileSearchIcon} children={<SearchIcon />} size='large' />
            <Popper
              open={openSearchInputPopup}
              anchorEl={searchIconAnchorEl}
              sx={{ backgroundColor: theme.palette.grey[200], width: '100%' }}
            >
              <Box sx={{ padding: ' 12px 16px' }}>
                <SearchInput placeholder='Search or type a command' />
              </Box>
            </Popper>
          </div>
        )}

        <Hidden lgDown>
          <Button sx={{ width: '120px' }} startIcon={<AddIcon />} children='Create' color='primary' />
        </Hidden>
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
