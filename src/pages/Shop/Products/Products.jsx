import classes from './Products.module.scss'
import Product from '../../../components/UI/Product'
import { useNavigate } from 'react-router-dom'

const Products = (props) => {
    const navigate = useNavigate()

    return <section className={classes.products}>
        <ul className={classes.items}>
        {props.products.map(product => <Product onClick={() => navigate(`/shop/${product.id}`)} key={product.id} id={product.id} img={product.img} name={product.name} price={product.price} company={product.company} colors={product.colors}/>)}
        </ul>
    </section>
}

export default Products