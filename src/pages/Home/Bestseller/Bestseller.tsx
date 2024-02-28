import React from 'react';
import classes from './Bestseller.module.scss';
import Button from '@/components/UI/Button';
import ProductsList from '@/components/Products/ProductsList';
import { useNavigate } from 'react-router-dom';
import Error from '@/components/Error/Error';
import { useLoaderData } from 'react-router-dom';
import { IDetailedProduct } from '@/interfaces';

const Bestseller = () => {
  const navigate = useNavigate();
  const products = useLoaderData() as IDetailedProduct[];
  return (
    <section className={classes.bestseller}>
      <h3>Featured Products</h3>
      <h2>Bestseller products</h2>

      {!products ? (
        <Error>Products failed to fetch!</Error>
      ) : (
        <>
          <ProductsList products={products.slice(0, 4)} />
          <Button
            className={classes.btn}
            onClick={() => {
              navigate('/shop');
            }}
          >
            BROWSE MORE
          </Button>
        </>
      )}
    </section>
  );
};

export default Bestseller;
