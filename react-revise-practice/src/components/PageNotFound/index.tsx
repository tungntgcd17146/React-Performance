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
  isErrorAppPage?: boolean
  sx?: React.CSSProperties
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  actionButtonName?: string
}
const NotFoundPage = ({
  headerContent,
  body,
  footer,
  isErrorAppPage = false,
  sx,
  onClick,
  actionButtonName
}: Props) => {
  const { isTablet, isDesktop } = useScreenWidth()
  const navigate: NavigateFunction = useNavigate()

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      navigate(ROUTES.HOME)
      onClick?.(e)
    },
    [navigate, onClick]
  )

  return (
    <Grid
      display='flex'
      flexDirection='column'
      alignItems='center'
      sx={{
        textAlign: 'center',
        marginTop: '100px',
        marginBottom: '100px',
        marginLeft: !isErrorAppPage && isTablet ? '80px' : !isErrorAppPage && isDesktop ? '330px' : '0px',
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
      {body && (
        <Typography variant='h2' color='textSecondary' paragraph>
          {body}
        </Typography>
      )}
      {footer && (
        <Typography variant='body1' color='textSecondary' paragraph>
          {footer}
        </Typography>
      )}
      {actionButtonName && (
        <Button data-testid='NotFoundPage_Button' onClick={handleClick} variant='outlined' color='inherit'>
          {actionButtonName}
        </Button>
      )}
    </Grid>
  )
}

export default memo(NotFoundPage)
