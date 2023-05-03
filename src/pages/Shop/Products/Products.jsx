import classes from './Products.module.scss'
import Product from '../../../components/UI/Product'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Products = (props) => {
    const navigate = useNavigate()
    const data = useSelector((state) => state.products.products);
    const products = Object.values(data)

    return <section className={classes.products}>
        <ul className={classes.items}>
        {products.map((product) => (
					<Product
						onClick={() => navigate(`/shop/${product.id}`)}
						key={product.id}
						img={product.img}
						name={product.name}
						price={product.price}
						company={product.company}
						colors={product.colors}
					/>
				))}
        </ul>
    </section>
}

export default Products