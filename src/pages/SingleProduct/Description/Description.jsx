import classes from './Description.module.scss';

import Specification from './Specification/Specification';
import Reviews from './Reviews/Reviews';
import { useState } from 'react';

const Description = () => {
  const [category, setCategory] = useState('spec');

  const showSpec = () => {
    setCategory('spec');
  };

  const showReviews = () => {
    setCategory('rev');
  };

  return (
    <section>
      <div className={classes.controls}>
        <button
          className={`${classes.button} ${category == 'spec' ? classes.active : ''}`}
          onClick={showSpec}
        >
          Specification
        </button>
        <button
          className={`${classes.button} ${category == 'rev' ? classes.active : ''}`}
          onClick={showReviews}
        >
          Reviews
        </button>
      </div>
      {category == 'spec' && <Specification />}
      {category == 'rev' && <Reviews />}
    </section>
  );
};

export default Description;
