import React from 'react';
import Product from './Product';
import classes from './Products.module.scss';
import { useNavigate } from 'react-router-dom';

const Products = (props) => {
  const navigate = useNavigate();
  return (
    <ul className={classes.products}>
      {props.products.map((product) => (
        <Product
          onClick={() => navigate(`/shop/${product.id}`)}
          key={product.id}
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

export default Products;
