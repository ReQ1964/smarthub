import React from 'react';
import Bestseller from './Bestseller/Bestseller';
import Categories from './Categories/Categories';
import Features from './Features/Features';
import Hero from './Hero/Hero';
import Review from './Review/Review';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Categories />
      <Bestseller />
      <Review />
      <Features />
    </main>
  );
};

export default HomePage;
