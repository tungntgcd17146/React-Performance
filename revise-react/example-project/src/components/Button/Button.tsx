// import classNames from 'classnames'
import { memo } from 'react'

import { Button as MuiButton, ButtonProps, useTheme } from '@mui/material'

interface Props extends ButtonProps {
  children?: React.ReactNode
  className?: string
  endIcon?: React.ReactNode
  startIcon?: React.ReactNode
  sx?: React.CSSProperties

  onClick: () => void
}

const Button = ({
  children,
  // className,
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

  // const commonClass =
  //   'inline-flex justify-center items-center gap-2 font-inter font-bold leading-6 disabled:opacity-50 disabled:pointer-events-none'

  // const dynamicClass = classNames(
  //   className,
  //   commonClass,
  //   {
  //     'bg-blue-600 text-white-600 hover:bg-blue-700': color === 'inherit',
  //     'bg-white-600 text-black-700 border-2 border-solid border-gray-500 hover:border-black-800': color === 'primary',
  //     'bg-black-700 text-white-600 border-2 border-solid border-black-600 hover:border-white-600': color === 'secondary'
  //   },
  //   {
  //     // 'rounded-xs py-[8px] px-[16px]': size === 'small',

  //     'rounded-sm py-[12px] px-[20px]': size === 'medium'
  //   }
  // )

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

  return (
    <MuiButton
      variant='contained'
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
      type={type}
      // className={classNames({})}
      sx={{
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        minWidth: '100px',
        fontFamily: 'Inter',
        fontWeight: 700,
        lineHeight: '20px',
        ':disabled': {
          opacity: 0.5,
          pointerEvents: 'none'
        },
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
