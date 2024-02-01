import * as React from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Checkbox as MuiCheckbox, useTheme } from '@mui/material'

export interface CheckboxOption {
  id: string
  label: string
  sx?: React.CSSProperties
  labelPlacement?: 'top' | 'start' | 'bottom' | 'end'
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export interface Props {
  checkboxOptions: CheckboxOption[]
}

const Checkboxes = ({ checkboxOptions }: Props) => {
  const theme = useTheme()

  return (
    <FormGroup>
      {checkboxOptions.map((item) => {
        const { id, label, sx, labelPlacement, onChange } = item
        return (
          <FormControlLabel
            key={id}
            sx={{ display: 'flex', justifyContent: 'space-between', color: theme.palette.text.secondary, ...sx }}
            control={
              <MuiCheckbox
                sx={{ color: theme.palette.text.primary, '&.Mui-checked': { color: theme.palette.info.main } }}
                onChange={onChange}
              />
            }
            label={label}
            labelPlacement={labelPlacement}
          />
        )
      })}
    </FormGroup>
  )
}

export default Checkboxes
