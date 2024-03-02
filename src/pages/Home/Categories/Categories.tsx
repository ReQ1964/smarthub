import React from 'react';
import classes from './Categories.module.scss';
import smartwatch from '@/assets/img/home-categories/smartwatch.webp';
import phone from '@/assets/img/home-categories/phone.webp';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <section className={classes.categories}>
      <div className={`${classes.category} ${classes.smartwatchCategory}`}>
        <p className={classes.alert}>Ends Today</p>
        <h2>Stylish Look</h2>
        <p>Top Ten Products of the Week</p>
        <Link to={'/shop'}>Explore Items</Link>
        <img src={smartwatch} alt="An image of a smartwatch" />
      </div>
      <div className={`${classes.category} ${classes.phoneCategory}`}>
        <p>Your Space</p>
        <h2>Modern Life</h2>
        <p>Top Ten Products of the Week</p>
        <Link to={'/shop'}>Explore Items</Link>
        <img src={phone} alt="An image of a phone" />
      </div>
    </section>
  );
};

export default Categories;
