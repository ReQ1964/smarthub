import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import Item from './Item/Item';
import Description from './Description/Description';
import SimilarProducts from './SimilarProducts/SimilarProducts';
import Error from '@/components/Error/Error';

export const SingleProductPage = () => {
  const { productId } = useParams();
  const products = useAppSelector((state) => state.products.products);
  const product = products.find((product) => product.id === productId);

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
