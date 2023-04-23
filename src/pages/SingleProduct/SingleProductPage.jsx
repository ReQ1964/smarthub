import { DUMMY_PRODUCTS } from '../Shop/ShopPage';

import { useParams } from 'react-router-dom';
import Item from './Item/Item';
import Description from './Description/Description';

export const SingleProductPage = () => {
	const { productId } = useParams();
	const product = DUMMY_PRODUCTS.find((product) => product.id === productId);

	return (
		<main>
			<Item product={product} />
			<Description />
		</main>
	);
};

export default SingleProductPage;
