import React from 'react';
import { Link } from 'react-scroll';
import classes from './Categories.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setFilteredProducts } from '@/store/shop-products-slice';

const Categories = () => {
  const dispatch = useAppDispatch();
  const productType = useAppSelector(
    (state) => state.products.currentProductType,
  );

  return (
    <section className={classes.categories}>
      <Link
        to="sorting"
        spy={true}
        smooth={true}
        duration={250}
        className={
          productType === 'all'
            ? `${classes.category} ${classes.active}`
            : classes.category
        }
        onClick={() => dispatch(setFilteredProducts('all'))}
      >
        <h2>All Devices</h2>
      </Link>
      <Link
        to="sorting"
        spy={true}
        smooth={true}
        duration={250}
        className={
          productType === 'phone'
            ? `${classes.category} ${classes.active}`
            : classes.category
        }
        onClick={() => dispatch(setFilteredProducts('phone'))}
      >
        <h2>Phones</h2>
      </Link>
      <Link
        to="sorting"
        spy={true}
        smooth={true}
        duration={250}
        className={
          productType === 'watch'
            ? `${classes.category} ${classes.active}`
            : classes.category
        }
        onClick={() => dispatch(setFilteredProducts('watch'))}
      >
        <h2>Watches</h2>
      </Link>
    </section>
  );
};

export default Categories;
