import classes from './SimilarProducts.module.scss'
import { DUMMY_PRODUCTS } from '../../Shop/ShopPage'
import SimilarProduct from '../../../components/UI/SimilarProduct'
import { useNavigate } from 'react-router-dom'

const SimilarProducts = () => {
    const navigate = useNavigate()

  return <section className={classes.similar}>
    <h1>SIMILAR PRODUCTS</h1>
    {DUMMY_PRODUCTS.map(product => <SimilarProduct onClick={() => navigate(`/shop/${product.id}`)} key={product.id} img={product.img} name={product.name} price={product.price} company={product.company}/>)}
  </section>
}

export default SimilarProducts