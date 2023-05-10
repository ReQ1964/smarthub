import classes from './OrderItem.module.scss';

const OrderItem = ({ name, img, quantity }) => {
	return (
		<li className={classes.item}>
			<img src={img} alt="" />
			<p>{name}</p>
			<p>{quantity}x</p>
		</li>
	);
};

export default OrderItem;
