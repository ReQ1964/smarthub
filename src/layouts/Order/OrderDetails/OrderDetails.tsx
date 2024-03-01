import React, { useState } from 'react';
import classes from './OrderDetails.module.scss';
import OrderItem from '../OrderItem/OrderItem';
import arrowDown from '@/assets/icon/arrow_down.svg';
import { useAppSelector } from '@/store/hooks';

const OrderDetails = () => {
  const cartProducts = useAppSelector((state) => state.cart.cartProducts);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  const { shippingMethod } = useAppSelector((state) => state.order);
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className={classes.orderDetails}>
      <div className={classes.info}>
        <h2 onClick={() => setIsActive((prevState) => !prevState)}>
          Order details{' '}
          <img
            src={arrowDown}
            alt=""
            className={isActive ? classes.active : ''}
          />
        </h2>
        <div className={classes.total}>
          <p>Total: ${totalPrice}</p>
          <p>
            {shippingMethod ? `+ Shipping $${shippingMethod.price} ` : null}
          </p>
        </div>
      </div>
      <ul
        className={`${classes.detailedOrder} ${isActive ? classes.active : ''}`}
      >
        {cartProducts.map((product) => {
          return (
            <OrderItem
              key={product.id}
              name={product.name}
              img={product.img}
              quantity={product.quantity}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default OrderDetails;
