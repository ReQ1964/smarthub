import React from 'react';
import classes from './Categories.module.scss';
import smartwatch from '@/assets/img/home-categories/smartwatch.webp';
import phone from '@/assets/img/home-categories/phone.webp';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const navigate = useNavigate();

  return (
    <section className={classes.categories}>
      <div className={`${classes.category} ${classes.smartwatchCategory}`}>
        <p className={classes.alert}>Ends Today</p>
        <h2>Elements Of Style</h2>
        <p>Top Ten Products of the Week</p>
        <a
          onClick={() => {
            navigate('/shop');
          }}
        >
          Explore Items
        </a>
        <img src={smartwatch} alt="An image of a smartwatch" />
      </div>
      <div className={`${classes.category} ${classes.phoneCategory}`}>
        <p>Your Space</p>
        <h2>Modern Life</h2>
        <p>Top Ten Products of the Week</p>
        <a
          onClick={() => {
            navigate('/shop');
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
