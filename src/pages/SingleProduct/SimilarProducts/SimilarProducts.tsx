import React, { useState, useEffect } from 'react';
import classes from './SimilarProducts.module.scss';
import ProductsList from '@/components/Products/ProductsList/ProductsList';
import { IDetailedProduct } from '@/interfaces';
import { AllProductsLoader } from '@/loaders/productsLoaders';
import Error from '@/components/UI/Error/Error';
import { useWindowSize } from '@uidotdev/usehooks';

interface SimilarProducsProps {
  productType: IDetailedProduct['type'];
  productId: IDetailedProduct['id'];
}

const SimilarProducts = ({ productType, productId }: SimilarProducsProps) => {
  const size = useWindowSize();
  const [products, setProducts] = useState<IDetailedProduct[]>([]);
  const itemsShown = (): number => {
    const width = size.width as number;
    if (width < 1024) return 2;
    else if (width <= 1280) return 3;
    else return 4;
  };

  useEffect(() => {
    AllProductsLoader().then((res) => setProducts(res as IDetailedProduct[]));
  }, []);

  const filteredProducts = products
    ? products
        .filter(
          (product) => product.type === productType && product.id != productId,
        )
        .slice(0, itemsShown())
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
