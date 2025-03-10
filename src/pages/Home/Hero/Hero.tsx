import React, { useCallback, useEffect, useState } from 'react';
import { Box, Button, Container, Flex, Title } from '@mantine/core';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Carousel from '@/assets/icon/carousel.svg';

interface ICarouselItem {
  header: string;
  description: string;
}

const CAROUSEL_DATA: ICarouselItem[] = [
  {
    header: 'Black Friday',
    description: 'Check out our sales!',
  },
  {
    header: 'Newest Devices',
    description: 'Shipped straight from the producer!',
  },
  {
    header: '20% Off',
    description: 'Last models up for grabs!',
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
  }, [nextSlide, currentSlide]);

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

  return (
    <motion.section
      className="relative flex flex-col justify-center items-center h-[65vh] gap-2 bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url('@/assets/img/home-hero/hero-girl.jpg')] bg-no-repeat bg-center bg-cover p-12"
      aria-label="Promotional carousel"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        delay: 0.2,
      }}
    >
      <Box aria-roledescription="carousel" className="w-2/3 mx-auto">
        {CAROUSEL_DATA.map((item: ICarouselItem, index: number) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1 }}
              animate={{
                opacity: index === currentSlide ? 1 : 0,
                scale: index === currentSlide ? 1.05 : 1,
              }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="flex flex-col text-center text-white"
              aria-hidden={index !== currentSlide}
              role="group"
              aria-roledescription="slide"
            >
              {index === currentSlide && (
                <>
                  <Title order={1} className="uppercase">
                    {item.header}
                  </Title>
                  <p className="leading-2">{item.description}</p>
                </>
              )}
            </motion.div>
          );
        })}
      </Box>

      <Button
        variant="filled"
        size="lg"
        className="duration-100"
        onClick={() => navigate('/shop')}
      >
        Shop now
      </Button>
      <motion.div
        className="absolute left-0 flex justify-center items-center h-full w-1/4 cursor-pointer"
        onClick={prevSlide}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.1 }}
        aria-label="Previous slide"
      >
        <img
          src={Carousel}
          alt="An icon to display the previous carousel slide"
          className="transform scale-x-[-1] filter invert"
        />
      </motion.div>
      <motion.div
        className="absolute right-0 flex justify-center items-center h-full w-1/4 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.1 }}
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <img
          src={Carousel}
          alt="An icon to display the next carousel slide"
          className="filter invert"
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
