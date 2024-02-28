import React, { useState, useEffect } from 'react';
import classes from './SimilarProducts.module.scss';
import ProductsList from '@/components/Products/ProductsList';
import { IDetailedProduct } from '@/interfaces';
import { AllProductsLoader } from '@/loaders/productsLoaders';
import Error from '@/components/Error/Error';

interface SimilarProducsProps {
  productType: IDetailedProduct['type'];
  productId: IDetailedProduct['id'];
}

const SimilarProducts = ({ productType, productId }: SimilarProducsProps) => {
  const [products, setProducts] = useState<IDetailedProduct[]>([]);

  useEffect(() => {
    AllProductsLoader().then((res) => setProducts(res as IDetailedProduct[]));
  }, []);

  const filteredProducts = products
    ? products
        .filter(
          (product) => product.type === productType && product.id != productId,
        )
        .slice(0, 2)
    : [];

  return (
    <section className={classes.similar}>
      <h1>SIMILAR PRODUCTS</h1>
      {!products ? (
        <Error>Products failed to fetch!</Error>
      ) : (
        <ProductsList products={filteredProducts} />
      )}
    </section>
  );
};

export default SimilarProducts;
