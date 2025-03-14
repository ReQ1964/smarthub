import React from 'react';
import { Title, Text, List, Box, Stack, Flex, Container } from '@mantine/core';
import book from '@/assets/img/home-features/book.webp';
import contract from '@/assets/img/home-features/contract.webp';
import growth from '@/assets/img/home-features/growth.webp';

const featuresData = [
  {
    icon: book,
    alt: 'Support Icon: Open book symbolizing constant assistance',
    title: '24/7 Constant Support',
    description:
      'Enjoy peace of mind with our round-the-clock technical support!',
    bgColor: 'bg-blue-100',
  },
  {
    icon: contract,
    alt: 'Contract Icon: Newspaper representing clear agreements',
    title: 'Transparent Agreements',
    description: 'Trust in our clear and straightforward contracts!',
    bgColor: 'bg-green-100',
  },
  {
    icon: growth,
    alt: 'Growth Icon: Arrow pointing upwards for rapid development',
    title: 'Rapid Innovation',
    description: 'Stay ahead with our fast-paced development and growth!',
    bgColor: 'bg-purple-100',
  },
];

const Features = () => (
  <Box
    component="section"
    className="flex flex-col items-center gap-3 p-2 md:p-3 text-center"
  >
    <Stack gap="xs">
      <Title order={2} className="text-2xl font-bold uppercase">
        Top-Notch Services
      </Title>
      <Text c="dimmed">
        Experience excellence with our unbeatable services!
      </Text>
    </Stack>
    <Container size="lg">
      <List className="flex flex-col gap-2 md:flex-row md:gap-8">
        {featuresData.map((feature, index) => (
          <List.Item key={index} className="md:w-1/3">
            <Flex
              gap="xs"
              justify="center"
              align="center"
              direction="column"
              wrap="wrap"
            >
              <Box className={`p-2 ${feature.bgColor} rounded-full`}>
                <img
                  src={feature.icon}
                  alt={feature.alt}
                  className="w-4 h-4 object-contain"
                />
              </Box>
              <Title order={3}>{feature.title}</Title>
              <Text c="dimmed">{feature.description}</Text>
            </Flex>
          </List.Item>
        ))}
      </List>
    </Container>
  </Box>
);

export default Features;
