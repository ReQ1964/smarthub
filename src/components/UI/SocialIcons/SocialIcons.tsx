import React from 'react';
import classes from './SocialIcons.module.scss';
import facebook from '@/assets/icon/socials/facebook.svg';
import instagram from '@/assets/icon/socials/instagram.svg';
import twitter from '@/assets/icon/socials/twitter.svg';
import { Link } from 'react-router-dom';

const SocialIcons = ({ className }: { className?: string }) => {
  return (
    <div className={`${classes.icons} ${className}`}>
      <Link to={'https://www.facebook.com/'}>
        <img src={facebook} alt="facebook icon" />
      </Link>
      <Link to={'https://www.instagram.com/'}>
        <img src={instagram} alt="instagram icon" id={classes.instagram} />
      </Link>
      <Link to={'https://www.twitter.com/'}>
        <img src={twitter} alt="twitter icon" />
      </Link>
    </div>
  );
};

export default SocialIcons;
