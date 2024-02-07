import { memo, useCallback } from 'react'

//mui
import Grid from '@mui/material/Grid'

//components
// import ProductCard from '@/components/ProductCard'
import ContactItem from '@/components/ContactItem'
import Button from '@/components/Button'

//helper
import useScreenWidth from '@/hooks/useScreenWidth'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import PageNotFound from '@/components/PageNotFound'
import { fetchContacts } from '@/api'
import useQueryItems from '@/hooks/useQueryItems'

export type ContactQuery = 'following' | 'followers'

export interface Props {
  contactQuery: string
}

const Contact = ({ contactQuery }: Props) => {
  const { matchedBreakpoint } = useScreenWidth({ down: 'sm' })

  const queryParams = {
    contactStatus: contactQuery
  }

  const {
    data: contacts,
    isLoading,
    isError
  } = useQueryItems({ key: ['contacts', contactQuery], queryFunction: fetchContacts(queryParams) })

  //TODO: action when click load more, call api to fetch products
  const handleClickLoadMore = useCallback(() => {}, [])

  if (isLoading)
    return (
      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    )
  if (isError || !contacts) return <PageNotFound headerContent='Opp!' body='Error page' />

  return (
    <Grid container={!matchedBreakpoint}>
      {contacts.map((contactItem) => {
        return (
          <Grid key={contactItem.id} xs={12} item>
            <ContactItem user={contactItem} />
          </Grid>
        )
      })}

      <Grid xs={12} sx={{ textAlign: 'center', marginTop: '24px' }} item>
        <Button children='Load more' color='inherit' size='small' onClick={handleClickLoadMore} />
      </Grid>
    </Grid>
  )
}

export default memo(Contact)
