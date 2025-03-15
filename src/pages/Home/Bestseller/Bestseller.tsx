import React, { useMemo } from 'react';
import { Box, Button, Center, Stack, Text, Title } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ProductsList from '@/components/Products/ProductsList/ProductsList';
import ErrorAlert from '@/components/UI/ErrorAlert/ErrorAlert';
import { IDetailedProduct } from '@/interfaces';

const BestsellerTitle = () => (
  <Stack gap="xs" className="mb-2 text-center">
    <Text c="dimmed">Featured Products</Text>
    <Title order={2} className="uppercase font-bold">
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
  });

  const ERROR_ALERT_PROPS = useMemo(
    () => ({
      title: 'Failed to load products',
      refetch: refetch,
    }),
    [refetch],
  );

  return (
    <Box component="section" className="p-2 py-3 md:p-3.5">
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
          <ProductsList products={products.slice(0, 4)} isPending={isPending} />
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
    </Box>
  );
};

export default Bestseller;
