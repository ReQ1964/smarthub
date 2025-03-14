import React, { useMemo } from 'react';
import { Button, Center, Container, Stack, Title } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ProductsList from '@/components/Products/ProductsList/ProductsList';
import ErrorAlert from '@/components/UI/ErrorAlert/ErrorAlert';
import { IDetailedProduct } from '@/interfaces';

const BestsellerTitle = () => (
  <Stack gap="xs" className="mb-4">
    <Title order={4} className="text-gray-600 font-light text-center">
      Featured Products
    </Title>
    <Title order={3} className="uppercase text-center font-bold">
      Bestseller Products
    </Title>
  </Stack>
);

const Bestseller = () => {
  const navigate = useNavigate();

  const {
    isPending,
    error,
    data: products,
    refetch,
  } = useQuery({
    queryKey: ['bestsellers'],
    queryFn: async (): Promise<IDetailedProduct[]> => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/products.json`,
      );
      return Object.values(res.data);
    },
    retry: 1,
  });

  const ERROR_ALERT_PROPS = useMemo(
    () => ({
      title: 'Failed to load products',
      refetch: refetch,
    }),
    [refetch],
  );

  return (
    <Container size="xxl" className="p-2 md:p-3">
      <BestsellerTitle />

      {error ? (
        <ErrorAlert {...ERROR_ALERT_PROPS} message={error.message} />
      ) : !products || products.length === 0 ? (
        <ErrorAlert
          {...ERROR_ALERT_PROPS}
          message="No bestseller products available at the moment."
        />
      ) : (
        <>
          <ProductsList products={products.slice(0, 3)} isPending={isPending} />
          <Center mt="xl">
            <Button
              variant="filled"
              size="lg"
              className="duration-200"
              onClick={() => navigate('/products')}
            >
              Browse More
            </Button>
          </Center>
        </>
      )}
    </Container>
  );
};

export default Bestseller;
