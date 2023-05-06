import classes from './SimilarProducts.module.scss';
import { useSelector } from 'react-redux';
import Products from '../../../components/UI/Products/Products';

const SimilarProducts = () => {
	const products = useSelector((state) => state.products.products);

	return (
		<section className={classes.similar}>
			<h1>SIMILAR PRODUCTS</h1>
			<Products products={products} />
		</section>
	);
};

export default SimilarProducts;
