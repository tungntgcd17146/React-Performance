import React, { memo, useState } from 'react'
import { Modal, Fade } from '@mui/material'

import LightProductDetail from '@/assets/ProductDetailImgLight.jpg'
import useScreenWidth from '@/hooks/useScreenWidth'

export interface Props {
  image?: string
}

const ImageDrawer = ({ image = LightProductDetail }: Props) => {
  const [open, setOpen] = useState(false)

  const { matchedBreakpoint } = useScreenWidth({ down: 'lg' })

  const handleClose = () => {
    setOpen(false)
  }

  const handleImage = () => {
    setOpen(true)
  }

  return (
    <div>
      <img
        data-testid='ImageDrawer_Img'
        src={image}
        alt={image}
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          e.stopPropagation()
          handleImage()
        }}
        style={{ cursor: 'pointer', width: '100%', maxHeight: '70%', borderRadius: '12px' }}
      />
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Fade in={open} timeout={500}>
          <img
            data-testid='ImageDrawer_Img_Modal'
            src={image}
            alt={image}
            style={{ maxHeight: '100%', width: matchedBreakpoint ? '100%' : '50%', borderRadius: '16px' }}
          />
        </Fade>
      </Modal>
    </div>
  )
}

export default memo(ImageDrawer)
