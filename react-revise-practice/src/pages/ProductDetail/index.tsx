import { memo, useState } from 'react'

//mui
import Popover from '@mui/material/Popover'
import { Divider, Typography, useTheme } from '@mui/material'
import Backdrop from '@mui/material/Backdrop'
import Grid from '@mui/material/Grid'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import Box from '@mui/material/Box'
import CheckIcon from '@mui/icons-material/Check'

//components
import IconButton from '@/components/IconButton'
import Customer1 from '@/assets/customer1.png'
import useScreenWidth from '@/hooks/useScreenWidth'
import Chip from '@/components/Chip'
import { themes } from '@/themes'
import Button from '@/components/Button'
import { useNavigate } from 'react-router-dom'
import Tabs from '@/components/Tabs'
import Avatar from '@/components/Avatar'
import Rating from '@/components/Rating'
import ImageView from '@/components/ImageView'

export interface Props {}

const ProductDetail = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const theme = useTheme()
  const { isMobile } = useScreenWidth()
  const navigate = useNavigate()

  const handleClose = () => {
    navigate('/')
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popper' : undefined

  return (
    <div>
      <Backdrop sx={{ color: '#fff', zIndex: theme.zIndex.drawer + 1 }} open={open} onClick={handleClose} />
      <Popover
        data-testid='ProductDetail_Popover'
        slotProps={{
          paper: {
            sx: {
              width: '100%',
              height: '100%',
              top: '0px !important',
              left: '0px !important',
              background: theme.palette.background.default
            }
          }
        }}
        id={id}
        open
        anchorEl={isMobile ? null : anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        {/* Header */}
        <Grid item sx={{ margin: '24px 42px' }} display='flex' alignItems='center' justifyContent='space-between'>
          <Button children='Edit product' color='inherit' />

          <IconButton
            children={<CloseOutlinedIcon />}
            onClick={handleClose}
            data-testid='ProductDetail_CloseIconButton'
            sx={{
              borderRadius: '50%',
              backgroundColor: theme.palette.grey[100]
            }}
          />
        </Grid>
        <Grid
          container
          sx={{
            padding: '24px',
            display: 'flex',
            alignItems: 'center'
          }}
          display='flex'
          flexDirection='column'
        >
          <Box
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: '8px',
              maxWidth: '1000px'
            }}
          >
            <Grid
              item
              sx={{
                padding: '16px'
              }}
              display='flex'
              flexDirection='column'
            >
              <Grid container sx={{ marginBottom: '32px' }} display='flex' justifyContent='space-between'>
                <Grid xs={12} md={6}>
                  <Tabs
                    sx={{ marginBottom: '16px' }}
                    tabItems={[{ text: 'Product' }, { text: 'Comments', isDisabled: true }]}
                  />
                </Grid>

                <Grid
                  xs={12}
                  md={6}
                  display='flex'
                  flexDirection='row'
                  justifyContent={!isMobile ? 'flex-end' : 'flex-start'}
                >
                  <Button
                    children='32'
                    color='inherit'
                    sx={{ marginRight: '16px' }}
                    startIcon={<FavoriteOutlinedIcon sx={{ color: themes.colors.red[500] }} />}
                  />

                  <Button
                    children={`$${85}`}
                    color='primary'
                    sx={{ borderTopRightRadius: '0px', borderBottomRightRadius: '0px' }}
                    endIcon={<Divider orientation='vertical' />}
                  />
                  <Button
                    children='Download'
                    color='primary'
                    sx={{ borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px' }}
                    endIcon={<FileDownloadIcon />}
                  />
                </Grid>
              </Grid>

              {/* Content */}
              <Grid>
                {/* Header */}
                <Typography variant='h5' sx={{ marginBottom: '12px', color: theme.palette.text.secondary }}>
                  Fleet - Travel shopping UI design kit
                </Typography>
                <Typography variant='body1' sx={{ marginBottom: '12px', color: theme.palette.text.primary }}>
                  Elegant product mockup for your next project
                </Typography>

                <Grid display='flex' flexDirection='row' alignItems='center' sx={{ marginBottom: '32px' }}>
                  <Avatar
                    src={Customer1}
                    sx={{ marginRight: '12px', marginLeft: '12px' }}
                    size='small'
                    alt={Customer1}
                    avtBackground={themes.colors.yellow[600]}
                  />
                  <Typography variant='body1' sx={{ color: theme.palette.text.primary, marginLeft: '12px' }}>
                    by Chelsie Haley
                  </Typography>
                  <Rating sx={{ marginLeft: '12px' }} ratingPoint={5} counter={5} />
                </Grid>

                <ImageView />

                <Grid container display='flex' flexDirection='row' justifyContent='space-between'>
                  <Grid xs={12} lg={6}>
                    <Grid display='flex' flexDirection='row' sx={{ marginTop: '32px', marginBottom: '12px' }}>
                      <Chip
                        sx={{
                          borderRadius: '6px',
                          backgroundColor: themes.colors.yellow[600],
                          height: '32px',
                          width: '16px'
                        }}
                        variant='filled'
                      />
                      <Typography variant='h6' sx={{ color: theme.palette.text.secondary, marginLeft: '12px' }}>
                        Overview
                      </Typography>
                    </Grid>
                    <Typography variant='body1' sx={{ color: theme.palette.text.secondary }}>
                      Meet Node - a crypto NFT marketplace iOS UI design kit for Figma, Sketch, and Adobe XD. The kit
                      includes 126 stylish mobile screens in light and dark mode, a bunch of crypto 3D illustrations, 1
                      SaaS landing page with full premade breakpoints, and hundreds of components to help you ship your
                      next crypto, NFT product faster.
                      <br />
                      <br />
                      Types of screens included: onboarding, connect wallet, home feed, profile, upload, menu, search,
                      product detail, notification...
                      <br />
                      <br />
                      If you have any questions or requests, please feel free to leave them all in the comments section.{' '}
                    </Typography>
                  </Grid>

                  <Grid xs={12} lg={5}>
                    <Grid display='flex' flexDirection='row' sx={{ marginTop: '32px', marginBottom: '12px' }}>
                      <Chip
                        sx={{
                          borderRadius: '6px',
                          backgroundColor: themes.colors.violet[500],
                          height: '32px',
                          width: '16px'
                        }}
                        variant='filled'
                      />
                      <Typography variant='h6' sx={{ color: theme.palette.text.secondary, marginLeft: '12px' }}>
                        Features
                      </Typography>
                    </Grid>

                    {[
                      { text: '128 prebuilt screens' },
                      { text: 'SaaS landing page ready' },
                      { text: 'Global styleguide' },
                      { text: 'Dark + light more ready' }
                    ].map((item) => (
                      <>
                        <Grid display='flex' flexDirection='row'>
                          <CheckIcon sx={{ color: themes.colors.green[500], marginRight: '12px' }} />
                          <Typography variant='body1' sx={{ color: theme.palette.text.secondary }}>
                            {item.text}
                          </Typography>
                        </Grid>
                        <Divider sx={{ marginTop: '12px', marginBottom: '12px', color: theme.palette.grey[100] }} />
                      </>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Popover>
    </div>
  )
}

export default memo(ProductDetail)
