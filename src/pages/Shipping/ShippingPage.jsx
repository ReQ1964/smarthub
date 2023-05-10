import React from 'react';
import Summary from '../../components/Summary/Summary';
import Method from './Method/Method';

const ShippingPage = () => {
	return (
		<main>
			<Summary contact={'contact'} address={'address'} />
			<Method />
		</main>
	);
};

export default ShippingPage;
