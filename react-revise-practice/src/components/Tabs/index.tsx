import { memo, useState } from 'react'

//mui
import { Tabs as MuiTabs, styled } from '@mui/material'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

import useScreenWidth from '@/hooks/useScreenWidth'
import { useNavigate } from 'react-router-dom'

// type
import { TabItems } from '@/types/tabItems'

export interface Props {
  onTabClick?: (event: React.MouseEvent<HTMLElement>) => void
  onTabsChange?: (event: React.SyntheticEvent, newValue: number) => void
  tabItems: TabItems[]
}

const StyledTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&.Mui-selected': {
    borderRadius: '8px',
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.text.secondary
  }
}))

const Tabs = ({ onTabClick, onTabsChange, tabItems }: Props) => {
  const [value, setValue] = useState(0)
  const { isMobile } = useScreenWidth()
  const navigate = useNavigate()

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
    onTabsChange?.(event, newValue)
  }

  const handleClickTabItem = (go: string, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    navigate(go)
    onTabClick?.(e)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
        <MuiTabs
          TabIndicatorProps={{ sx: { height: '0px' } }}
          variant={isMobile ? 'fullWidth' : 'standard'}
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          {tabItems.map((item, index) => {
            const { text, go, disabled } = item

            return <StyledTab onClick={(e) => handleClickTabItem(go, e)} label={text} disabled={disabled} key={index} />
          })}
        </MuiTabs>
      </Box>
    </Box>
  )
}

export default memo(Tabs)
