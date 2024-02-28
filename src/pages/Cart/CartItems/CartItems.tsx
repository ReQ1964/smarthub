import React from 'react';
import CartItem from './CartItem/CartItem';
import classes from './CartItems.module.scss';
import { useAppSelector } from '@/store/hooks';

const CartItems = () => {
  const cartProducts = useAppSelector((state) => state.cart.cartProducts);

  return (
    <section className={classes.items}>
      {cartProducts.map((product) => {
        return (
          <CartItem
            key={product.id}
            id={product.id}
            img={product.img}
            name={product.name}
            price={product.price}
          />
        );
      })}
    </section>
  );
};

export default CartItems;
