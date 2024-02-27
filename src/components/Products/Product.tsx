import React from 'react';
import classes from './Product.module.scss';
import { IShowcaseProduct } from '@/interfaces';

interface ProductProps extends IShowcaseProduct {
  onClick: () => void;
}

const Product = ({
  id,
  name,
  colors,
  company,
  price,
  img,
  onClick,
}: ProductProps) => {
  return (
    <li onClick={onClick} className={classes.product} key={id}>
      <img src={Object.values(img)[0]} alt="" />
      <div className={classes.description}>
        <h4>{name}</h4>
        <p className={classes.company}>{company}</p>
        <p className={classes.price}>${price}</p>
        <div className={classes.colors}>
          {colors.map((color) => {
            return (
              <div
                className={classes.color}
                style={{
                  backgroundColor: color,
                }}
                key={color}
              ></div>
            );
          })}
        </div>
      </div>
    </li>
  );
};

export default Product;
