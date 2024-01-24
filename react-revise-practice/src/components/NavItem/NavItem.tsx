import { memo } from 'react'
import { ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material'
import { themes } from '@/themes'
import useScreenWidth from '@/hooks/useScreenWidth'
import { Link } from 'react-router-dom'

export interface Props {
  icon: React.ReactNode
  text: string
  index: number
  onClick?: () => void
  isSelected: boolean
  go: string
}

const NavItem = ({ icon, text, index, onClick, isSelected, go }: Props) => {
  const theme = useTheme()
  const { isTablet } = useScreenWidth()

  return (
    <Link data-testid='NavItem_Link' to={go} key={index + text} onClick={onClick} className='no-underline text-inherit'>
      <ListItem key={index} disablePadding>
        <ListItemButton
          data-testid='NavItem_ListItemButton'
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
          <ListItemIcon data-testid='NavItem_ListItemIcon' sx={{ width: '24px', height: '24px' }}>
            {icon}
          </ListItemIcon>
          {!isTablet && (
            <ListItemText
              data-testid='NavItem_ListItemText'
              sx={{ fontSize: '15px', marginLeft: '12px' }}
              primary={text}
            />
          )}
        </ListItemButton>
      </ListItem>
    </Link>
  )
}

export default memo(NavItem)
