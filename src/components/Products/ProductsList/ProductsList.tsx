import React from 'react';
import { Container, SimpleGrid } from '@mantine/core';
import { motion } from 'framer-motion';
import ProductSkeleton from '@/components/Products/ProductSkeleton/ProductSkeleton';
import { IShowcaseProduct } from '@/interfaces';
import Product from '../Product/Product';

interface IProductListProps {
  products: IShowcaseProduct[];
  isPending: boolean;
}

const ProductsList = ({ products, isPending }: IProductListProps) => {
  const skeletonCount = products?.length || 3;

  return (
    <Container>
      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing="xl"
        verticalSpacing="xl"
        className="justify-items-center"
      >
        {isPending
          ? Array.from({ length: skeletonCount }).map((_, index) => (
              <ProductSkeleton key={`skeleton-${index}`} />
            ))
          : products.map((product) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                key={product.id}
                className="flex justify-center"
              >
                <Product product={product} />
              </motion.div>
            ))}
      </SimpleGrid>
    </Container>
  );
};

export default ProductsList;
