import React, { memo, useState } from 'react'
import { Modal, Fade } from '@mui/material'

import BgProduct from '@/assets/Bg.jpg'

const ImageView = () => {
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState('false')

  const handleClose = () => {
    setOpen(false)
  }

  const handleImage = (value: string) => {
    setImage(value)
    setOpen(true)
    console.log(image)
  }

  return (
    <div>
      <img
        src={BgProduct}
        alt={'test'}
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          e.stopPropagation()
          handleImage(BgProduct)
        }}
        style={{ cursor: 'pointer', width: '100%', maxHeight: '730px', borderRadius: '12px' }}
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
          <img src={image} alt='asd' style={{ maxHeight: '90%', width: '100%' }} />
        </Fade>
      </Modal>
    </div>
  )
}

export default memo(ImageView)
