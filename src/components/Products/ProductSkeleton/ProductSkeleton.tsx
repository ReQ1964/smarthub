import React from 'react';
import { Card, Group, Skeleton, Stack } from '@mantine/core';

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

export default ProductSkeleton;
