import React from 'react';
import classes from './Features.module.scss';
import book from '@/assets/img/home-features/feature-book.png';
import increment from '@/assets/img/home-features/feature-increment.png';
import newspaper from '@/assets/img/home-features/feature-newspaper.png';

const Features = () => {
  return (
    <section className={classes.features}>
      <div className={classes.title}>
        <h2>the best services</h2>
        <p>No problems stand any chance!</p>
      </div>
      <div className={classes.feature}>
        <div>
          <img src={book} alt="An icon of a book" />
        </div>
        <h3>Constant Support</h3>
        <p>We guarantee lifetime techincal assistance!</p>
      </div>
      <div className={classes.feature}>
        <div>
          <img src={newspaper} alt="An icon of a newspaper" />
        </div>
        <h3>Concrete</h3>
        <p>Clear rules and contracts!</p>
      </div>
      <div className={classes.feature}>
        <div>
          <img src={increment} alt="An icon of an incremental arrow" />
        </div>
        <h3>Rapid Development</h3>
        <p>Let&apos;s keep up with the times together!</p>
      </div>
    </section>
  );
};

export default Features;
