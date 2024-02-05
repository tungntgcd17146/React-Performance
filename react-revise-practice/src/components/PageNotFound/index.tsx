import { memo, useCallback } from 'react'
import { themes } from '@/themes'
import { NavigateFunction, useNavigate } from 'react-router-dom'

//component
import Button from '@/components/Button'

//mui
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import useScreenWidth from '@/hooks/useScreenWidth'
import { ROUTES } from '@/constants/routes'

export interface Props {
  headerContent?: string
  body?: string
  footer?: string
  isError?: boolean
  sx?: React.CSSProperties
}
const NotFoundPage = ({
  headerContent = '404',
  body = 'Oops! Page not found.',
  footer = ' The page you are looking for might be under construction or does not exist.',
  isError = false,
  sx
}: Props) => {
  const { isTablet, isDesktop } = useScreenWidth()
  const navigate: NavigateFunction = useNavigate()

  const handleClick = useCallback(() => {
    navigate(ROUTES.HOME)
  }, [navigate])

  return (
    <Grid
      display='flex'
      flexDirection='column'
      alignItems='center'
      sx={{
        textAlign: 'center',
        marginTop: '300px',
        marginLeft: !isError && isTablet ? '80px' : !isError && isDesktop ? '330px' : '0px',
        ...sx
      }}
    >
      <Typography
        sx={{
          height: '100px',
          width: '200px',
          borderRadius: '12px',
          backgroundColor: themes.colors.red[500],
          fontSize: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        variant='h1'
        color='primary'
        gutterBottom
      >
        {headerContent}
      </Typography>
      <Typography variant='h2' color='textSecondary' paragraph>
        {body}
      </Typography>
      <Typography variant='body1' color='textSecondary' paragraph>
        {footer}
      </Typography>
      <Button data-testid='NotFoundPage_Button' onClick={handleClick} variant='outlined' color='inherit'>
        Go to Home
      </Button>
    </Grid>
  )
}

export default memo(NotFoundPage)
