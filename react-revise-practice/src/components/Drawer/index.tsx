import { memo, useMemo } from 'react'

//MUI
import { Drawer as MuiDrawer } from '@mui/material'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import CloseIcon from '@mui/icons-material/Close'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined'
import RecommendOutlinedIcon from '@mui/icons-material/RecommendOutlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { useTheme } from '@mui/material/styles'

//components
import DarkLogo from '@/assets/DarkLogo.png'
import LightLogo from '@/assets/LightLogo.png'
import NavItem from '@/components/NavItem/'
import Logo from '@/components/Logo/'
import SwitchMode from '@/components/SwitchMode'

//utils
import useScreenWidth from '@/hooks/useScreenWidth'

export interface Props {
  isOpen: boolean
  onClose: () => void
  mode: boolean
  onOpen: () => void
}

//TODO: make it dynamic prop for this component
export const listItems = [
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
    isSelected: true,
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

const Drawer = ({ isOpen, onClose, onOpen, mode }: Props) => {
  const { isMobile, isDesktop, isTablet } = useScreenWidth()
  const theme = useTheme()

  const isLargerDrawerOnTablet = useMemo(() => isTablet && isOpen, [isTablet, isOpen])

  const shouldShowFullContentOnDrawer = useMemo(
    () => isLargerDrawerOnTablet || isDesktop || isMobile,
    [isLargerDrawerOnTablet, isDesktop, isMobile]
  )

  const ListItem: React.ReactNode = (
    <Grid container display='flex' direction='column' justifyContent='space-between' height='100%' padding='16px'>
      <Grid item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {!isTablet ? (
          <Grid
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: '24px'
            }}
          >
            {!isDesktop && (
              <IconButton data-testid='Drawer_CloseIcon' children={<CloseIcon />} onClick={onClose} size='large' />
            )}

            <Logo logoImage={mode ? LightLogo : DarkLogo} />
          </Grid>
        ) : (
          <Logo logoImage={mode ? LightLogo : DarkLogo} />
        )}
        <List>
          {listItems.map((item, index) => {
            const { text, icon, isSelected, go } = item

            return (
              <NavItem
                go={go}
                key={index}
                icon={icon}
                text={text}
                index={index}
                isSelected={isSelected}
                isShowText={shouldShowFullContentOnDrawer}
              />
            )
          })}
        </List>
      </Grid>

      <Grid item>
        {isTablet && !isOpen && (
          <IconButton
            data-testid='Drawer_ArrowForwardIcon'
            children={<ArrowForwardIcon />}
            size='large'
            sx={{ color: theme.palette.text.primary }}
            onClick={onOpen}
          />
        )}
        <Divider sx={{ color: theme.palette.grey[100], marginBottom: '12px' }} />
        <NavItem
          go={'/helps'}
          icon={<HelpOutlineIcon />}
          text={'Help & Getting stated'}
          isSelected={false}
          isShowText={shouldShowFullContentOnDrawer}
        />

        {/* switchMode */}
        <SwitchMode isLargerDrawerOnTablet={isLargerDrawerOnTablet} />
      </Grid>
    </Grid>
  )

  return (
    <MuiDrawer
      sx={{
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box'
      }}
      variant={isMobile || isLargerDrawerOnTablet ? 'temporary' : 'permanent'}
      PaperProps={{
        sx: {
          backgroundImage: 'none',
          width: isTablet && !isOpen ? '80px' : isDesktop || isLargerDrawerOnTablet ? '330px' : '100%'
        }
      }}
      anchor={isMobile ? 'right' : 'left'}
      transitionDuration={isTablet ? 0 : 300}
      open={isOpen}
      onClose={onClose}
    >
      {ListItem}
    </MuiDrawer>
  )
}

export default memo(Drawer)
