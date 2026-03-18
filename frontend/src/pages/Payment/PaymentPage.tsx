import React from 'react';
import { useState } from 'react';
import Summary from './Summary/Summary';
import PaymentForm from './PaymentForm/PaymentForm';
import { useAppSelector } from '@/store/hooks';
import PaymentConfirmed from './PaymentConfirmed/PaymentConfirmed';
import Spinner from '@/components/UI/Spinner/Spinner';

const PaymentPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState<boolean>(false);

  const { email, number, address, postal, city } = useAppSelector(
    (state) => state.order.details,
  );
  const { shippingMethod } = useAppSelector((state) => state.order);

  const data = {
    email,
    number,
    address,
    postal,
    city,
    ship: shippingMethod ? shippingMethod.name : '',
  };

  return (
    <main>
      {!paymentConfirmed && (
        <>
          <Summary data={data} />
          <PaymentForm
            setIsPaymentConfirmed={setPaymentConfirmed}
            setIsLoading={setIsLoading}
          />
        </>
      )}
      {isLoading ? <Spinner /> : paymentConfirmed ? <PaymentConfirmed /> : ''}
    </main>
  );
};

export default PaymentPage;
