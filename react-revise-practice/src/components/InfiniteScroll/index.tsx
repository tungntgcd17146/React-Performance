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
  isHiddenLoadMore?: boolean
  onClickLoadMore?: () => void
}

const InfiniteScroll = ({
  maxHeight = '300px',
  children,
  isLoading,
  isError,
  isEmptyItem,
  onClickLoadMore,
  isHiddenLoadMore = false
}: Props) => {
  const handleClickLoadMore = useCallback(() => {
    onClickLoadMore?.()
  }, [onClickLoadMore])

  if (isLoading) {
    return (
      <Box
        data-testid='InfiniteScroll_Loading'
        sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}
      >
        <CircularProgress />
      </Box>
    )
  }

  if (isError) {
    return <PageNotFound isBrowserError headerContent='Opp!' body='Error page' />
  }

  if (isEmptyItem) {
    return <PageNotFound isBrowserError headerContent='Opp!' body='No item found' />
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

      {!isHiddenLoadMore && (
        <Grid xs={12} sx={{ textAlign: 'center', marginTop: '24px' }} item>
          <Button
            aria-label='load-more'
            data-testid='InfiniteScroll_LoadMoreButton'
            children='Load more'
            color='inherit'
            size='small'
            onClick={handleClickLoadMore}
          />
        </Grid>
      )}
    </div>
  )
}

export default memo(InfiniteScroll)
