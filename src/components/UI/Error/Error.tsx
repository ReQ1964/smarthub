import React from 'react';
import classes from './Error.module.scss';
import errorImage from '@/assets/img/nav-responses/error-image.jpg';

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
