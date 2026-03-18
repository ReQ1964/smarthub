import React from 'react';
import classes from './Summary.module.scss';

interface ISummaryProps {
  email: string;
  number: string;
  address: string;
  postal: string;
  city: string;
  ship?: string;
}

const Summary = ({ data }: { data: ISummaryProps }) => {
  const { email, number, address, postal, city, ship } = data;
  return (
    <div className={classes.summary}>
      <div>
        <h4>Contact:</h4>
        <p>{`${email}, ${number}`}</p>
      </div>
      <div>
        <h4>Ship to:</h4>
        <p>{`${address}, ${postal}, ${city}`}</p>
      </div>
      {ship && (
        <div className={classes.third}>
          <h4>Method</h4>
          <p>{ship}</p>
        </div>
      )}
    </div>
  );
};

export default Summary;
