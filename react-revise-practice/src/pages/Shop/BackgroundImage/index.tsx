import { memo } from 'react'

import CoverPhoto from '/assets/CoverPhoto.webp'
import CoverPhotoMobile from '/assets/CoverPhotoMobile.webp'

import useScreenWidth from '@/hooks/useScreenWidth'

const BackgroundImage = () => {
  const { isMobile } = useScreenWidth()

  if (isMobile) {
    return (
      <img
        data-testid='BackgroundImage_Mobile'
        src={CoverPhotoMobile}
        alt='~/assets/CoverPhotoMobile.webp'
        className='w-full h-[252px] object-cover'
      />
    )
  }

  return (
    <img
      data-testid='BackgroundImage'
      src={CoverPhoto}
      alt='~/assets/CoverPhoto.webp'
      className='w-full h-[400px] object-cover'
    />
  )
}

export default memo(BackgroundImage)
