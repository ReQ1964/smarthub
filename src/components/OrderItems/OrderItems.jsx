import { useSelector } from 'react-redux';
import { useState } from 'react';
import classes from './OrderItems.module.scss';
import OrderItem from './OrderItem/OrderItem';
import arrowDown from '../../assets/icon/arrow_down.svg';

const OrderItems = () => {
  const products = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const { shippingMethod } = useSelector((state) => state.order.details);
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
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
      <ul className={classes.orderItems}>
        {isActive &&
          products.map((product) => {
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

export default OrderItems;
