import { useState } from 'react';
import Summary from '../../components/Summary/Summary';
import PaymentForm from './PaymentForm/PaymentForm';
import { useSelector } from 'react-redux';
import PaymentConfirmed from './PaymentConfirmed/PaymentConfirmed';
import Spinner from '../../components/UI/Spinner';

const PaymentPage = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [paymentConfirmed, setPaymentConfirmed] = useState(false);

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
			{!paymentConfirmed && (
				<>
					<Summary data={data} />
					<PaymentForm
						isConfirmed={setPaymentConfirmed}
						isLoading={setIsLoading}
					/>
				</>
			)}
			{isLoading ? <Spinner /> : paymentConfirmed ? <PaymentConfirmed /> : ''}
		</main>
	);
};

export default PaymentPage;
