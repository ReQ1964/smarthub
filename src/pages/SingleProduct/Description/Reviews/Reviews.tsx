import React from 'react';
import classes from './Reviews.module.scss';
import StarsRating from '@/components/UI/StarsRating/StarsRating';
import { useLoaderData } from 'react-router';

export interface IReviews {
  [key: string]: {
    date: string;
    nickname: string;
    rating: number;
    review: string;
  };
}

const Reviews = () => {
  const { reviews } = useLoaderData() as {
    reviews: IReviews;
  };

  return (
    <section className={classes.reviews}>
      {Object.keys(reviews).map((key) => (
        <div key={key} className={classes.review}>
          <div className={classes.left}>
            <h4>{reviews[key].nickname}</h4>
            <div className={classes.rating}>
              {StarsRating(reviews[key].rating)}
            </div>
          </div>
          <p>{reviews[key].review}</p>
          <h4 className={classes.date}>{reviews[key].date}</h4>
        </div>
      ))}
    </section>
  );
};

export default Reviews;
