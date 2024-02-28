import React from 'react';
import classes from './StarsRating.module.scss';
import filledStar from '@/assets/icon/rating//star-filled.svg';
import star from '@/assets/icon/rating/star.svg';

const StarsRating = (number: number) => {
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
  return <div className={classes.stars}>{elements}</div>;
};

export default StarsRating;
