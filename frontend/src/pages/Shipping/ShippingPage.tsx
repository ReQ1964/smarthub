import React from 'react';
import Summary from '../Payment/Summary/Summary';
import Method from './ShippingForm/ShippingForm';
import { useAppSelector } from '@/store/hooks';

const ShippingPage = () => {
  const { email, number, address, postal, city } = useAppSelector(
    (state) => state.order.details,
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
