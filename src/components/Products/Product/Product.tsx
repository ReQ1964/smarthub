import React from 'react';
import { Card, Text, Group, Stack, Box } from '@mantine/core';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import type { IShowcaseProduct } from '@/interfaces';

interface IProductProps {
  product: IShowcaseProduct;
}

const Product = ({
  product: { id, name, company, price, colors, img },
}: IProductProps) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/products/${id}`);
  };

  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card
        padding="lg"
        radius="md"
        className="w-[300px] cursor-pointer shadow-lg"
        onClick={handleProductClick}
      >
        <Card.Section>
          <motion.div
            whileHover={{ y: -5 }}
            transition={{
              duration: 0.2,
              yoyo: Infinity,
              repeatDelay: 0.5,
            }}
          >
            <img src={Object.values(img)[0]} alt={name} className="p-2 " />
          </motion.div>
        </Card.Section>

        <Stack mt="md" gap="xs">
          <Text size="lg" fw={500}>
            {name}
          </Text>

          <Text c="green" fw={700} size="md">
            ${price}
          </Text>

          <Text c="dimmed" size="sm">
            {company}
          </Text>

          <Group mt="md" gap="xs">
            {colors.map((color) => (
              <Box
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </Group>
        </Stack>
      </Card>
    </motion.div>
  );
};

export default Product;
