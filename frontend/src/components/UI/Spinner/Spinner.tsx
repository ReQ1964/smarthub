import React from 'react';
import classes from './Spinner.module.scss';

const Spinner = ({ className }: { className?: string }) => {
  return (
    <div className={`${classes.spinner} ${className}`}>
      <span className={`${classes.loader} ${className}`}></span>
    </div>
  );
};

export default Spinner;
