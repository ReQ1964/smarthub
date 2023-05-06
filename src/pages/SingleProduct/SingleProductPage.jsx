import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Item from './Item/Item';
import Description from './Description/Description';
import SimilarProducts from './SimilarProducts/SimilarProducts';

export const SingleProductPage = () => {
	const { productId } = useParams();
	const products = useSelector((state) => state.products.products);
	const product = products.find((product) => product.id === productId);

	return (
		<main>
			<Item product={product} />
			<Description />
			<SimilarProducts />
		</main>
	);
};

export default SingleProductPage;
