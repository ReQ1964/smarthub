import React, { ReactNode } from 'react';
import classes from './Button.module.scss';

interface ButtonProps {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode | string;
}
const Button = ({
  className,
  type,
  onClick,
  disabled,
  children,
}: ButtonProps) => {
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
