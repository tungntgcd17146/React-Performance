import { memo } from 'react'

import { themes } from '@/themes'
//mui
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material'
import CardActionArea from '@mui/material/CardActionArea'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'

//components
import Rating from '@/components/Rating'
import Branch1 from '@/assets/Brand1.jpg'

const ProductCard = () => {
  const theme = useTheme()
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
      <CardActionArea>
        <CardMedia component='img' height='200' image={Branch1} alt='brand img' sx={{ borderRadius: '12px' }} />
        <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Typography gutterBottom variant='subtitle1' sx={{ color: theme.palette.text.secondary }}>
              Bento Matte 3D Illustration
            </Typography>

            <Chip
              label='$99'
              variant='filled'
              sx={{
                backgroundColor: themes.colors.green[500],
                color: themes.colors.black[700],
                borderRadius: '6px',
                fontWeight: '700',
                lineHeight: '32px',
                fontSize: '15px'
              }}
            />
          </Box>
          <Rating ratingPoint={4.5} counter={10} />
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default memo(ProductCard)
