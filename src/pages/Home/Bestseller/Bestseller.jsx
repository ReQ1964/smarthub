import classes from './Bestseller.module.scss';
import Product from '../../../components/UI/Product';
import Button from '../../../components/UI/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Bestseller = () => {
	const navigate = useNavigate();
	const products = useSelector((state) => state.products.products);

	return (
		<section className={classes.bestseller}>
			<h3>Featured Products</h3>
			<h2>Bestseller products</h2>
			<ul className={classes.products}>
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
			<Button className={classes.btn}>BROWSE MORE</Button>
		</section>
	);
};

export default Bestseller;
