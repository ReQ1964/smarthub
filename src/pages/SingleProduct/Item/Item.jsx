import classes from './Item.module.scss';
import filledStar from '../../../assets/icon/rating//star-filled.svg';
import star from '../../../assets/icon/rating/star.svg';
import Button from '../../../components/UI/Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/cart-slice';
import { useState } from 'react';

export const Item = ({ product }) => {
  const dispatch = useDispatch();
  const [pickedColor, setPickedColor] = useState(product.colors[0]);

  const capitalize = (s) => {
    return s[0].toUpperCase() + s.slice(1);
  };

  const createStars = (number) => {
    let elements = [];
    for (let i = 0; i < number; i++)
      elements.push(<img key={`filledStar-${i}`} src={filledStar} alt="" />);
    if (number < 5) {
      for (let i = 0; i < 5 - number; i++)
        elements.push(<img key={`star-${i}`} src={star} alt="" />);
    }
    return elements;
  };

  const addToCartHandler = () => {
    dispatch(
      addToCart({
        id: `${product.id}_${pickedColor}`,
        img: product.img[pickedColor],
        name: `${product.name} ${capitalize(pickedColor)}`,
        price: product.price,
        company: product.company,
        color: pickedColor,
        quantity: 1,
      }),
    );
  };

  return (
    <section className={classes.item}>
      <img src={product.img[pickedColor]} alt="" />

      <div className={classes.description}>
        <div className={classes.info}>
          <h3>{product.name}</h3>
          <div className={classes.rating}>
            <div className={classes.stars}>{createStars(product.rating)}</div>
            <p>10 reviews</p>
          </div>
        </div>

        <div className={classes.status}>
          <h3 className={classes.price}>${product.price}</h3>
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
          {product.colors.map((color, index) => {
            return (
              <div
                className={
                  pickedColor.color == color
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
