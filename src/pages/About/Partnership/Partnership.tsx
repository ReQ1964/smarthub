import React from 'react';
import classes from './Partnership.module.scss';
import Button from '@/components/UI/Button';
import { useNavigate } from 'react-router-dom';

const Partnership = () => {
  const navigate = useNavigate();

  return (
    <section className={classes.partnership}>
      <h3>Work with us</h3>
      <h1>Let&apos;s grow together</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
        perspiciatis eveniet excepturi reprehenderit similique dolorem! Non
        corporis veritatis quas, consectetur ut praesentium nihil earum
        reprehenderit doloremque similique pariatur. Ad, pariatur!
      </p>
      <Button className={classes.btn} onClick={() => navigate('/contact')}>
        Contact us
      </Button>
    </section>
  );
};

export default Partnership;
