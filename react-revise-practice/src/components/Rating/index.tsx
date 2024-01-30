import { memo } from 'react'
import { themes } from '@/themes'

//mui
import StarOutlinedIcon from '@mui/icons-material/StarOutlined'
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined'
import Box from '@mui/material/Box/Box'
import { Typography, useTheme } from '@mui/material'

export interface Props {
  ratingPoint?: number
  counter?: number
}

const Rating = ({ ratingPoint = 0, counter = 0 }: Props) => {
  const theme = useTheme()
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {counter > 0 ? (
        <StarOutlinedIcon sx={{ color: themes.colors.yellow[700], marginRight: '8px' }} />
      ) : (
        <StarBorderPurple500OutlinedIcon />
      )}
      {!!counter && (
        <Typography variant='body1' sx={{ color: theme.palette.text.secondary }}>
          {ratingPoint}
        </Typography>
      )}
      <Typography variant='body1' sx={{ marginLeft: '4px' }}>
        {counter > 0 ? `(${counter})` : 'No ratings'}
      </Typography>
    </Box>
  )
}

export default memo(Rating)
