import { memo } from 'react'
import { ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material'
import { themes } from '@/themes'
import useScreenWidth from '@/hooks/useScreenWidth'

interface Props {
  icon: React.ReactNode
  text: string
  index: number
  onClick?: () => void
  isSelected: boolean
}

const NavItem = ({ icon, text, index, onClick, isSelected }: Props) => {
  const theme = useTheme()
  const { isTablet } = useScreenWidth()

  return (
    <ListItem key={index} disablePadding>
      <ListItemButton
        onClick={onClick}
        selected={isSelected}
        sx={{
          fontSize: '15px',
          borderRadius: '12px',
          height: '48px',
          padding: '0 12px',
          marginBottom: '8px',
          '&.Mui-selected': {
            boxShadow: `inset 0px -2px 1px ${themes.colors.black[400]}, inset 0px 1px 1px r ${themes.colors.white[500]}`,
            backgroundColor: theme.palette.grey[100],
            color: theme.palette.text.secondary
          },
          '&.Mui-selected:hover': {
            backgroundColor: theme.palette.grey[100]
          }
        }}
      >
        <ListItemIcon sx={{ width: '24px', height: '24px' }}>{icon}</ListItemIcon>
        {!isTablet && <ListItemText sx={{ fontSize: '15px', marginLeft: '12px' }} primary={text} />}
      </ListItemButton>
    </ListItem>
  )
}

export default memo(NavItem)
