import React from 'react';
import { Box, Flex, Rating, Stack, Text, Title, Image } from '@mantine/core';
import user from '@/assets/img/home-review/user.webp';

const Review = () => {
  return (
    <Flex
      gap="lg"
      justify="center"
      align="center"
      direction="column"
      component="section"
      className="text-white text-center p-2 py-3 h-[60vh] my-3 bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.8)),url('@/assets/img/home-review/bg.webp')] bg-no-repeat bg-cover bg-center md:bg-top shadow-lg"
    >
      <Title order={2} tt="uppercase" mb="xl">
        Customer Reviews
      </Title>
      <Stack align="center">
        <Box className="rounded-full overflow-hidden border-4 border-white">
          <Image src={user} alt="Reviewer's profile" />
        </Box>
        <Rating value={5} readOnly />
      </Stack>
      <Text fs="italic" className="w-full sm:w-2/3 md:w-1/2">
        &#34;SmartHub has revolutionized the way I choose my tech gadgets! The
        recommendations are always spot-on, and the user interface is incredibly
        intuitive. Highly recommend it to anyone looking for top-notch
        devices!&#34;
      </Text>
      <Text>Romuald Reynolds</Text>
    </Flex>
  );
};

export default Review;
