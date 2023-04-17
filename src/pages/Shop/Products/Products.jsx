import classes from './Products.module.scss'
import Product from '../../../components/UI/Product'

const Products = (props) => {
    return <section className={classes.products}>
        <ul className={classes.items}>
        {props.products.map(product => <Product key={product.id} id={product.id} img={product.img} name={product.name} price={product.price} company={product.company} colors={product.colors}/>)}
        </ul>
    </section>
}

export default Products