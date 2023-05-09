import CartItem from './CartItem/CartItem';
import classes from './CartItems.module.scss';
import { useSelector } from 'react-redux';

const CartItems = () => {
	const products = useSelector((state) => state.cart.products);

	return (
		<section className={classes.items}>
			{products.map((product) => {
				return (
					<CartItem
						key={product.id}
						id={product.id}
						img={product.img}
						name={product.name}
						price={product.price}
						company={product.company}
					/>
				);
			})}
		</section>
	);
};

export default CartItems;
