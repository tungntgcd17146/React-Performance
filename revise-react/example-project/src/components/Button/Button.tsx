import classNames from 'classnames'
import { memo } from 'react'

interface Props {
  ariaLabel?: string
  children?: React.ReactNode
  className?: string
  color?: 'light' | 'primary' | 'dark'
  disabled?: boolean
  endIcon?: React.ReactNode
  startIcon?: React.ReactNode
  size?: 'small' | 'normal'

  onClick: () => void
}

const Button = ({
  ariaLabel,
  children,
  className,
  color,
  disabled,
  endIcon,
  startIcon,
  size = 'normal',

  onClick
}: Props) => {
  const commonClass =
    'inline-flex justify-center items-center gap-2 font-inter font-bold leading-6 disabled:opacity-50 disabled:pointer-events-none'

  const dynamicClass = classNames(
    className,
    commonClass,
    {
      'bg-blue-600 text-white-600 hover:bg-blue-700': color === 'primary',
      'bg-white-600 text-black-700 border-2 border-solid border-gray-500 hover:border-black-800': color === 'light',
      'bg-black-700 text-white-600 border-2 border-solid border-black-600 hover:border-white-600': color === 'dark'
    },
    {
      'rounded-xs py-[8px] px-[16px]': size === 'small',
      'rounded-sm py-[12px] px-[20px]': size === 'normal'
    }
  )

  return (
    <button className={dynamicClass} disabled={disabled} role='button' aria-label={ariaLabel} onClick={onClick}>
      {startIcon}
      {children}
      {endIcon}
    </button>
  )
}

export default memo(Button)
