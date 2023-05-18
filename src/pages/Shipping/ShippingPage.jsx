import React from 'react';
import Summary from '../../components/Summary/Summary';
import Method from './Method/Method';
import { useSelector } from 'react-redux';

const ShippingPage = () => {
	const { email, number, address, postal, city } = useSelector(
		(state) => state.order.details
	);

	const data = {
		email,
		number,
		address,
		postal,
		city,
	};

	return (
		<main>
			<Summary data={data} />
			<Method />
		</main>
	);
};

export default ShippingPage;
