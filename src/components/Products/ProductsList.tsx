import React from 'react';
import Product from './Product';
import classes from './ProductsList.module.scss';
import { useNavigate } from 'react-router-dom';
import { IShowcaseProduct } from '@/interfaces';

interface ProductListProps {
  products: IShowcaseProduct[];
}

const ProductsList = ({ products }: ProductListProps) => {
  const navigate = useNavigate();

  return (
    <ul className={classes.products}>
      {products.map((product) => (
        <Product
          onClick={() => navigate(`/shop/${product.id}`)}
          key={product.id}
          id={product.id}
          img={product.img}
          name={product.name}
          price={product.price}
          company={product.company}
          colors={product.colors}
        />
      ))}
    </ul>
  );
};

export default ProductsList;
