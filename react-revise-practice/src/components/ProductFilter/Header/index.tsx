//mui
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import Chip from '@/components/Chip'
import IconButton from '@/components/IconButton'
import useScreenWidth from '@/hooks/useScreenWidth'
import { themes } from '@/themes'
import { useTheme } from '@mui/material'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { memo, useMemo } from 'react'

interface Props {
  onClickHeaderButton: (e: React.MouseEvent<HTMLElement>) => void
  showingProduct: string
  totalProduct: string
}

const FilterModalHeader = ({ onClickHeaderButton, totalProduct, showingProduct }: Props) => {
  const theme = useTheme()
  const { isMobile } = useScreenWidth()

  const closeIconButtonStyles = useMemo(
    () => ({
      borderRadius: '50%',
      backgroundColor: theme.palette.grey[100]
    }),
    [theme.palette.grey]
  )

  const chipStyle = useMemo(
    () => ({
      borderRadius: '4px',
      backgroundColor: themes.colors.red[500],
      height: '32px',
      width: '14px'
    }),
    []
  )

  return (
    <Grid item sx={{ marginBottom: '24px' }} display='flex' alignItems='center' justifyContent='space-between'>
      <Grid display='flex' flexDirection='row' alignItems='center'>
        <Chip variant='filled' sx={chipStyle} />
        <Typography variant='h4' sx={{ marginLeft: '16px', fontSize: '18px', color: theme.palette.text.secondary }}>
          Showing {showingProduct} of {totalProduct} products
        </Typography>
      </Grid>

      <Grid>
        {isMobile && (
          <IconButton
            children={<CloseOutlinedIcon />}
            onClick={onClickHeaderButton}
            data-testid='ProductFilter_CloseIconButton'
            sx={closeIconButtonStyles}
          />
        )}
      </Grid>
    </Grid>
  )
}

export default memo(FilterModalHeader)
