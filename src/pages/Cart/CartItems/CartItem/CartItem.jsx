import classes from './CartItem.module.scss';
import trash from '../../../../assets/icon/delete.svg';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { removeFromCart, changeQuantity } from '../../../../store/cart-slice';

const CartItem = (props) => {
	const dispatch = useDispatch();
	const product = useSelector((state) =>
		state.cart.products.find((product) => product.id === props.id)
	);

	return (
		<div className={classes.item}>
			<img src={props.img} alt="" className={classes.prodImg} />
			<div className={classes.left}>
				<h3>{props.name}</h3>
				<img
					src={trash}
					alt=""
					onClick={() => dispatch(removeFromCart(props.id))}
				/>
			</div>
			<div className={classes.right}>
				<p className={classes.price}>${props.price}</p>
				<div className={classes.quantity}>
					<p>Quantity</p>
					<div className={classes.button}>
						<button
							onClick={() =>
								dispatch(changeQuantity({ id: props.id, type: 'decrease' }))
							}
						>
							-
						</button>
						<p>{product.quantity}</p>
						<button
							onClick={() =>
								dispatch(changeQuantity({ id: props.id, type: 'increase' }))
							}
						>
							+
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
