import { memo, useCallback } from 'react'

//mui
import ProductCard from '@/components/ProductCard'
import Grid from '@mui/material/Grid'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

//helper
import useScreenWidth from '@/hooks/useScreenWidth'
import Button from '@/components/Button'
import { useNavigate } from 'react-router-dom'
import { Product } from '@/types'
import PageNotFound from '@/components/PageNotFound'

export interface Props {
  products: Product[]
  onClickLoadMore?: () => void
  isLoading?: boolean
  isError?: boolean
}

const Products = ({ products, isLoading, isError, onClickLoadMore }: Props) => {
  const { matchedBreakpoint } = useScreenWidth({ down: 'sm' })
  const navigate = useNavigate()

  //TODO: action when click load more, call api to fetch products
  const handleClickLoadMore = useCallback(() => {
    onClickLoadMore?.()
  }, [onClickLoadMore])

  const handleClickViewCard = useCallback(
    (_e: React.SyntheticEvent, id: number) => {
      navigate(`/product/${id}`)
    },
    [navigate]
  )

  if (isLoading)
    return (
      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    )
  if (isError || !products) return <PageNotFound headerContent='Opp!' body='Error page' />

  return (
    <Grid container={!matchedBreakpoint}>
      {products.map((product) => {
        return (
          <Grid key={product.id} sm={6} lg={4} item>
            <ProductCard product={product} onViewCard={handleClickViewCard} />
          </Grid>
        )
      })}

      <Grid xs={12} sx={{ textAlign: 'center', marginTop: '24px' }} item>
        <Button children='Load more' color='inherit' size='small' onClick={handleClickLoadMore} />
      </Grid>
    </Grid>
  )
}

export default memo(Products)
