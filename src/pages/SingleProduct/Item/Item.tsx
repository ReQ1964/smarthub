import React from 'react';
import { useState } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { addToCart } from '@/store/cart-slice';
import { IDetailedProduct } from '@/interfaces';
import classes from './Item.module.scss';
import filledStar from '@/assets/icon/rating//star-filled.svg';
import star from '@/assets/icon/rating/star.svg';
import Button from '@/components/UI/Button';

export const Item = ({ product }: { product: IDetailedProduct }) => {
  const { id, name, colors, company, price, img, type, rating } = product;
  const dispatch = useAppDispatch();
  const [pickedColor, setPickedColor] = useState<string>(colors[0]);

  const capitalize = (s: string) => {
    return s[0].toUpperCase() + s.slice(1);
  };

  const createStars = (number: number) => {
    const elements = [] as JSX.Element[];
    for (let i = 0; i < number; i++)
      elements.push(
        <img
          key={`filledStar-${i}`}
          src={filledStar}
          alt="An icon of a filled review star"
        />,
      );
    if (number < 5) {
      for (let i = 0; i < 5 - number; i++)
        elements.push(
          <img
            key={`star-${i}`}
            src={star}
            alt="An icon of an empty review star"
          />,
        );
    }
    return elements;
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
      <img src={img.pickedColor} alt="" />
      <div className={classes.description}>
        <div className={classes.info}>
          <h3>{name}</h3>
          <div className={classes.rating}>
            <div className={classes.stars}>{createStars(rating)}</div>
            <p>10 reviews</p>
          </div>
        </div>

        <div className={classes.status}>
          <h3 className={classes.price}>${price}</h3>
          <p className={classes.availability}>
            <span>Availability:</span> In Stock
          </p>
        </div>

        <p className={classes.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ad
          accusantium, voluptatum tenetur corrupti sint magnam obcaecati
          incidunt culpa soluta facilis aliquid voluptatem minus nostrum quod?
          Voluptas cupiditate quisquam adipisci?
        </p>

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

        <div className={classes.controls}>
          <Button onClick={addToCartHandler}>Add to cart</Button>
        </div>
      </div>
    </section>
  );
};

export default Item;
