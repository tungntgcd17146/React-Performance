import { memo, useCallback, useEffect, useMemo, useState } from 'react'

//mui
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'
import Popover from '@mui/material/Popover'
import { SelectChangeEvent, useTheme } from '@mui/material'
import Backdrop from '@mui/material/Backdrop'
import Grid from '@mui/material/Grid'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import Checkboxes, { CheckboxOption } from '@/components/Checkboxes'

//components
import IconButton from '@/components/IconButton'
import SearchInput from '@/components/SearchInput'
import FilterModalHeader from './Header'
import Select from '@/components/Select'
import RangeSlider from '@/components/RangeSlider'
import Button from '@/components/Button'

//utils
import useScreenWidth from '@/hooks/useScreenWidth'
import { themes } from '@/themes'

export interface FilterValue {
  searchProductName: string
  sortBy: string
  categories: string[]
  priceRange: number[]
  rating: string
}

const checkboxesOptions: CheckboxOption[] = [
  {
    id: '1',
    label: 'UI Kit',
    labelPlacement: 'start',
    isChecked: false
  },
  {
    id: '2',
    label: 'IIIustration',
    labelPlacement: 'start',
    isChecked: false
  },
  {
    id: '3',
    label: 'Wireframe Kit',
    labelPlacement: 'start',
    isChecked: false
  },
  {
    id: '4',
    label: 'Icons',
    labelPlacement: 'start',
    isChecked: false
  }
]

const ratingSelect = [
  { id: '1', name: '1 and up', value: '1' },
  { id: '2', name: '2 and up', value: '2' },
  { id: '3', name: '3 and up', value: '3' },
  { id: '4', name: '4 and up', value: '4' },
  { id: '5', name: '5', value: '5' }
]

const sortBySelect = [
  { id: '1', name: 'Feature', value: 'Feature' },
  { id: '2', name: 'List', value: 'List' },
  { id: '3', name: 'New', value: 'New' }
]
export interface Props {
  onSubmit?: (filterValue: FilterValue) => void
  onReset?: () => void
  totalProducts?: number
  showingProducts?: number
}

