import { memo } from 'react'

import CoverPhoto from '@/assets/CoverPhoto.jpg'
import CoverPhotoMobile from '@/assets/CoverPhotoMobile.jpg'

//MUI
import Box from '@mui/material/Box/Box'
import TwitterIcon from '@mui/icons-material/Twitter'
import AddIcon from '@mui/icons-material/Add'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import Divider from '@mui/material/Divider'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'

//components
import Button from '@/components/Button/'

import Customer1 from '@/assets/customer1.png'
import { Outlet } from 'react-router-dom'

//utils
import useScreenWidth from '@/hooks/useScreenWidth'
import { Grid, Typography } from '@mui/material'
import Avatar from '@/components/Avatar'
import { themes } from '@/themes'
import { useTheme } from '@mui/material/styles'
import IconButton from '@/components/IconButton'
import Tabs from '@/components/Tabs'
import Select from '@/components/Select'

//TODO: Constant for all options
const tabItems = [
  {
    text: 'Products',
    go: '/shop/products',
    disabled: false
  },
  {
    text: 'Followers',
    go: '/shop/followers',
    disabled: false
  },
  {
    text: 'Following',
    go: '/shop/following',
    disabled: false
  }
]

const selectOption = [
  {
    id: '1',
    name: 'Most recent'
  },
  {
    id: '2',
    name: 'Most new'
  },
  {
    id: '3',
    name: 'Most popular'
  }
]

const Shop = () => {
  const { isMobile, isTablet, isDesktop } = useScreenWidth()
  const theme = useTheme()

  return (
    <Box
      component='main'
      sx={{
        flexGrow: 1,
        p: 3,
        marginLeft: isTablet ? '80px' : isDesktop ? '330px' : '0px',
        padding: '0px'
      }}
      display='flex'
      flexDirection='column'
      alignItems='center'
    >
      {isMobile ? (
        <img src={CoverPhotoMobile} alt='~/assets/CoverPhotoMobile.png' className='w-full h-[252px]' />
      ) : (
        <img src={CoverPhoto} alt='~/assets/CoverPhoto.jpg' className='w-full h-[400px]' />
      )}
      <Grid container sx={{ maxWidth: '1200px', padding: '16px' }}>
        <Grid
          container
          display='flex'
          justifyContent='center'
          sx={{
            padding: '24px 16px',
            height: '100%',
            width: '100%',
            backgroundColor: theme.palette.background.paper,
            borderRadius: '8px',
            position: 'relative',
            marginTop: isMobile ? '-200px' : '-64px'
          }}
        >
          {/* information */}
          <Grid item xs={12} sm={12} lg={8} display='flex' flexDirection='row' sx={{ marginBottom: '12px' }}>
            <Avatar
              avtBackground={themes.colors.yellow[600]}
              size='large'
              src={Customer1}
              alt='Customer1'
              BadgeIcon={<AddIcon />}
              sx={{ marginRight: '16px' }}
            />
            <Grid item display='flex' flexDirection='column'>
              <Typography
                sx={{ color: theme.palette.text.secondary, fontSize: isMobile ? '20px' : '32px' }}
                variant='h4'
              >
                Chelsie Haley
              </Typography>
              <Typography sx={!isMobile ? { fontSize: '20px', marginTop: '8px' } : {}} variant='body2'>
                Dream big. Think different.Do great!
              </Typography>
            </Grid>
          </Grid>

          {/* social contact */}
          <Grid item xs={12} sm={12} lg={4} display='flex' flexDirection='row' justifyContent='space-between'>
            <Grid display='flex' flexDirection='row'>
              <IconButton sx={{ marginRight: '24px' }} children={<TwitterIcon />} />
              <IconButton sx={{ marginRight: '24px' }} children={<FacebookIcon />} />
              <IconButton sx={{ marginRight: '24px' }} children={<InstagramIcon />} />
            </Grid>

            <Button children='Follow' color='primary' sx={{ width: '120px' }} />
          </Grid>

          <Grid item xs={12}>
            <Divider sx={{ margin: '20px 0px', color: theme.palette.grey[100] }} />
          </Grid>

          <Grid container display='flex' justifyContent='space-between'>
            <Grid sx={{ marginBottom: '16px' }} item xs={12} md={8}>
              <Tabs tabItems={tabItems} />
            </Grid>

            <Grid container sx={{ marginBottom: '32px' }} display='flex' justifyContent='space-between' xs={12} md={4}>
              <Grid item xs={10}>
                <Select options={selectOption} />
              </Grid>

              <Grid display='flex' justifyContent='center' alignItems={'center'} item xs={2}>
                <IconButton
                  sx={{
                    marginLeft: '16px',
                    boxShadow: `0 0 0 2px ${theme.palette.text.primary} inset`,
                    borderRadius: '8px',
                    ':hover': {
                      backgroundColor: theme.palette.info.main,
                      color: theme.palette.primary.main,
                      borderColor: theme.palette.text.primary
                    }
                  }}
                  children={<FilterAltOutlinedIcon />}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Outlet />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default memo(Shop)
