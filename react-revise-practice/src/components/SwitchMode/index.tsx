import { memo, useEffect, useMemo, useState } from 'react'

//mui
import { styled, useTheme } from '@mui/material'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import ToggleButton from '@mui/material/ToggleButton'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import IconButton from '@/components/IconButton'

//utils
import { useMode } from '@/contexts/modeContext/useModeContext'
import useScreenWidth from '@/hooks/useScreenWidth'

export interface Props {
  isLargerDrawerOnTablet: boolean
  customWidth?: string
}

const CustomToggleButton = styled(ToggleButton)(({ theme }) => ({
  '&:hover': {
    backgroundColor: 'unset',
    color: theme.palette.text.secondary
  },
  '&.Mui-selected': {
    backgroundColor: theme.palette.grey[300],
    color: theme.palette.text.secondary,
    boxShadow:
      '0px 4px 8px -4px rgba(0, 0, 0, 0.25), inset 0px -1px 1px rgba(0, 0, 0, 0.04), inset 0px 2px 0px rgba(255, 255, 255, 0.25)'
  }
}))

const SwitchMode = ({ isLargerDrawerOnTablet, customWidth = '100%' }: Props) => {
  const { toggleMode, isDarkMode } = useMode()
  //TODO: should add constant for state type
  const [mode, setMode] = useState<'dark' | 'light'>()
  const { isTablet } = useScreenWidth()
  const theme = useTheme()

  //set mode state when component mounting
  useEffect(() => {
    if (isDarkMode) {
      setMode('dark')
    } else {
      setMode('light')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleToggleMode = () => {
    if (mode === 'light') {
      toggleMode(true), setMode('dark')
    } else {
      toggleMode(false), setMode('light')
    }
  }

  const commonToggleButtonStyle = useMemo(
    () => ({
      width: '100%',
      borderRadius: '16px',
      padding: '4px 2px',
      border: 'unset'
    }),
    []
  )

  const commonButtonIconStyle = useMemo(
    () => ({
      marginRight: '8px'
    }),
    []
  )

  if (isTablet && !isLargerDrawerOnTablet) {
    return (
      <IconButton
        data-testid='SwitchMode_IconButton'
        size='medium'
        children={mode === 'light' ? <LightModeIcon /> : <DarkModeOutlinedIcon />}
        onClick={handleToggleMode}
        sx={{
          boxShadow:
            '0px 4px 8px -4px rgba(0, 0, 0, 0.25), inset 0px -1px 1px rgba(0, 0, 0, 0.49), inset 0px 2px 1px rgba(255, 255, 255, 0.06);',
          borderRadius: '50%',
          border: `5px solid ${theme.palette.background.default}`,
          ':hover': {
            borderColor: 'unset'
          }
        }}
      />
    )
  }

  return (
    <ToggleButtonGroup
      value={mode}
      exclusive
      aria-label='text alignment'
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: customWidth,
        height: '36px',
        borderRadius: '16px',
        padding: '4px 2px',
        backgroundColor: theme.palette.background.default,
        '& .MuiToggleButtonGroup-lastButton': {
          marginLeft: 'unset',
          borderLeft: 'unset',
          borderTopLeftRadius: '16px',
          borderBottomLeftRadius: '16px'
        },
        '& .MuiToggleButtonGroup-firstButton': {
          borderTopRightRadius: '16px',
          borderBottomRightRadius: '16px'
        }
      }}
    >
      <CustomToggleButton
        data-testid='SwitchMode_CustomToggleButton_lightMode'
        selected={mode === 'light'}
        onClick={handleToggleMode}
        sx={commonToggleButtonStyle}
        value='light'
        aria-label='light mode'
      >
        <LightModeIcon sx={commonButtonIconStyle} />
        Light
      </CustomToggleButton>
      <CustomToggleButton
        data-testid='SwitchMode_CustomToggleButton_darkMode'
        selected={mode === 'dark'}
        onClick={handleToggleMode}
        sx={{
          ...commonToggleButtonStyle
        }}
        value='dark'
        aria-label='dark mode'
      >
        <DarkModeOutlinedIcon sx={commonButtonIconStyle} />
        Dark
      </CustomToggleButton>
    </ToggleButtonGroup>
  )
}

export default memo(SwitchMode)
