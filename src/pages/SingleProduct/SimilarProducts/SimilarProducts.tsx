import React from 'react';
import classes from './SimilarProducts.module.scss';
import { useAppSelector } from '@/store/hooks';
import ProductsList from '@/components/Products/ProductsList';
import { IDetailedProduct } from '@/interfaces';

interface SimilarProducsProps {
  productType: IDetailedProduct['type'];
  productId: IDetailedProduct['id'];
}

const SimilarProducts = ({ productType, productId }: SimilarProducsProps) => {
  const products = useAppSelector((state) => state.products.products);
  const filteredProducts = products
    .filter(
      (product) => product.type === productType && product.id != productId,
    )
    .slice(0, 2);

  return (
    <section className={classes.similar}>
      <h1>SIMILAR PRODUCTS</h1>
      <ProductsList products={filteredProducts} />
    </section>
  );
};

export default SimilarProducts;
