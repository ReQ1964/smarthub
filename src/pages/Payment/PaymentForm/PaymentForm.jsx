import classes from './PaymentForm.module.scss';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Button from '../../../components/UI/Button';
import { useDispatch } from 'react-redux';
import { addOrderDetails } from '../../../store/order-slice';
import { useSelector } from 'react-redux';

const PaymentForm = ({ isLoading, isConfirmed }) => {
	const dispatch = useDispatch();
	const orderDetails = useSelector((state) => state.order.details);
	const { totalPrice, products: cartProducts } = useSelector(
		(state) => state.cart
	);

	const expirationRegExp = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
	const ccvRegExp = /^[0-9]+$/;

	const schema = yup.object().shape({
		cardNumber: yup
			.number()
			.typeError("Card Number can't contain letters or special characters.")
			.required('Please enter your card number.'),
		holderName: yup.string().required('Please enter your name.'),
		expiration: yup
			.string()
			.required("Please enter your card's expiration date.")
			.matches(
				expirationRegExp,
				'Please enter the expiration date in the MM/YY format.'
			),
		ccv: yup
			.string()
			.length(3, 'CCV number has to be exactly 3 characters long.')
			.required('Please enter your CCV number.')
			.matches(ccvRegExp, 'Input must contain only digits'),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			cardNumber: orderDetails.cardNumber,
			holderName: orderDetails.holderName,
			expiration: orderDetails.expiration,
			ccv: orderDetails.ccv,
		},
	});

	const onSubmit = async (data) => {
		isLoading(true);
		dispatch(addOrderDetails({ cardInfo: data }));
		const priceWithShipping = totalPrice + orderDetails.shippingMethod.price;
		await fetch(
			'https://phone-shop-43033-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					details: {
						...orderDetails,
						priceWithShipping,
					},
					cartProducts,
					id: (Math.random() * 100).toFixed(),
				}),
			}
		);
		isConfirmed(true);
		isLoading(false);
	};

	return (
		<>
			<h2 className={classes.heading}>Payment method</h2>
			<form onSubmit={handleSubmit(onSubmit)} className={classes.paymentForm}>
				<input {...register('cardNumber')} placeholder="Card Number*" />
				<p className={classes.error}>{errors.cardNumber?.message}</p>

				<input {...register('holderName')} placeholder="Holder Name*" />
				<p className={classes.error}>{errors.holderName?.message}</p>

				<div className={classes.cardData}>
					<div className={classes.exp}>
						<input
							{...register('expiration')}
							placeholder="Expiration (MM/YY)*"
						/>
						<p className={classes.error}>{errors.expiration?.message}</p>
					</div>

					<div className={classes.ccv}>
						<input {...register('ccv')} placeholder="CCV*" />
						<p className={classes.error}>{errors.ccv?.message}</p>
					</div>
				</div>
				<Button className={classes.btn}>Pay now</Button>
			</form>
		</>
	);
};

export default PaymentForm;
