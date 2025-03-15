import React from 'react';
import { Box, Container, Flex, Group, Stack, Text, Title } from '@mantine/core';
import { Link } from 'react-router-dom';
import SocialIcons from '@/components/UI/SocialIcons/SocialIcons';

const navigationLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
  { to: '/support', label: 'Support' },
];

const Footer = () => (
  <Box
    component="footer"
    className="text-white py-1.5 px-2 mt-3 md:mt-3.5"
    bg="dark.7"
  >
    <Container size="xl">
      <Flex gap="xl" wrap="wrap" justify="space-between" align="center">
        <Stack gap="xs">
          <Title order={3}>Stay Connected</Title>
          <Text c="dimmed">Follow us and stay updated!</Text>
          <SocialIcons />
        </Stack>
        <Group gap="xl">
          {navigationLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </Group>
      </Flex>
    </Container>
  </Box>
);

export default Footer;
