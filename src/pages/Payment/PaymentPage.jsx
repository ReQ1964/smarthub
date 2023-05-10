import Summary from '../../components/Summary/Summary';
import PaymentForm from './PaymentForm/PaymentForm';

const PaymentPage = () => {
	return (
		<main>
			<Summary contact={'contact'} address={'address'} ship={'method'} />
			<PaymentForm />
		</main>
	);
};

export default PaymentPage;
