import { themes } from '@/themes'

//component
import Button from '@/components/Button'

//mui
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'

import useScreenWidth from '@/hooks/useScreenWidth'

export interface Props {
  headerContent?: string
  body?: string
  footer?: string
  isError?: boolean
}
const NotFoundPage = ({
  headerContent = '404',
  body = 'Oops! Page not found.',
  footer = ' The page you are looking for might be under construction or does not exist.',
  isError = false
}: Props) => {
  const { isTablet, isDesktop } = useScreenWidth()

  return (
    <Grid
      display='flex'
      flexDirection='column'
      alignItems='center'
      sx={{
        textAlign: 'center',
        marginTop: '300px',
        marginLeft: !isError && isTablet ? '80px' : !isError && isDesktop ? '330px' : '0px'
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
      <Button component={Link} href='/shop' variant='outlined' color='inherit'>
        Go to Home
      </Button>
    </Grid>
  )
}

export default NotFoundPage
