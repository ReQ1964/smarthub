import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Hero.module.scss';
import Button from '@/components/UI/Button/Button';
import Carousel from '@/assets/icon/carousel.svg';

interface CarouselItem {
  header: string;
  description: string;
}

const Hero = () => {
  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const carouselData: CarouselItem[] = [
    {
      header: 'black friday',
      description: 'Check out our sales!',
    },
    {
      header: 'newest devices',
      description: 'Shipped straight from the producer!',
    },
    {
      header: '20% off',
      description: 'Last models up for grabs!',
    },
  ];
  const length: number = carouselData.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  return (
    <section className={classes.hero}>
      <div className={classes.carousel}>
        {carouselData.map((item: CarouselItem, index: number) => {
          return (
            <div
              key={index}
              className={
                index === currentSlide
                  ? `${classes.slide} ${classes.active}`
                  : classes.slide
              }
            >
              {index === currentSlide && (
                <>
                  <h1>{item.header}</h1>
                  <p>{item.description}</p>
                </>
              )}
            </div>
          );
        })}
      </div>
      <Button onClick={() => navigate('/shop')}>Shop Now</Button>

      <div className={classes.carouselContainerLeft} onClick={prevSlide}>
        <img
          src={Carousel}
          alt="An icon to display the previous carousel slide"
          className={classes.carouselLeft}
        />
      </div>
      <div className={classes.carouselContainerRight} onClick={nextSlide}>
        <img
          src={Carousel}
          alt="An icon to display the next carousel slide"
          className={classes.carouselRight}
        />
      </div>
    </section>
  );
};

export default Hero;
