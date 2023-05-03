import classes from './Products.module.scss'
import Product from '../../../components/UI/Product'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Products = () => {
    const navigate = useNavigate()
	const filteredProducts = useSelector((state) => state.products.filteredProducts)


    return <section className={classes.products}>
        <ul className={classes.items}>
        {filteredProducts.map((product) => (
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