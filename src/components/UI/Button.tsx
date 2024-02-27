import React from 'react';
import classes from './Button.module.scss';

const Button = ({ className, type, onClick, disabled, children }) => {
  return (
    <button
      className={`${classes.button} ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
