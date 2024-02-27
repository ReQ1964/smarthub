import React from 'react';
import classes from './ShopProducts.module.scss';
import ProductsList from '../../../components/Products/ProductsList';
import { IShowcaseProduct } from '@/interfaces';

interface ShopProductsProps {
  products: IShowcaseProduct[];
}

const ShopProducts = ({ products }: ShopProductsProps) => {
  return (
    <section className={classes.shop_products} id="shop_products">
      <ProductsList products={products} />
    </section>
  );
};

export default ShopProducts;
