import ProductFilter from '@/components/ProductFilter'
import Select from '@/components/Select'
import Tabs from '@/components/Tabs'
import Contact from '@/pages/Shop/ShopContent/Contact'
import Products from '@/pages/Shop/ShopContent/Products'
import Grid from '@mui/material/Grid'
import { memo, useState } from 'react'

import { fetchProducts } from '@/api'
import { SelectChangeEvent } from '@mui/material/Select'
import useQueryItems from '@/hooks/useQueryItems'
import { selectOption, tabItems } from '@/constants/data'
import { ShopTabs } from '@/types'

const ShopBody = () => {
  const [tabSelected, setTabSelected] = useState(0)
  //TODO: state for filter products
  // const [filterSelectedInput, setFilterSelectedInput] = useState('Most recent')
  // const [filterProducts, setFilterProducts] = useState({})

  const tabSelectedText = tabItems[tabSelected].text

  //update item selected
  const tabsSelected = tabItems.map((item) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return { ...item, isSelected: item.text === tabSelectedText }
  })

  const handleChangeTab = (_event: React.SyntheticEvent, newValue: number) => {
    setTabSelected(newValue)
  }

  const handleSelectFilter = (event: SelectChangeEvent) => {
    // setFilterSelectedInput(event.target.value)
    // refetch()
  }

  const productQueryParam = {
    // most: filterSelectedInput
  }

  const showFilter = tabSelectedText !== ShopTabs.FOLLOWING && tabSelectedText !== ShopTabs.FOLLOWERS

  const {
    data: products,
    isLoading,
    isError
  } = useQueryItems({
    key: 'products',
    queryFunction: fetchProducts(productQueryParam)
  })

  return (
    <>
      <Grid container display='flex' justifyContent='space-between'>
        <Grid sx={{ marginBottom: '16px' }} item xs={12} md={8}>
          <Tabs tabItems={tabsSelected} onTabsChange={handleChangeTab} />
        </Grid>

        {showFilter && (
          <Grid item sx={{ marginBottom: '32px' }} display='flex' justifyContent='space-between' xs={12} md={4}>
            <Grid item xs={10}>
              <Select options={selectOption} onChange={handleSelectFilter} />
            </Grid>

            <Grid display='flex' justifyContent='center' alignItems={'center'} item xs={2}>
              <ProductFilter />
            </Grid>
          </Grid>
        )}
      </Grid>

      <Grid item xs={12}>
        {tabSelectedText === ShopTabs.PRODUCTS && (
          <Products products={products!} isLoading={isLoading} isError={isError} />
        )}
        {!showFilter && <Contact contactQuery={tabSelectedText.toLowerCase()} />}
      </Grid>
    </>
  )
}

export default memo(ShopBody)