const ProductFilter = ({ onReset, onSubmit, totalProducts = 0, showingProducts = 0 }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const [categoryChecked, setCategoryChecked] = useState<CheckboxOption[]>(checkboxesOptions)

  const [searchInput, setSearchInput] = useState('')
  const [categoryValue, setCategoryValue] = useState<string[]>([])
  const [selectedSortByValue, setSelectedSortByValue] = useState(sortBySelect[0].value)
  const [selectedRatingValue, setSelectedRatingValue] = useState(ratingSelect[0].value)
  const [rangeSlideValue, setRangeSlideValue] = useState([0, 0])

  const [isDisableActionButton, setIsDisableActionButton] = useState(true)

  //disable apply and reset button when all value is default
  const theme = useTheme()
  const { isMobile } = useScreenWidth()

  useEffect(() => {
    setIsDisableActionButton(
      searchInput === '' &&
        categoryValue.length === 0 &&
        selectedSortByValue === sortBySelect[0].value &&
        selectedRatingValue === ratingSelect[0].value &&
        rangeSlideValue[0] === 0 &&
        rangeSlideValue[1] === 0
    )
  }, [searchInput, categoryValue, selectedSortByValue, selectedRatingValue, rangeSlideValue])

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(anchorEl ? null : event.currentTarget)
    },
    [anchorEl]
  )

  const handleClose = useCallback(() => {
    setAnchorEl(null)
  }, [])

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popper' : undefined

  const handleReset = useCallback(() => {
    setSearchInput('')
    setSelectedSortByValue(sortBySelect[0].value)
    setSelectedRatingValue(ratingSelect[0].value)
    setRangeSlideValue([0, 0])
    setCategoryValue([])

    setCategoryChecked(checkboxesOptions)

    onReset?.()
  }, [onReset])

  const handleApply = useCallback(() => {
    const filterApplyValue = {
      searchInput: searchInput,
      categories: categoryValue,
      sortBy: selectedSortByValue,
      priceRange: rangeSlideValue,
      rating: selectedRatingValue
    }

    onSubmit?.(filterApplyValue as unknown as FilterValue)
    handleClose()
  }, [categoryValue, handleClose, onSubmit, rangeSlideValue, searchInput, selectedRatingValue, selectedSortByValue])

  const handleSelectRatingChange = useCallback((value: SelectChangeEvent) => {
    setSelectedRatingValue(value.target.value)
  }, [])

  const handleCheckboxChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value
      const isChecked = event.target.checked

      if (isChecked) {
        setCategoryValue([...categoryValue, value])
      } else {
        const newValue = categoryValue.filter((category) => category !== value)
        setCategoryValue(newValue)
      }

      setCategoryChecked((prevOptions) =>
        prevOptions.map((option) => (option.label === value ? { ...option, isChecked: !option.isChecked } : option))
      )
    },
    [categoryValue]
  )

  const handleSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value)
  }, [])

  const handleSelectSortByChange = useCallback((event: SelectChangeEvent) => {
    setSelectedSortByValue(event.target.value)
  }, [])

  const handleRangeSliderChange = useCallback((value: number[]) => {
    setRangeSlideValue(value)
  }, [])

  const applyButtonStyles = useMemo(() => ({ marginLeft: '16px' }), [])

  const selectStyles = useMemo(() => ({ height: '100%' }), [])

  const iconHelperSelectStyles = useMemo(() => ({ color: themes.colors.red[500] }), [])

  const startIcon = useMemo(() => <FavoriteOutlinedIcon sx={iconHelperSelectStyles} />, [iconHelperSelectStyles])

  return (
    <div>
      <IconButton
        data-testid='ProductFilter_IconButton'
        onClick={handleClick}
        sx={useMemo(
          () => ({
            marginLeft: '16px',
            boxShadow: `0 0 0 2px ${theme.palette.text.primary} inset`,
            borderRadius: '8px',
            ':hover': {
              backgroundColor: theme.palette.info.main,
              color: theme.palette.primary.main,
              borderColor: theme.palette.text.primary
            }
          }),
          [theme.palette.text.primary, theme.palette.info.main, theme.palette.primary.main]
        )}
        children={useMemo(
          () => (
            <FilterAltOutlinedIcon />
          ),
          []
        )}
      />
      <Backdrop
        sx={{ color: themes.colors.white[500], zIndex: theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      />
      <Popover
        data-testid='ProductFilter_Popover'
        slotProps={{
          paper: {
            sx: isMobile
              ? {
                  width: '100%',
                  height: '100%',
                  top: '0px !important',
                  left: '0px !important'
                }
              : { borderRadius: '16px' }
          }
        }}
        id={id}
        open={open}
        anchorEl={isMobile ? null : anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <Grid container sx={{ padding: '24px' }} display='flex' flexDirection='column'>
          {/* Header */}
          <FilterModalHeader
            totalProduct={totalProducts}
            showingProduct={showingProducts}
            onClickHeaderButton={handleClose}
          />

          <Grid item sx={{ marginBottom: '24px' }}>
            <SearchInput value={searchInput} placeholder='Search for products' onChange={handleSearch} />
          </Grid>

          <Grid item sx={{ marginBottom: '24px' }}>
            <Select
              label='Sort by'
              selectedValue={selectedSortByValue}
              onChange={handleSelectSortByChange}
              sx={selectStyles}
              options={sortBySelect}
            />
          </Grid>

          <Grid item sx={{ marginBottom: '24px' }}>
            <Checkboxes label='Showing' onChange={handleCheckboxChange} checkboxOptions={categoryChecked} />
          </Grid>

          <Grid item sx={{ marginBottom: '24px' }}>
            <RangeSlider label='Price' defaultValue={rangeSlideValue} onChangeValue={handleRangeSliderChange} />
          </Grid>

          <Grid item sx={{ marginBottom: '24px' }}>
            <Select
              label='Rating'
              selectedValue={selectedRatingValue}
              onChange={handleSelectRatingChange}
              startIcon={startIcon}
              sx={selectStyles}
              options={ratingSelect}
            />
          </Grid>

          <Grid item sx={{ marginBottom: '24px' }} justifyContent='flex-end' display='flex'>
            <Button
              children={isDisableActionButton ? 'Close' : 'Reset'}
              color='inherit'
              onClick={isDisableActionButton ? handleClose : handleReset}
            />
            <Button
              children='Apply'
              color='primary'
              sx={applyButtonStyles}
              onClick={handleApply}
              disabled={isDisableActionButton}
            />
          </Grid>
        </Grid>
      </Popover>
    </div>
  )
}

export default memo(ProductFilter)
