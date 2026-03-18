import React from 'react';
import classes from './Sponsors.module.scss';
import reddit from '@/assets/icon/sponsors/reddit.svg';
import aws from '@/assets/icon/sponsors/aws.svg';
import hooli from '@/assets/icon/sponsors/hooli.svg';
import stripe from '@/assets/icon/sponsors/stripe.svg';

const Sponsors = () => {
  return (
    <section className={classes.sponsors}>
      <div className={classes.heading}>
        <h1>Big Companies Are Here</h1>
        <p>Guarantee of reliable service and long-term support</p>
      </div>
      <ul className={classes.icons}>
        <li>
          <img src={stripe} alt="Stripe company icon" />
        </li>

        <li>
          <img src={aws} alt="AWS company icon" />
        </li>

        <li>
          <img src={hooli} alt="Hooli company icon" />
        </li>

        <li>
          <img src={reddit} alt="Reddit company icon" />
        </li>
      </ul>
    </section>
  );
};

export default Sponsors;
