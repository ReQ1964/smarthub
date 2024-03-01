import React from 'react';
import classes from './Footer.module.scss';
import SocialIcons from '@/components/UI/SocialIcons/SocialIcons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className={classes.socials}>
        <h2>get in touch</h2>
        <p>Let&apos;s work together!</p>
        <SocialIcons />
      </div>
      <div className={classes.rightContainer}>
        <div className={classes.info}>
          <h2>company info</h2>
          <ul>
            <li>
              <Link to={'/about'}>About Us</Link>
            </li>
            <li>
              <Link to={'/about'}>Carrier</Link>
            </li>
            <li>
              <Link to={'/about'}>We are hiring</Link>
            </li>
            <li></li>
          </ul>
        </div>
        <div className={classes.features}>
          <h2>features</h2>
          <ul>
            <li>
              <a href="#">User Analytic</a>
            </li>
            <li>
              <a href="#">Unlimited Support</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
