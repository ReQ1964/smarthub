import React from 'react';
import axios from 'axios';
import classes from './PaymentForm.module.scss';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Button from '@/components/UI/Button/Button';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addOrderPaymentInfo, clearDetails } from '@/store/order-slice';
import { clearCart } from '@/store/cart-slice';

interface IPaymentProps {
  setIsPaymentConfirmed: (arg0: boolean) => void;
  setIsLoading: (arg0: boolean) => void;
}

export interface IPaymentPayload {
  cardNumber: number;
  holderName: string;
  expiration: string;
  ccv: string;
}

const PaymentForm = ({
  setIsPaymentConfirmed,
  setIsLoading,
}: IPaymentProps) => {
  const dispatch = useAppDispatch();
  const orderInfo = useAppSelector((state) => state.order);
  const { totalPrice, products: cartProducts } = useAppSelector(
    (state) => state.cart,
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
        'Please enter the expiration date in the MM/YY format.',
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
      cardNumber: orderInfo.cardInfo.cardNumber,
      holderName: orderInfo.cardInfo.holderName,
      expiration: orderInfo.cardInfo.expiration,
      ccv: orderInfo.cardInfo.ccv,
    },
  });

  const onSubmit = async (data: IPaymentPayload) => {
    setIsLoading(true);
    dispatch(addOrderPaymentInfo(data));
    const priceWithShipping = totalPrice + orderInfo.shippingMethod.price;
    await axios.post(
      'https://phone-shop-43033-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
      {
        details: {
          ...orderInfo,
          priceWithShipping,
        },
        cartProducts,
        id: (Math.random() * 100).toFixed(),
      },
    );
    dispatch(clearCart());
    dispatch(clearDetails());
    setIsPaymentConfirmed(true);
    setIsLoading(false);
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
