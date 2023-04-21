import { DUMMY_PRODUCTS } from '../Shop/ShopPage'
import { useEffect } from 'react'

import { useParams } from 'react-router-dom'
import Item from './Item/Item'

export const SingleProductPage = () => {
  const {productId} = useParams()
  const product = DUMMY_PRODUCTS.find(product => product.id === productId)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [productId])

  return <main>
    <Item product={product}/>

  </main>
    
  
}

export default SingleProductPage