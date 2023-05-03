import classes from './SimilarProducts.module.scss'
import SimilarProduct from '../../../components/UI/SimilarProduct'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const SimilarProducts = () => {
  const data = useSelector((state) => state.products.products);
  const products = Object.values(data)
    const navigate = useNavigate()

  return <section className={classes.similar}>
    <h1>SIMILAR PRODUCTS</h1>
    {products.map(product => <SimilarProduct onClick={() => navigate(`/shop/${product.id}`)} key={product.id} img={product.img} name={product.name} price={product.price} company={product.company}/>)}
  </section>
}

export default SimilarProducts