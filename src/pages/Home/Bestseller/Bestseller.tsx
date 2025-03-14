import React from 'react';
import {
  Button,
  Loader,
  Title,
  Paper,
  Group,
  Text,
  Center,
  Alert,
  Box,
  Stack,
  Flex,
  Container,
} from '@mantine/core';
import {
  IconAlertCircle,
  IconShoppingCart,
  IconRefreshAlert,
} from '@tabler/icons-react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ProductsList from '@/components/Products/ProductsList/ProductsList';
import { IDetailedProduct } from '@/interfaces';

const LoadingState = () => (
  <Box component="section" className="h-24">
    <Center className="h-full flex-col">
      <Loader size="lg" variant="dots" />
      <Text mt="md" c="dimmed" size="sm">
        Loading bestseller products...
      </Text>
    </Center>
  </Box>
);

const ErrorState = ({ message, refetch }) => (
  <Alert
    icon={<IconAlertCircle size={24} />}
    title="Failed to load products"
    color="red"
    variant="light"
    radius="md"
    className="shadow-sm h-12 max-w-20 mx-auto"
  >
    <Text>
      {message || 'Products failed to fetch. Please try again later.'}
    </Text>
    <Button
      onClick={refetch}
      color="red"
      variant="outline"
      leftSection={<IconRefreshAlert size={18} />}
      className="mx-auto"
    >
      Try Again
    </Button>
  </Alert>
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
    retry: false,
    refetchOnWindowFocus: false,
  });

  return (
    <Container size="xxl" className="p-2 md:p-3">
      <Stack gap="xs" className="mb-4">
        <Title order={4} className="text-gray-600 font-light text-center">
          Featured Products
        </Title>
        <Title order={3} className="uppercase text-center font-bold">
          Bestseller Products
        </Title>
      </Stack>

      {error ? (
        <ErrorState message={error.message} refetch={refetch} />
      ) : !products || products.length === 0 ? (
        <ErrorState
          message="No bestseller products available at the moment."
          refetch={refetch}
        />
      ) : (
        <>
          <ProductsList products={products.slice(0, 3)} isPending={false} />
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
