import { memo } from 'react'
import SearchIcon from '@mui/icons-material/Search'

import { InputBaseProps, useTheme } from '@mui/material'
import InputBase from '@mui/material/InputBase'
import IconButton from '@/components/IconButton'

export interface Props extends InputBaseProps {
  endHelper?: React.ReactNode
  searchWidth?: string
  onClickEndHelper?: (event: React.MouseEvent<HTMLElement>) => void
}

const SearchInput = ({ endHelper, onClickEndHelper, searchWidth = '100%', ...rest }: Props) => {
  const theme = useTheme()

  return (
    <div
      style={{ backgroundColor: theme.palette.grey[100], color: theme.palette.text.secondary, width: searchWidth }}
      className='rounded-[12px] h-[48px] pl-[42px] pr-[68px] relative'
    >
      <IconButton
        data-testid='SearchInput_SearchIcon'
        children={<SearchIcon />}
        sx={{ position: 'absolute', left: '4px', top: '4px' }}
      />
      <InputBase
        data-testid='SearchInput_InputBase'
        sx={{ width: '100%', height: '100%', fontSize: '15px' }}
        {...rest}
      />
      {endHelper && (
        <div
          data-testid='SearchInput_EndHelper'
          onClick={onClickEndHelper}
          className='absolute right-2 top-2 w-[56px] h-[32px] rounded-[8px]'
          style={{
            fontSize: '16px',
            backgroundColor: theme.palette.grey[200],
            color: theme.palette.text.secondary,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer'
          }}
        >
          {endHelper}
        </div>
      )}
    </div>
  )
}

export default memo(SearchInput)
