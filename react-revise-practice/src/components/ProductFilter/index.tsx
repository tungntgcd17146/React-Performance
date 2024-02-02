import { memo, useState } from 'react'

//mui
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'
import Popover from '@mui/material/Popover'
import { Typography, useTheme } from '@mui/material'
import Backdrop from '@mui/material/Backdrop'
import Grid from '@mui/material/Grid'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'

//components
import IconButton from '@/components/IconButton'

import useScreenWidth from '@/hooks/useScreenWidth'
import Chip from '@/components/Chip'
import { themes } from '@/themes'
import SearchInput from '@/components/SearchInput'
import Select from '@/components/Select'
import Checkboxes from '@/components/Checkboxes'
import RangeSlider from '@/components/RangeSlider'
import Button from '@/components/Button'

export interface Props {}

const ProductFilter = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const theme = useTheme()
  const { isMobile } = useScreenWidth()

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popper' : undefined

  return (
    <div>
      <IconButton
        data-testid='ProductFilter_IconButton'
        onClick={handleClick}
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
      <Backdrop sx={{ color: '#fff', zIndex: theme.zIndex.drawer + 1 }} open={open} onClick={handleClose} />
      <Popover
        data-testid='ProductFilter_Popover'
        slotProps={{
          paper: {
            sx: isMobile
              ? {
                  width: '100%',
                  height: '100%',
                  top: '0px !important',
                  left: '0px !important'
                }
              : { borderRadius: '16px' }
          }
        }}
        id={id}
        open={open}
        anchorEl={isMobile ? null : anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <Grid container sx={{ padding: '24px' }} display='flex' flexDirection='column'>
          {/* Header */}
          <Grid item sx={{ marginBottom: '24px' }} display='flex' alignItems='center' justifyContent='space-between'>
            <Grid display='flex' flexDirection='row' alignItems='center'>
              <Chip
                variant='filled'
                sx={{
                  borderRadius: '4px',
                  backgroundColor: themes.colors.red[500],
                  height: '32px',
                  width: '14px'
                }}
              />
              <Typography
                variant='h4'
                sx={{ marginLeft: '16px', fontSize: '18px', color: theme.palette.text.secondary }}
              >
                Showing 9 of 32 products
              </Typography>
            </Grid>

            <Grid>
              {isMobile && (
                <IconButton
                  children={<CloseOutlinedIcon />}
                  onClick={handleClose}
                  data-testid='ProductFilter_CloseIconButton'
                  sx={{
                    borderRadius: '50%',
                    backgroundColor: theme.palette.grey[100]
                  }}
                />
              )}
            </Grid>
          </Grid>

          <Grid item sx={{ marginBottom: '24px' }}>
            <SearchInput placeholder='Search for products' />
          </Grid>

          <Grid item sx={{ marginBottom: '24px' }}>
            <Typography variant='body1' sx={{ marginBottom: '8px' }}>
              Sort by
            </Typography>
            <Select
              sx={{ height: '100%' }}
              options={[
                { id: '1', name: 'Feature' },
                { id: '2', name: 'List' },
                { id: '3', name: 'New' }
              ]}
            />
          </Grid>

          <Grid item sx={{ marginBottom: '24px' }}>
            <Typography variant='body1' sx={{ marginBottom: '8px' }}>
              Showing
            </Typography>
            <Checkboxes
              checkboxOptions={[
                {
                  id: '1',
                  label: 'All Products',
                  labelPlacement: 'start'
                },
                {
                  id: '2',
                  label: 'UI Kit',
                  labelPlacement: 'start'
                },
                {
                  id: '3',
                  label: 'IIIustration',
                  labelPlacement: 'start'
                },
                {
                  id: '4',
                  label: 'Wireframe Kit',
                  labelPlacement: 'start'
                },
                {
                  id: '5',
                  label: 'Icons',
                  labelPlacement: 'start'
                }
              ]}
            />
          </Grid>

          <Grid item sx={{ marginBottom: '24px' }}>
            <Typography variant='body1' sx={{ marginBottom: '8px' }}>
              Price
            </Typography>
            <RangeSlider />
          </Grid>

          <Grid item sx={{ marginBottom: '24px' }}>
            <Typography variant='body1' sx={{ marginBottom: '8px' }}>
              Rating
            </Typography>
            <Select
              startIcon={<FavoriteOutlinedIcon sx={{ color: themes.colors.red[500] }} />}
              sx={{ height: '100%' }}
              options={[
                { id: '1', name: '1 and up' },
                { id: '2', name: '2 and up' },
                { id: '3', name: '3 and up' },
                { id: '4', name: '4 and up' },
                { id: '5', name: '5' }
              ]}
            />
          </Grid>

          <Grid item sx={{ marginBottom: '24px' }} justifyContent='flex-end' display='flex'>
            <Button children='Reset' color='inherit' />
            <Button children='Apply' color='primary' sx={{ marginLeft: '16px' }} />
          </Grid>
        </Grid>
      </Popover>
    </div>
  )
}

export default memo(ProductFilter)
