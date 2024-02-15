import * as React from 'react'
import { useTheme } from '@mui/material'
import { themes } from '@/themes'

//mui
import Typography from '@mui/material/Typography'
import Slider, { SliderProps } from '@mui/material/Slider'
import { memo } from 'react'

export interface Props extends SliderProps {
  valueLabelFormat?: (value: number) => string
  min?: number
  max?: number
  defaultValue?: number[]
  onChangeValue?: (value: number[]) => void
  label?: string
}
export const valuetext = (value: number) => {
  return `$${value}`
}

const RangeSlider = ({
  label,
  valueLabelFormat = valuetext,
  min = 0,
  max = 100,
  defaultValue = [20, 40],
  onChangeValue,
  ...rest
}: Props) => {
  const [value, setValue] = React.useState<number[]>(defaultValue)

  const theme = useTheme()

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number[])

    onChangeValue?.(newValue as number[])
  }

  const sliderStyles = React.useMemo(
    () => ({
      '& .MuiSlider-thumb': {
        border: `2px solid ${themes.colors.blue[600]}`,
        color: themes.colors.white[600]
      },
      '& .MuiSlider-track': {
        color: themes.colors.blue[600]
      },
      color: theme.palette.grey[100],
      minWidth: 200
    }),
    [theme.palette.grey]
  )

  return (
    <>
      {label && (
        <Typography variant='body1' sx={{ marginBottom: '8px' }}>
          {label}
        </Typography>
      )}
      <Slider
        data-testid='RangeSlider'
        sx={sliderStyles}
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        valueLabelDisplay='auto'
        valueLabelFormat={valueLabelFormat}
        {...rest}
      />
    </>
  )
}

export default memo(RangeSlider)
