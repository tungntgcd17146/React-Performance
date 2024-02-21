import { memo } from 'react'

interface Props {
  logoImage?: string
}

const Logo = ({ logoImage }: Props) => {
  return <img src={logoImage} alt={`~/assets/${logoImage}.webp`} className='w-[48px] h-[48px]' />
}

export default memo(Logo)
