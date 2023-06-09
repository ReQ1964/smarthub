import classes from './PaymentConfirmed.module.scss';
import done from '../../../assets/icon/done.svg';

const PaymentConfirmed = () => {
	return (
		<section className={classes.accepted}>
			<img src={done} alt="" />
			<h1>Payment confirmed!</h1>
			<h4>Order #10</h4>
			<p>
				Thank you for trusting us, and buying our products! Your order will be
				ready to ship in 2-3 days. Please check your inbox or account tab for
				order status updates.
			</p>
		</section>
	);
};

export default PaymentConfirmed;
