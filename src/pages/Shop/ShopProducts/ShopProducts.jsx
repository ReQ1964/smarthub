import React from 'react';
import classes from './ShopProducts.module.scss';
import Products from '../../../components/Products/Products';

const ShopProducts = (props) => {
  return (
    <section className={classes.shop_products} id="shop_products">
      <Products products={props.products} />
    </section>
  );
};

export default ShopProducts;
