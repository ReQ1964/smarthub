import React from 'react';
import classes from './CartItem.module.scss';
import trash from '@/assets/icon/delete.svg';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { removeFromCart, changeQuantity } from '@/store/cart-slice';

interface ICartItemProps {
  id: string | number;
  img: string;
  name: string;
  price: number;
}

const CartItem = ({ id, img, name, price }: ICartItemProps) => {
  const dispatch = useAppDispatch();
  const cartProduct = useAppSelector((state) =>
    state.cart.cartProducts.find((product) => product.id === id),
  );

  return (
    <div className={classes.item}>
      <img src={img} alt="Product image" className={classes.prodImg} />
      <div className={classes.left}>
        <h3>{name}</h3>
        <img
          src={trash}
          alt="An icon to delete an item from the cart"
          onClick={() => dispatch(removeFromCart(id))}
        />
      </div>
      <div className={classes.right}>
        <p className={classes.price}>${price}</p>
        <div className={classes.quantity}>
          <p>Quantity</p>
          <div className={classes.button}>
            <button
              onClick={() =>
                dispatch(changeQuantity({ id: id, type: 'decrease' }))
              }
            >
              -
            </button>
            <p>{cartProduct?.quantity}</p>
            <button
              onClick={() =>
                dispatch(changeQuantity({ id: id, type: 'increase' }))
              }
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
