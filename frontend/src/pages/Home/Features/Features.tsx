import React from 'react';
import {
  Title,
  Text,
  List,
  Box,
  Stack,
  Flex,
  Container,
  Image,
} from '@mantine/core';
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
  <Flex
    component="section"
    gap="xl"
    justify="center"
    align="center"
    direction="column"
    className="p-3 md:p-3.5 text-center"
  >
    <Stack gap="xs" mb="md">
      <Title order={2} tt="uppercase">
        Top-Notch Services
      </Title>
      <Text c="dimmed">
        Experience excellence with our unbeatable services!
      </Text>
    </Stack>
    <Container size="lg">
      <List className="flex flex-col gap-4 sm:flex-row md:gap-6">
        {featuresData.map((feature, index) => (
          <List.Item key={index} className="md:w-1/3">
            <Flex
              gap="xs"
              justify="center"
              align="center"
              direction="column"
              wrap="wrap"
            >
              <Box p="xl" className={`${feature.bgColor} rounded-full`}>
                <Image src={feature.icon} alt={feature.alt} w={60} h={60} />
              </Box>
              <Title order={3}>{feature.title}</Title>
              <Text c="dimmed">{feature.description}</Text>
            </Flex>
          </List.Item>
        ))}
      </List>
    </Container>
  </Flex>
);

export default Features;
