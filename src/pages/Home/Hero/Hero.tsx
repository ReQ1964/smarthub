import React, { useCallback, useEffect, useState } from 'react';
import { Button, Stack, Text, Title } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface ICarouselItem {
  header: string;
  description: string;
}

const CAROUSEL_DATA: ICarouselItem[] = [
  {
    header: 'Black Friday',
    description: 'Score big deals now!',
  },
  {
    header: 'Fresh Arrivals',
    description: 'Direct from the source!',
  },
  {
    header: '20% Off',
    description: 'Grab last models fast!',
  },
];

const AUTO_ROTATION_INTERVAL = 5000;

const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselLength = CAROUSEL_DATA.length;

  const goToSlide = useCallback(
    (slideIndex: number) => {
      const normalizedIndex =
        ((slideIndex % carouselLength) + carouselLength) % carouselLength;
      setCurrentSlide(normalizedIndex);
    },
    [carouselLength],
  );

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const interval = setInterval(nextSlide, AUTO_ROTATION_INTERVAL);
    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const currentItem = CAROUSEL_DATA[currentSlide];

  return (
    <motion.section
      className="relative flex flex-col justify-center items-center h-[60vh] gap-2 bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url('@/assets/img/home-hero/hero-girl.webp')] bg-no-repeat bg-center bg-cover p-4 md:p-12 mt-5 mb-3 text-center text-white"
      aria-label="Promotional carousel"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        delay: 0.2,
      }}
    >
      <Stack
        justify="space-between"
        align="center"
        h={200}
        aria-roledescription="carousel"
      >
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.05 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="flex flex-col gap-0.5"
        >
          <Title order={1} tt="uppercase">
            {currentItem.header}
          </Title>
          <Text>{currentItem.description}</Text>
        </motion.div>

        <Button
          variant="filled"
          size="lg"
          className="duration-100"
          onClick={() => navigate('/products')}
        >
          Shop now
        </Button>
      </Stack>

      <motion.div
        className="absolute left-0 flex justify-center items-center h-full w-1/4 cursor-pointer"
        onClick={prevSlide}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.1 }}
        aria-label="Previous slide"
      >
        <IconChevronLeft size={60} />
      </motion.div>
      <motion.div
        className="absolute right-0 flex justify-center items-center h-full w-1/4 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.1 }}
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <IconChevronRight size={60} />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
