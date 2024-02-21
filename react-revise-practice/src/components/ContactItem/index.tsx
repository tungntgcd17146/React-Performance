import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { themes } from '@/themes'

//mui
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Hidden from '@mui/material/Hidden'

//components
import User1 from '/assets/User1.png'
import Avatar from '@/components/Avatar'
import Button from '@/components/Button'

//utils
import { userImageData } from '@/constants/data'
import useScreenWidth from '@/hooks/useScreenWidth'

//types
import { UserContact } from '@/types'

export interface Props {
  user: UserContact
  onChangeFollowButtonStatus?: (e: React.MouseEvent<HTMLElement>) => void
  onClickMessageButton?: (e: React.MouseEvent<HTMLElement>) => void
}

const ContactItem = ({ user, onChangeFollowButtonStatus, onClickMessageButton }: Props) => {
  const [followButtonStatus, setFollowButtonStatus] = useState<string>('')
  const theme = useTheme()

  useEffect(() => {
    if (user.contactStatus === 'following') {
      setFollowButtonStatus('Unfollow')
    } else {
      setFollowButtonStatus('Follow')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { isMobile } = useScreenWidth()

  const handleClickFollow = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      setFollowButtonStatus((prev) => (prev === 'Follow' ? 'Following' : prev === 'Unfollow' ? 'Follow' : prev))
      onChangeFollowButtonStatus?.(e)
    },
    [onChangeFollowButtonStatus]
  )

  const handleClickMessageButton = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      onClickMessageButton?.(e)
    },
    [onClickMessageButton]
  )

  const { userName, productNumber, followerNumber } = user

  return (
    <Grid container display='flex' flexDirection='column'>
      <Grid display='flex' flexDirection='row' container>
        <Grid data-testid='ContactItem' item display='flex' flexDirection='row' lg={6}>
          {/* avatar */}
          <Avatar avtBackground={themes.colors.yellow[500]} src={User1} alt={User1} size='medium' />

          <Grid sx={{ marginLeft: '16px' }} display='flex' flexDirection='column'>
            <Typography
              variant='overline'
              sx={{ color: theme.palette.text.secondary, fontSize: isMobile ? '18px' : '20px' }}
            >
              {userName}
            </Typography>
            <Grid display='flex' flexDirection='row' alignItems='center'>
              {/* info following */}
              <Typography variant='body1' sx={{ color: theme.palette.text.primary, marginRight: '5px' }}>
                {productNumber}
              </Typography>
              <Typography variant='body1' sx={{ color: themes.colors.gray[600] }}>
                Products
              </Typography>

              <Divider
                orientation='vertical'
                sx={{
                  color: theme.palette.text.primary,
                  marginLeft: '16px',
                  marginRight: '16px',
                  height: '12px',
                  textAlign: 'center'
                }}
              />

              {/* info follower */}
              <Typography variant='body1' sx={{ color: theme.palette.text.primary, marginRight: '5px' }}>
                {followerNumber}
              </Typography>
              <Typography variant='body1' sx={{ color: themes.colors.gray[600] }}>
                Followers
              </Typography>
            </Grid>

            {/* action button */}
            <Grid sx={{ marginTop: '16px' }}>
              <Button
                data-testid='ContactItem_FollowButton'
                sx={useMemo(() => ({ marginRight: '8px' }), [])}
                children={followButtonStatus}
                size='small'
                color={followButtonStatus === 'Following' ? 'success' : 'inherit'}
                onClick={handleClickFollow}
              />
              <Button
                data-testid='ContactItem_MessageButton'
                children='Message'
                size='small'
                color='primary'
                onClick={handleClickMessageButton}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg={6} display='flex' justifyContent='flex-end'>
          {/* group img */}
          <Hidden lgDown>
            <ImageList sx={{ width: '480px', height: '128px' }} cols={3}>
              {userImageData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    style={{ width: '100%', height: '115px', borderRadius: '12px' }}
                    srcSet={`${item.img}`}
                    src={`${item.img}`}
                    alt={item.imgTitle}
                    loading='lazy'
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Hidden>
        </Grid>
      </Grid>

      <Divider sx={{ margin: '24px 0', color: theme.palette.grey[100] }} />
    </Grid>
  )
}

export default memo(ContactItem)
