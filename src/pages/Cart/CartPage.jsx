import classes from './CartPage.module.scss';
import Button from '../../components/UI/Button';
import CartItems from './CartItems/CartItems';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
	const navigate = useNavigate();
	const totalPrice = useSelector((state) => state.cart.totalPrice);

	return (
		<main className={classes.cart}>
			<h1>Your Cart Items</h1>
			<div className={classes.info}>
				<p>Product</p>
				<p>Price</p>
			</div>
			<CartItems />
			<h3>Total price: ${totalPrice}</h3>
			<Button
				className={classes.checkout}
				onClick={() => navigate('/order/details')}
			>
				Checkout
			</Button>
		</main>
	);
};

export default CartPage;
