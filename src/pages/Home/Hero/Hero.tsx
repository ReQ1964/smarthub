import React, { useCallback, useEffect, useState } from 'react';
import { Box, Button, Container } from '@mantine/core';
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
    <Container
      size="100%"
      className="relative flex flex-col justify-center items-center h-[60vh] gap-2 bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url('@/assets/img/home-hero/hero-girl.jpg')] bg-no-repeat bg-center bg-cover p-12"
      aria-label="Promotional carousel"
    >
      <Box aria-roledescription="carousel">
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
                  <h1 className="uppercase text-4xl">{item.header}</h1>
                  <p className="leading-2">{item.description}</p>
                </>
              )}
            </motion.div>
          );
        })}
      </Box>

      <Button variant="filled" size="lg" onClick={() => navigate('/shop')}>
        Shop now
      </Button>
      <Box
        className="absolute left-0 flex justify-center items-center h-full w-1/4 cursor-pointer hover:scale-105 transition-transform duration-200"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <img
          src={Carousel}
          alt="An icon to display the previous carousel slide"
          className="transform scale-x-[-1] filter invert"
        />
      </Box>
      <Box
        className="absolute right-0 flex justify-center items-center h-full w-1/4 cursor-pointer hover:scale-105 transition-transform duration-200"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <img
          src={Carousel}
          alt="An icon to display the next carousel slide"
          className="filter invert"
        />
      </Box>
    </Container>
  );
};

export default Hero;
