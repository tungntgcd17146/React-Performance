import Button from '@/components/Button'
import PageNotFound from '@/components/PageNotFound'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'
import React, { memo, useCallback } from 'react'

export interface Props {
  maxHeight?: string
  children?: React.ReactNode
  isLoading?: boolean
  isError?: boolean
  isEmptyItem?: boolean
  isHiddenActionButton?: boolean
  onClickLoadMore?: () => void
  onClickShowLess?: () => void
  isHiddenLoadMore?: boolean
}

const InfiniteScroll = ({
  maxHeight = '300px',
  children,
  isLoading,
  isError,
  isEmptyItem,
  onClickLoadMore,
  onClickShowLess,
  isHiddenActionButton = false,
  isHiddenLoadMore
}: Props) => {
  //TODO: action when click load more, call api to fetch products
  const handleClickLoadMore = useCallback(() => {
    onClickLoadMore?.()
  }, [onClickLoadMore])

  const handleClickShowLess = useCallback(() => {
    onClickShowLess?.()
  }, [onClickShowLess])

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    )
  }

  if (isError) {
    return <PageNotFound isErrorAppPage headerContent='Opp!' body='Error page' />
  }

  if (isEmptyItem) {
    return <PageNotFound isErrorAppPage headerContent='Opp!' body='No item found' />
  }

  return (
    <div
      style={{
        overflowY: 'auto',
        maxHeight: maxHeight,
        width: '100%',
        scrollbarColor: 'dark',
        scrollbarWidth: 'thin'
      }}
    >
      {children}

      {!isHiddenActionButton && (
        <Grid xs={12} sx={{ textAlign: 'center', marginTop: '24px' }} item>
          {isHiddenLoadMore ? (
            <Button children='Show less' color='inherit' size='small' onClick={handleClickShowLess} />
          ) : (
            <Button children='Load more' color='inherit' size='small' onClick={handleClickLoadMore} />
          )}
        </Grid>
      )}
    </div>
  )
}

export default memo(InfiniteScroll)
