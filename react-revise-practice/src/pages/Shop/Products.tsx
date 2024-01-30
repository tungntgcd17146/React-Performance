import { memo } from 'react'

//mui
import ProductCard from '@/components/ProductCard'
import Grid from '@mui/material/Grid'

//helper
import useScreenWidth from '@/hooks/useScreenWidth'

export interface Props {}

const Products = ({}: Props) => {
  const { matchedBreakpoint } = useScreenWidth({ down: 'sm' })
  const demoValue = [1, 2, 3, 4, 5, 6]

  return (
    <Grid container={matchedBreakpoint ? false : true}>
      {demoValue.map(() => {
        return (
          <Grid sm={6} lg={4} item>
            <ProductCard />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default memo(Products)
