import React from 'react';
import classes from './Description.module.scss';
import Specification from './Specification/Specification';
import Reviews from './Reviews/Reviews';
import { useState } from 'react';

const Description = () => {
  const [category, setCategory] = useState<'specs' | 'reviews'>('specs');

  const showSpec = () => {
    setCategory('specs');
  };

  const showReviews = () => {
    setCategory('reviews');
  };

  return (
    <section>
      <div className={classes.controls}>
        <button
          className={`${classes.button} ${category == 'specs' ? classes.active : ''}`}
          onClick={showSpec}
        >
          Specification
        </button>
        <button
          className={`${classes.button} ${category == 'reviews' ? classes.active : ''}`}
          onClick={showReviews}
        >
          Reviews
        </button>
      </div>
      {category == 'specs' && <Specification />}
      {category == 'reviews' && <Reviews />}
    </section>
  );
};

export default Description;
