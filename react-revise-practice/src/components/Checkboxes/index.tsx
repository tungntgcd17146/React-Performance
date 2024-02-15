import * as React from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

//mui
import Typography from '@mui/material/Typography'
import { Checkbox as MuiCheckbox, useTheme } from '@mui/material'
import { memo, useMemo } from 'react'

export interface CheckboxOption {
  id: string
  label: string
  sx?: React.CSSProperties
  labelPlacement?: 'top' | 'start' | 'bottom' | 'end'
  isChecked: boolean
}

export interface Props {
  checkboxOptions: CheckboxOption[]
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
}

const Checkboxes = ({ checkboxOptions, onChange, label }: Props) => {
  const theme = useTheme()

  const formControlLabelStyles = useMemo(
    () => ({ display: 'flex', justifyContent: 'space-between', color: theme.palette.text.secondary }),
    [theme.palette.text.secondary]
  )

  const muiCheckboxStyles = useMemo(
    () => ({ color: theme.palette.text.primary, '&.Mui-checked': { color: theme.palette.info.main } }),
    [theme.palette.info.main, theme.palette.text.primary]
  )

  return (
    <>
      {label && (
        <Typography variant='body1' sx={{ marginBottom: '8px' }}>
          {label}
        </Typography>
      )}
      <FormGroup>
        {checkboxOptions.map((item) => {
          const { id, label, labelPlacement, isChecked } = item
          return (
            <FormControlLabel
              key={id}
              sx={formControlLabelStyles}
              control={
                <MuiCheckbox checked={isChecked} id={id} value={label} sx={muiCheckboxStyles} onChange={onChange} />
              }
              label={label}
              labelPlacement={labelPlacement}
            />
          )
        })}
      </FormGroup>
    </>
  )
}

export default memo(Checkboxes)
