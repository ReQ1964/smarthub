import React from 'react';
import classes from './ContactMethods.module.scss';
import SocialIcons from '@/components/UI/SocialIcons/SocialIcons';

const ContactMethods = () => {
  return (
    <section className={classes.methods}>
      <h3>Contact us</h3>
      <h1>Get in touch today!</h1>
      <p>Need some support or want to ask some questions?</p>
      <h4>Phone: +48 451 251 322</h4>
      <SocialIcons className={classes.socialIcons} />
    </section>
  );
};

export default ContactMethods;
