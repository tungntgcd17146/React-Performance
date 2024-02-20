import { memo } from 'react'

import CoverPhoto from '/assets/CoverPhoto.jpg'
import CoverPhotoMobile from '/assets/CoverPhotoMobile.jpg'

import useScreenWidth from '@/hooks/useScreenWidth'

const BackgroundImage = () => {
  const { isMobile } = useScreenWidth()

  if (isMobile) {
    return (
      <img
        data-testid='BackgroundImage_Mobile'
        src={CoverPhotoMobile}
        alt='~/assets/CoverPhotoMobile.png'
        className='w-full h-[252px] object-cover'
      />
    )
  }

  return (
    <img
      data-testid='BackgroundImage'
      src={CoverPhoto}
      alt='~/assets/CoverPhoto.jpg'
      className='w-full h-[400px] object-cover'
    />
  )
}

export default memo(BackgroundImage)
