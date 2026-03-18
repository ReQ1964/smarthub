import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationLinks.module.scss';

interface INavigationLinksProps {
  className?: string;
}

const NavigationLinks = ({ className }: INavigationLinksProps) => {
  return (
    <ul className={`${classes.links} ${className}`}>
      <li>
        <NavLink
          to={'/'}
          className={({ isActive }) => (isActive ? classes.active : '')}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/shop'}
          className={({ isActive }) => (isActive ? classes.active : '')}
        >
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/about'}
          className={({ isActive }) => (isActive ? classes.active : '')}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/contact'}
          className={({ isActive }) => (isActive ? classes.active : '')}
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default NavigationLinks;
