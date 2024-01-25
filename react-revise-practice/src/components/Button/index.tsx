import { memo } from 'react'

import { ButtonProps, Button as MuiButton, useTheme } from '@mui/material'

export interface Props extends ButtonProps {
  children?: React.ReactNode
  endIcon?: React.ReactNode
  startIcon?: React.ReactNode
  sx?: React.CSSProperties

  onClick?: () => void
}

const Button = ({
  children,
  color,
  endIcon,
  startIcon,
  size,
  type = 'button',
  sx,

  onClick,
  ...rest
}: Props) => {
  const theme = useTheme()

  const getColor = (color?: string) => {
    const { palette } = theme

    switch (color) {
      case 'inherit':
        return {
          backgroundColor: palette.info.main,
          color: palette.primary.main,
          '&:hover': {
            borderColor: palette.info.dark
          }
        }
      case 'primary':
        return {
          backgroundColor: palette.primary.main,
          color: palette.secondary.main,
          border: `2px solid #EFEFEF`,
          '&:hover': {
            backgroundColor: palette.primary.main,
            border: `2px solid ${palette.secondary.dark}`
          }
        }
      case 'secondary':
        return {
          backgroundColor: palette.secondary.main,
          color: palette.primary.main,
          boxShadow: `0 0 0 2px ${palette.secondary.light} inset`,
          '&:hover': {
            border: `2px solid ${palette.primary.main}`
          }
        }
      default:
        return ''
    }
  }

  const getSize = (size?: string) => {
    switch (size) {
      case 'small':
        return {
          borderRadius: '8px',
          padding: '8px 16px'
        }
      case 'medium':
        return {
          borderRadius: '12px',
          padding: '12px 20px'
        }
      default:
        return ''
    }
  }

  const commonStyle = {
    minWidth: '100px',
    fontFamily: 'Inter',
    fontWeight: 700,
    lineHeight: '20px',
    ':disabled': {
      opacity: 0.5,
      pointerEvents: 'none'
    }
  }

  return (
    <MuiButton
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
      type={type}
      sx={{
        ...commonStyle,
        ...getColor(color),
        ...getSize(size),
        ...sx
      }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </MuiButton>
  )
}

export default memo(Button)
