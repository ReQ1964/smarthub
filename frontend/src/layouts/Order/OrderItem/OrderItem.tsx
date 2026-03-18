import React from 'react';
import classes from './OrderItem.module.scss';

interface IOrderItemProps {
  name: string;
  img: string;
  quantity: number;
}

const OrderItem = ({ name, img, quantity }: IOrderItemProps) => {
  return (
    <li className={classes.item}>
      <img src={img} alt="An image of the item to order" />
      <p>{name}</p>
      <p>{quantity}x</p>
    </li>
  );
};

export default OrderItem;
