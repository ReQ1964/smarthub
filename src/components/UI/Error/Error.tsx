import React from 'react';
import errorImage from '@/assets/img/nav-responses/error.webp';
import classes from './Error.module.scss';

const Error = ({ children }: { children: string }) => {
  return (
    <div className={classes.errorPage}>
      <img
        className={classes.errorImage}
        src={errorImage}
        alt="An image showing that an error occurred."
      />
      <h3>{children}</h3>
    </div>
  );
};

export default Error;
