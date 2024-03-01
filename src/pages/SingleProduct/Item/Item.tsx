import React from 'react';
import { useState } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { addToCart } from '@/store/cart-slice';
import { IDetailedProduct } from '@/interfaces';
import classes from './Item.module.scss';
import StarsRating from '@/components/UI/StarsRating/StarsRating';
import Button from '@/components/UI/Button/Button';

export const Item = ({
  product,
  reviewsNumber,
}: {
  product: IDetailedProduct;
  reviewsNumber: number;
}) => {
  const { id, name, colors, company, price, img, type, rating, description } =
    product;
  const dispatch = useAppDispatch();
  const [pickedColor, setPickedColor] = useState<string>(colors[0]);
  const capitalize = (s: string) => {
    return s[0].toUpperCase() + s.slice(1);
  };

  const addToCartHandler = () => {
    dispatch(
      addToCart({
        id: `${id}_${pickedColor}`,
        img: img[pickedColor],
        name: `${name} ${capitalize(pickedColor)}`,
        price,
        company,
        color: pickedColor,
        quantity: 1,
        type,
      }),
    );
  };

  return (
    <section className={classes.item}>
      <img src={img[pickedColor]} alt="An image of the color of your choice" />
      <div className={classes.description}>
        <div className={classes.info}>
          <h3>{name}</h3>
          <div className={classes.rating}>
            <div className={classes.stars}>{StarsRating(rating)}</div>
            <p>
              {reviewsNumber} {reviewsNumber === 1 ? 'review' : 'reviews'}
            </p>
          </div>
        </div>

        <div className={classes.status}>
          <h3 className={classes.price}>${price}</h3>
          <p className={classes.availability}>
            <span>Availability:</span> In Stock
          </p>
        </div>

        <p className={classes.text}>{description}</p>

        <div className={classes.colors}>
          {colors.map((color) => {
            return (
              <div
                className={
                  pickedColor == color
                    ? `${classes.color} ${classes.active}`
                    : classes.color
                }
                key={color}
                style={{
                  backgroundColor: color,
                }}
                onClick={() => setPickedColor(color)}
              ></div>
            );
          })}
        </div>

        <Button onClick={addToCartHandler} className={classes.addButton}>
          Add to cart
        </Button>
      </div>
    </section>
  );
};

export default Item;
