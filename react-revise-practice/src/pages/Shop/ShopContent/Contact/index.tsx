import { memo } from 'react'

//mui
import Grid from '@mui/material/Grid'

//components
// import ProductCard from '@/components/ProductCard'
import ContactItem from '@/components/ContactItem'

//helper
import useScreenWidth from '@/hooks/useScreenWidth'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import PageNotFound from '@/components/PageNotFound'
import { useContactsQuery } from '@/hooks/useContactsQuery'
import InfiniteScroll from '@/components/InfiniteScroll'

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
  } = useContactsQuery({ keys: ['contacts', contactQuery], params: queryParams })

  if (isLoading)
    return (
      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    )
  if (isError || !contacts) return <PageNotFound headerContent='Opp!' body='Error page' />

  return (
    <InfiniteScroll maxHeight='800px' isHiddenActionButton>
      <Grid container={!matchedBreakpoint}>
        {contacts.map((contactItem) => {
          return (
            <Grid key={contactItem.id} xs={12} item>
              <ContactItem user={contactItem} />
            </Grid>
          )
        })}
      </Grid>
    </InfiniteScroll>
  )
}

export default memo(Contact)
