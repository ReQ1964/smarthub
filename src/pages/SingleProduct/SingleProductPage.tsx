import React from 'react';
import Item from './Item/Item';
import Description from './Description/Description';
import SimilarProducts from './SimilarProducts/SimilarProducts';
import Error from '@/components/Error/Error';
import { useLoaderData } from 'react-router-dom';
import { IDetailedProduct } from '@/interfaces';

export const SingleProductPage = () => {
  const product = useLoaderData() as IDetailedProduct;

  if (!product) {
    return <Error>Product not found!</Error>;
  }

  return (
    <main>
      <Item product={product} />
      <Description />
      <SimilarProducts productType={product.type} productId={product.id} />
    </main>
  );
};

export default SingleProductPage;
