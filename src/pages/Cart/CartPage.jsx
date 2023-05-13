import classes from './CartPage.module.scss';
import Button from '../../components/UI/Button';
import CartItems from './CartItems/CartItems';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from '../../components/Modal/Modal';

const CartPage = () => {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const [modalMessage, setModalMessage] = useState('');
	const totalPrice = useSelector((state) => state.cart.totalPrice);
	const products = useSelector((state) => state.cart.products);

	const checkoutHandler = () => {
		if (products.length === 0) {
			setModalMessage("Your cart can't be empty!");
			setIsOpen(true);
			return;
		}
		navigate('/order/details');
	};

	return (
		<main className={classes.cart}>
			<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
				{modalMessage}
			</Modal>
			<h1>Your Cart Items</h1>
			<div className={classes.info}>
				<p>Product</p>
				<p>Price</p>
			</div>
			<CartItems />
			<h3>Total price: ${totalPrice}</h3>
			<Button className={classes.checkout} onClick={checkoutHandler}>
				Checkout
			</Button>
		</main>
	);
};

export default CartPage;
