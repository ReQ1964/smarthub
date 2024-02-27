import React from 'react';
import classes from './Categories.module.scss';
import smartwatch from '@/assets/img/home-categories/smartwatch.webp';
import phone from '@/assets/img/home-categories/phone.webp';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/store/hooks';
import { setFilteredProducts } from '@/store/products-slice';

const Categories = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <section className={classes.categories}>
      <div className={`${classes.category}`}>
        <p className={classes.alert}>Ends Today</p>
        <h2>Elements Of Style</h2>
        <p>Top Ten Products of the Week</p>
        <a
          onClick={() => {
            navigate('/shop');
            dispatch(
              setFilteredProducts({ sortType: 'a-z', productType: 'watch' }),
            );
          }}
        >
          Explore Items
        </a>
        <img src={smartwatch} alt="An image of a smartwatch" />
      </div>
      <div className={`${classes.category}`}>
        <p>Your Space</p>
        <h2>Modern Life</h2>
        <p>Top Ten Products of the Week</p>
        <a
          onClick={() => {
            navigate('/shop');
            dispatch(
              setFilteredProducts({ sortType: 'a-z', productType: 'phone' }),
            );
          }}
        >
          Explore Items
        </a>
        <img src={phone} alt="An image of a phone" />
      </div>
    </section>
  );
};

export default Categories;
