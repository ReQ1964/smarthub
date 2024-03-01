import React from 'react';
import classes from './ShippingForm.module.scss';
import Button from '@/components/UI/Button/Button';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { addOrderShippingMethod } from '@/store/order-slice';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import useRedirectFromOrdering from '@/hooks/useRedirectFromOrdering';

export interface IShippingPayload {
  name: string;
  price: number;
}

const Method = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useRedirectFromOrdering();
  const { shippingMethod } = useAppSelector((state) => state.order);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      shipping: !shippingMethod
        ? 'standard'
        : shippingMethod.name.split(' ')[0].toLowerCase(),
    },
  });

  const onSubmit = (data: { shipping: string }) => {
    let shippingData: IShippingPayload;
    if (data.shipping === 'standard') {
      shippingData = { name: 'Standard shipping', price: 0 };
    } else {
      shippingData = { name: 'Priority shipping', price: 10 };
    }
    dispatch(addOrderShippingMethod(shippingData));
    navigate('/order/payment');
  };

  return (
    <div className={classes.method}>
      <h2>Shipping method</h2>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="standard">
            <input
              type="radio"
              {...register('shipping')}
              id="standard"
              value="standard"
              defaultChecked
            />
            Standard shipping
            <p>Free</p>
          </label>
        </div>
        <div>
          <label htmlFor="priority">
            <input
              type="radio"
              {...register('shipping')}
              id="priority"
              value="priority"
            />
            Priority shipping
            <p>$10</p>
          </label>
        </div>
        <Button className={classes.btn}>Go to payment</Button>
      </form>
    </div>
  );
};

export default Method;
