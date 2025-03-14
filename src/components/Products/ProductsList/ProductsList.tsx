import React from 'react';
import {
  Box,
  SimpleGrid,
  Card,
  Skeleton,
  Stack,
  Group,
  Container,
} from '@mantine/core';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { IShowcaseProduct } from '@/interfaces';
import Product from '../Product/Product';

interface IProductListProps {
  products: IShowcaseProduct[];
  isPending: boolean;
}

const ProductSkeleton = () => {
  return (
    <Card shadow="sm" padding="lg" radius="md" className="w-[300px]">
      <Card.Section>
        <Skeleton height={200} radius={0} />
      </Card.Section>

      <Stack mt="md" gap="xs">
        <Group mt="md" mb="xs">
          <Skeleton height={20} width="70%" radius="sm" />
          <Skeleton height={20} width="25%" radius="sm" />
        </Group>

        <Skeleton height={16} width="40%" radius="sm" />

        <Group mt="md" gap="xs">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} height={24} width={24} radius="xl" />
          ))}
        </Group>
      </Stack>
    </Card>
  );
};

const ProductsList = ({ products, isPending }: IProductListProps) => {
  const navigate = useNavigate();

  const skeletonCount = products?.length || 3;

  return (
    <Container>
      <SimpleGrid
        cols={{ base: 1, md: 2, lg: 3 }}
        spacing="xl"
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
                <Product
                  onClick={() => navigate(`/products/${product.id}`)}
                  id={product.id}
                  img={product.img}
                  name={product.name}
                  price={product.price}
                  company={product.company}
                  colors={product.colors}
                />
              </motion.div>
            ))}
      </SimpleGrid>
    </Container>
  );
};

export default ProductsList;
