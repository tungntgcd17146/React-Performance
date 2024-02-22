import * as React from 'react'
import { memo, useMemo } from 'react'

import { Checkbox } from '@/types'

//mui
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Typography from '@mui/material/Typography'
import { Checkbox as MuiCheckbox, useTheme } from '@mui/material'
import Box from '@mui/material/Box'

export interface Props {
  checkboxOptions: Checkbox[]
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  wrapperStyles?: React.CSSProperties
}

const Checkboxes = ({ checkboxOptions, onChange, label, wrapperStyles }: Props) => {
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
    <Box sx={wrapperStyles}>
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
    </Box>
  )
}

export default memo(Checkboxes)
