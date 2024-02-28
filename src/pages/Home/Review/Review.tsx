import React from 'react';
import classes from './Review.module.scss';
import user from '@/assets/img/home-review/review-user.png';
import star from '@/assets/icon/rating/star.svg';
import filledStar from '@/assets/icon/rating/star-filled.svg';

const Review = () => {
  return (
    <section className={classes.review}>
      <h1>customers reviews</h1>
      <div className={classes.rating}>
        <div>
          <img src={user} alt="reviewer's profile picture" />
        </div>
        <img src={filledStar} alt="A picture of a review star" />
        <img src={filledStar} alt="A picture of a review star" />
        <img src={filledStar} alt="A picture of a review star" />
        <img src={filledStar} alt="A picture of a review star" />
        <img src={star} alt="A picture of an empty review star" />
      </div>
      <p>SmartHub helps you with picking out the best devices around!</p>
      <p className={classes.name}>Will Smith</p>
    </section>
  );
};

export default Review;
