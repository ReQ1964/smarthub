import React from 'react';
import { Title, Text, List, Box, Stack, Flex } from '@mantine/core';
import book from '@/assets/img/home-features/book.webp';
import contract from '@/assets/img/home-features/contract.webp';
import growth from '@/assets/img/home-features/growth.webp';

const Features = () => {
  return (
    <Box
      component="section"
      className="flex flex-col items-center gap-3 p-2 md:p-3 text-center"
    >
      <Stack gap="xs">
        <h2 className="text-2xl font-bold uppercase">Top-Notch Services</h2>
        <p className="text-gray-600">
          Experience excellence with our unbeatable services!
        </p>
      </Stack>
      <List className="flex flex-col gap-2 md:flex-row md:gap-8">
        <List.Item className="md:w-1/3">
          <Flex
            gap="xs"
            justify="center"
            align="center"
            direction="column"
            wrap="wrap"
          >
            <Box className="p-2 bg-blue-100 rounded-full">
              <img
                src={book}
                alt="Support Icon: Open book symbolizing constant assistance"
                className="w-4 h-4 object-contain"
              />
            </Box>
            <Title order={3}>24/7 Constant Support</Title>
            <Text c="dimmed">
              Enjoy peace of mind with our round-the-clock technical support!
            </Text>
          </Flex>
        </List.Item>
        <List.Item className="md:w-1/3">
          <Flex
            gap="xs"
            justify="center"
            align="center"
            direction="column"
            wrap="wrap"
          >
            <Box className="p-2 bg-green-100 rounded-full">
              <img
                src={contract}
                alt="Contract Icon: Newspaper representing clear agreements"
                className="w-4 h-4 object-contain"
              />
            </Box>
            <Title order={3}>Transparent Agreements</Title>
            <Text c="dimmed">
              Trust in our clear and straightforward contracts!
            </Text>
          </Flex>
        </List.Item>
        <List.Item className="md:w-1/3">
          <Flex
            gap="xs"
            justify="center"
            align="center"
            direction="column"
            wrap="wrap"
          >
            <Box className="p-2 bg-purple-100 rounded-full">
              <img
                src={growth}
                alt="Growth Icon: Arrow pointing upwards for rapid development"
                className="w-4 h-4 object-contain"
              />
            </Box>
            <Title order={3}>Rapid Innovation</Title>
            <Text c="dimmed">
              Stay ahead with our fast-paced development and growth!
            </Text>
          </Flex>
        </List.Item>
      </List>
    </Box>
  );
};

export default Features;
