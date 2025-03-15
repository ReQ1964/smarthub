import React from 'react';
import trash from '@/assets/icon/delete.svg';
import useCartStore from '@/store/cartStore';
import classes from './CartItem.module.scss';

interface ICartItemProps {
  id: string | number;
  img: string;
  name: string;
  price: number;
}

const CartItem = ({ id, img, name, price }: ICartItemProps) => {
  const { findProduct, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCartStore((state) => state);
  const cartProduct = findProduct(id);

  return (
    <div className={classes.item}>
      <img src={img} alt="Product" className={classes.prodImg} />
      <div className={classes.left}>
        <h3>{name}</h3>
        <img
          src={trash}
          alt="An icon to delete an item from the cart"
          onClick={() => removeFromCart(id)}
        />
      </div>
      <div className={classes.right}>
        <p className={classes.price}>${price}</p>
        <div className={classes.quantity}>
          <p>Quantity</p>
          <div className={classes.button}>
            <button onClick={() => increaseQuantity(id)}>-</button>
            <p>{cartProduct?.quantity}</p>
            <button onClick={() => decreaseQuantity(id)}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
