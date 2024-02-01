import { memo } from 'react'

//mui
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { Select as MuiSelect, SelectChangeEvent } from '@mui/material/'
import { useTheme } from '@mui/material/styles'

import IconButton from '@/components/IconButton'

interface SelectOption {
  id: string
  name: string | number
}
export interface Props {
  options: SelectOption[]
  onChange?: (event: SelectChangeEvent) => void
  sx?: React.CSSProperties
  startIcon?: React.ReactNode
}

const Select = ({ options = [], startIcon, sx, onChange }: Props) => {
  const theme = useTheme()
  const handleChange = (event: SelectChangeEvent) => {
    onChange?.(event)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl size='small' fullWidth sx={{ m: 1, minHeight: 40, minWidth: 100, position: 'relative' }}>
        {!!startIcon && <IconButton children={startIcon} sx={{ position: 'absolute', left: '10px' }} />}
        <MuiSelect
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              borderRadius: '12px'
            },
            ...sx
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                borderRadius: '12px',
                backgroundColor: theme.palette.background.default
              }
            }
          }}
          defaultValue={options[0].id}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label', sx: { marginLeft: startIcon ? '50px' : 0 } }}
        >
          {options?.map((item) => {
            const { id, name } = item
            return (
              <MenuItem
                sx={{
                  '&.Mui-selected': {
                    color: theme.palette.info.main,
                    backgroundColor: 'unset'
                  }
                }}
                key={id}
                value={id}
              >
                {name}
              </MenuItem>
            )
          })}
        </MuiSelect>
      </FormControl>
    </Box>
  )
}

export default memo(Select)
