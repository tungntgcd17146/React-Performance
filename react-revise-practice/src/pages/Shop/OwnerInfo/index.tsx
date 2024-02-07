import { memo } from 'react'

import Avatar from '@/components/Avatar'
import IconButton from '@/components/IconButton'
import Button from '@/components/Button'
import Customer1 from '@/assets/customer1.png'

import { useTheme } from '@mui/material'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TwitterIcon from '@mui/icons-material/Twitter'
import AddIcon from '@mui/icons-material/Add'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import Divider from '@mui/material/Divider'

import { themes } from '@/themes'
import useScreenWidth from '@/hooks/useScreenWidth'

const OwnerInfo = () => {
  const theme = useTheme()
  const { isMobile } = useScreenWidth()

  const commonSocialIconStyle = { marginRight: '24px' }

  return (
    <>
      {/* information */}
      <Grid item xs={12} sm={12} lg={8} display='flex' flexDirection='row' sx={{ marginBottom: '12px' }}>
        <Avatar
          avtBackground={themes.colors.yellow[600]}
          size='large'
          src={Customer1}
          alt='Customer1'
          BadgeIcon={<AddIcon />}
          badgeSx={{ marginRight: '16px' }}
        />
        <Grid item display='flex' flexDirection='column'>
          <Typography sx={{ color: theme.palette.text.secondary, fontSize: isMobile ? '20px' : '32px' }} variant='h4'>
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
          <IconButton sx={commonSocialIconStyle} children={<TwitterIcon />} />
          <IconButton sx={commonSocialIconStyle} children={<FacebookIcon />} />
          <IconButton sx={commonSocialIconStyle} children={<InstagramIcon />} />
        </Grid>

        <Button children='Follow' color='primary' sx={{ width: '120px' }} />
      </Grid>

      <Grid item xs={12}>
        <Divider sx={{ margin: '20px 0px', color: theme.palette.grey[100] }} />
      </Grid>
    </>
  )
}

export default memo(OwnerInfo)
