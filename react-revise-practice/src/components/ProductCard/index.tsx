import { memo, useCallback, useState } from 'react'

//mui
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material'
import CardActionArea from '@mui/material/CardActionArea'
import Box from '@mui/material/Box'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'

//components
import Rating from '@/components/Rating'
import Branch1 from '@/assets/Brand1.jpg'
import IconButton from '@/components/IconButton'
import Chip from '@/components/Chip'

//types
import { Product } from '@/types'

export interface Props {
  onEditCard?: (e: React.MouseEvent<HTMLElement>) => void
  onDeleteCard?: (e: React.MouseEvent<HTMLElement>) => void
  onViewCard?: (e: React.MouseEvent<HTMLElement>, id: number) => void
  product: Product
}

const ProductCard = ({ onEditCard, onDeleteCard, onViewCard, product }: Props) => {
  const [isExpandedCard, setIsExpandedCard] = useState(false)
  const theme = useTheme()

  const handleHoverCard = useCallback(() => {
    setIsExpandedCard(true)
  }, [])

  const handleLeaveCard = useCallback(() => {
    setIsExpandedCard(false)
  }, [])

  const handleEditCard = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation()
      onEditCard?.(e)
    },
    [onEditCard]
  )

  const handleDeleteCard = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation()
      onDeleteCard?.(e)
    },
    [onDeleteCard]
  )

  const handleViewCard = useCallback(
    (e: React.MouseEvent<HTMLElement>, id: number) => {
      e.stopPropagation()
      onViewCard?.(e, id)
    },
    [onViewCard]
  )

  const imgIconCommonStyle = {
    backgroundColor: theme.palette.primary.main,
    marginRight: '16px',
    ':hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.info.main
    }
  }

  const { productName, productCategory, productPrice, productRating, productRatingCount } = product

  return (
    <Card
      sx={{
        maxWidth: 560,
        maxHeight: 276,
        backgroundColor: theme.palette.background.paper,
        boxShadow: 'none',
        backgroundImage: 'none',
        margin: '32px 12px 0px 12px'
      }}
    >
      <CardActionArea
        data-testid='ProductCard_CardActionArea'
        onMouseEnter={handleHoverCard}
        onMouseLeave={handleLeaveCard}
      >
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component='img'
            image={Branch1}
            alt='brand img'
            sx={{
              height: '200px',
              width: '100%',
              borderRadius: '12px',
              opacity: isExpandedCard ? 0.2 : 'none'
            }}
          />
          <Box
            hidden={!isExpandedCard}
            sx={{
              position: 'absolute',
              width: '100%',
              top: '40%',
              textAlign: 'center'
            }}
          >
            <IconButton
              data-testid='ProductCard_IconButton_edit'
              children={<EditOutlinedIcon />}
              sx={imgIconCommonStyle}
              onClick={handleEditCard}
            />
            <IconButton
              data-testid='ProductCard_IconButton_delete'
              children={<DeleteOutlineOutlinedIcon />}
              sx={imgIconCommonStyle}
              onClick={handleDeleteCard}
            />
            <IconButton
              data-testid='ProductCard_IconButton_view'
              children={<ArrowForwardOutlinedIcon />}
              sx={imgIconCommonStyle}
              onClick={(e) => handleViewCard(e, product.id)}
            />
          </Box>
        </Box>
        <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Typography gutterBottom variant='subtitle1' sx={{ color: theme.palette.text.secondary }}>
              {productName} {productCategory}
            </Typography>

            <Chip price={productPrice} variant='filled' />
          </Box>
          <Rating ratingPoint={productRating} counter={productRatingCount} />
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default memo(ProductCard)
