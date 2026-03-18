import React from 'react';
import classes from './Partnership.module.scss';
import Button from '@/components/UI/Button/Button';
import { useNavigate } from 'react-router-dom';

const Partnership = () => {
  const navigate = useNavigate();

  return (
    <section className={classes.partnership}>
      <div>
        <h3>Work with us</h3>
        <h1>Let&apos;s grow together</h1>
        <p>
          As part of our team, you&apos;ll play a pivotal role in managing our
          product portfolio, ensuring seamless customer experiences, and driving
          sales growth. Whether you&apos;re a tech enthusiast, a marketing whiz,
          or a customer service superstar, there&apos;s a place for you here to
          make a real impact.
        </p>
        <Button className={classes.btn} onClick={() => navigate('/contact')}>
          Contact us
        </Button>
      </div>
    </section>
  );
};

export default Partnership;
