import React from 'react';
import classes from './PaymentConfirmed.module.scss';
import done from '@/assets/icon/done.svg';
import Button from '@/components/UI/Button/Button';
import { useNavigate } from 'react-router-dom';

const PaymentConfirmed = () => {
  const navigate = useNavigate();

  return (
    <section className={classes.accepted}>
      <img src={done} alt="An icon signalising a confirmed order" />
      <h1>Payment confirmed!</h1>
      <h4>Order #10</h4>
      <p>
        Thank you for trusting us, and buying our products! Your order will be
        ready to ship in 2-3 days. Please check your inbox or account tab for
        order status updates.
      </p>
      <Button className={classes.btn} onClick={() => navigate('/shop')}>
        Back to shopping
      </Button>
    </section>
  );
};

export default PaymentConfirmed;
