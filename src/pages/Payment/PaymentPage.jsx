import Summary from '../../components/Summary/Summary';
import PaymentForm from './PaymentForm/PaymentForm';
import { useSelector } from 'react-redux';

const PaymentPage = () => {
	const { email, number, address, postal, city, shippingMethod } = useSelector(
		(state) => state.order.details
	);

	const data = {
		email,
		number,
		address,
		postal,
		city,
		ship: shippingMethod.name,
	};

	return (
		<main>
			<Summary data={data} />
			<PaymentForm />
		</main>
	);
};

export default PaymentPage;
