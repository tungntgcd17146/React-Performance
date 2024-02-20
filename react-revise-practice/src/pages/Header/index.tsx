import { useState, useCallback, useEffect, useMemo } from 'react'
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
import { NavigateItem } from '@/types'
import useMatchPath from '@/hooks/useMatchPath'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'

export const listItems: NavigateItem[] = [
  {
    text: 'Home',
    icon: <HomeOutlinedIcon />,
    go: '/home'
  },
  {
    text: 'Products',
    icon: <DiamondOutlinedIcon />,
    go: '/products'
  },
  {
    text: 'Customers',
    icon: <AccountCircleOutlinedIcon />,
    go: '/customers'
  },
  {
    text: 'Shop',
    icon: <StorefrontOutlinedIcon />,
    go: ROUTES.SHOP
  },
  {
    text: 'Income',
    icon: <DonutSmallOutlinedIcon />,
    go: '/income'
  },
  {
    text: 'Promote',
    icon: <RecommendOutlinedIcon />,
    go: '/promote'
  }
]

const Header = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false)
  const [searchIconAnchorEl, setSearchIconAnchorEl] = useState<null | HTMLElement>(null)

  const { isMobile, isTablet, isDesktop } = useScreenWidth()
  const theme = useTheme()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  //default select shop page when login app
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    if (pathname === ROUTES.HOME) {
      navigate(ROUTES.SHOP)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  const selectedNavItem = listItems.map((item) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return { ...item, isSelected: useMatchPath(item.go!) }
  })

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

  const iconButtonStyles = useMemo(
    () => ({ ':hover': { color: theme.palette.text.secondary } }),
    [theme.palette.text.secondary]
  )

  return (
    <Box
      data-testid='Header'
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
        <SearchInput
          data-testid='Header_SearchInput'
          searchWidth='356px'
          placeholder='Search or type a command'
          endHelper='⌘ F'
        />
      </Hidden>

      {isMobile && (
        <IconButton data-testid='Header_MenuIcon' children={<DragHandleIcon />} onClick={handleOpenDrawer} />
      )}
      <Drawer
        data-testid='Header_Drawer'
        isOpen={isOpenDrawer}
        onOpen={handleOpenDrawer}
        onClose={handleCloseDrawer}
        listItems={selectedNavItem}
      />

      <div className='flex flex-row gap-[24px]'>
        {/* search input on mobile */}
        {isMobile && (
          <div>
            <IconButton
              data-testid='Header_SearchInputIcon_Mobile'
              onClick={handleClickMobileSearchIcon}
              children={<SearchIcon />}
              size='large'
            />
            <Popper
              open={openSearchInputPopup}
              anchorEl={searchIconAnchorEl}
              sx={{ backgroundColor: theme.palette.grey[200], width: '100%' }}
            >
              <Box sx={{ padding: ' 12px 16px' }}>
                <SearchInput data-testid='Header_SearchInput_Mobile' placeholder='Search or type a command' />
              </Box>
            </Popper>
          </div>
        )}

        <Hidden lgDown>
          <Button
            sx={useMemo(() => ({ width: '120px' }), [])}
            startIcon={useMemo(
              () => (
                <AddIcon />
              ),
              []
            )}
            children='Create'
            color='primary'
          />
        </Hidden>
        <IconButton
          badgeContent={0}
          children={useMemo(
            () => (
              <ChatBubbleOutlineIcon />
            ),
            []
          )}
          size='large'
          sx={iconButtonStyles}
        />
        <IconButton
          badgeContent={0}
          children={useMemo(
            () => (
              <NotificationsNoneIcon />
            ),
            []
          )}
          size='large'
          sx={iconButtonStyles}
        />

        <Avatar avtBackground={themes.colors.yellow[600]} size='small' src={Customer1} alt='Customer1' />
      </div>
    </Box>
  )
}

export default Header
