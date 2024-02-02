import { memo, useCallback } from 'react'

//mui
import Grid from '@mui/material/Grid'

//components
// import ProductCard from '@/components/ProductCard'
import ContactItem, { UserContact } from '@/components/ContactItem'
import Button from '@/components/Button'

//helper
import useScreenWidth from '@/hooks/useScreenWidth'

const demoValue = [
  {
    id: 1,
    productName: 'Product 1',
    productCategory: 'Category 1',
    productPrice: 100,
    productRating: 4.5,
    productRatingCount: 100
  },
  {
    id: 2,
    productName: 'Product 2',
    productCategory: 'Category 2',
    productPrice: 0,
    productRating: 3.5,
    productRatingCount: 200
  },
  {
    id: 3,
    productName: 'Product 3',
    productCategory: 'Category 3',
    productPrice: 300,
    productRating: 2.5,
    productRatingCount: 300
  },
  {
    id: 4,
    productName: 'Product 4',
    productCategory: 'Category 4',
    productPrice: 400,
    productRating: 1.5,
    productRatingCount: 400
  },
  {
    id: 5,
    productName: 'Product 5',
    productCategory: 'Category 5',
    productPrice: 500,
    productRating: 5,
    productRatingCount: 500
  },
  {
    id: 6,
    productName: 'Product 6',
    productCategory: 'Category 6',
    productPrice: 0,
    productRating: 4,
    productRatingCount: 600
  }
]

const fakeData: UserContact = {
  userName: 'Rosetta Gottlieb',
  productNumber: 12,
  followerNumber: 23,
  contactStatus: 'follower'
}

const Followers = () => {
  const { matchedBreakpoint } = useScreenWidth({ down: 'sm' })

  //TODO: action when click load more, call api to fetch products
  const handleClickLoadMore = useCallback(() => {}, [])

  return (
    <Grid container={!matchedBreakpoint}>
      {demoValue.map((item) => {
        return (
          <Grid key={item.id} xs={12} item>
            <ContactItem user={fakeData} />
          </Grid>
        )
      })}

      <Grid xs={12} sx={{ textAlign: 'center', marginTop: '24px' }} item>
        <Button children='Load more' color='inherit' size='small' onClick={handleClickLoadMore} />
      </Grid>
    </Grid>
  )
}

export default memo(Followers)
