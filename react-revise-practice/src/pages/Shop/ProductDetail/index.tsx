import { useState } from 'react'
import { useQuery } from 'react-query'
import { themes } from '@/themes'
import { fetchProductById } from '@/api'
import useScreenWidth from '@/hooks/useScreenWidth'

//mui
import Box from '@mui/material/Box'
import Popover from '@mui/material/Popover'
import Hidden from '@mui/material/Hidden'
import Backdrop from '@mui/material/Backdrop'
import Grid from '@mui/material/Grid'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import CircularProgress from '@mui/material/CircularProgress'
import { useTheme } from '@mui/material'

//components
import IconButton from '@/components/IconButton'
import Button from '@/components/Button'
import { useNavigate, useParams } from 'react-router-dom'
import Avatar from '@/components/Avatar'
import User1 from '@/assets/User1.png'
import Figma from '@/assets/figma.png'

//constants
import { ROUTES } from '@/constants/routes'
import PageNotFound from '@/components/PageNotFound'
import DetailContent from '@/pages/Shop/ProductDetail/DetailContent'

const ProductDetail = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const { id } = useParams()

  const { data: product, isLoading, isError } = useQuery({ queryKey: 'product', queryFn: () => fetchProductById(id!) })

  const theme = useTheme()
  const { isMobile } = useScreenWidth()
  const navigate = useNavigate()

  const handleClose = () => {
    navigate(ROUTES.HOME)
    setAnchorEl(null)
  }
  if (isLoading)
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <CircularProgress data-testid='ProductDetail_Loading' />
      </Box>
    )

  if (isError || !product) return <PageNotFound headerContent='Opp!' body='Error page' />

  const open = Boolean(anchorEl)
  const popoverId = open ? 'simple-popper' : undefined

  const { productName, productCategory, productPrice, productRating, productRatingCount } = product

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
              maxHeight: '100vh',
              top: '0px !important',
              left: '0px !important',
              background: theme.palette.background.default
            }
          }
        }}
        id={popoverId}
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
          <Button data-testid='ProductDetail_EditButton' children='Edit product' color='inherit' />

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
            padding: '24px'
          }}
          display='flex'
          flexDirection='row'
          justifyContent='center'
          alignItems='flex-start'
        >
          <DetailContent {...{ productName, productCategory, productPrice, productRating, productRatingCount }} />

          <Hidden mdDown>
            <Grid sx={{ marginLeft: '24px' }} display='flex' flexDirection='column' item>
              <Avatar
                sx={{ marginBottom: '24px' }}
                avtBackground={themes.colors.yellow[500]}
                src={User1}
                alt={User1}
                size='medium'
              />
              <Avatar
                sx={{
                  marginBottom: '24px',
                  backgroundColor: theme.palette.grey[300],
                  '& .MuiAvatar-img': {
                    width: '20px',
                    height: 'unset'
                  }
                }}
                badgeSx={
                  {
                    '& .MuiBadge-badge': {
                      backgroundColor: theme.palette.text.secondary,
                      color: theme.palette.background.paper,
                      border: 'unset'
                    }
                  } as React.CSSProperties
                }
                badgeAnchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                BadgeIcon='3'
                avtBackground={theme.palette.grey[200]}
                src={Figma}
                alt={Figma}
                size='medium'
              />
              <IconButton
                sx={{
                  backgroundColor: theme.palette.grey[300],
                  borderRadius: '50%',
                  width: '64px',
                  height: '64px',
                  alignItems: 'center',
                  ':hover': {
                    backgroundColor: 'none'
                  }
                }}
                children={<FavoriteOutlinedIcon />}
              />
            </Grid>
          </Hidden>
        </Grid>
      </Popover>
    </div>
  )
}

export default ProductDetail
