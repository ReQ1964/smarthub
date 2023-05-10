import { useSelector } from 'react-redux';
import classes from './OrderItems.module.scss';
import OrderItem from './OrderItem/OrderItem';

const OrderItems = () => {
	const products = useSelector((state) => state.cart.products);
	const totalPrice = useSelector((state) => state.cart.totalPrice);

	return (
		<ul className={classes.orderItems}>
			<div className={classes.info}>
				<h2>Order details</h2>
				<p>Total: ${totalPrice}</p>
			</div>
			{products.map((product) => {
				return (
					<OrderItem
						key={product.id}
						name={product.name}
						img={product.img}
						quantity={product.quantity}
					/>
				);
			})}
		</ul>
	);
};

export default OrderItems;
