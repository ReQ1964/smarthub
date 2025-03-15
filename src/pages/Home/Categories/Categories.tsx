import React from 'react';
import { Text, Title, Flex } from '@mantine/core';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import phone from '@/assets/img/home-categories/phone.webp';
import smartwatch from '@/assets/img/home-categories/smartwatch.webp';

interface ICategoryCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageStyles: string;
  bgGradient: string;
  textColor: string;
  isLimited?: boolean;
}

const CategoryCard = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  imageStyles,
  bgGradient,
  textColor,
  isLimited = false,
}: ICategoryCardProps) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.02,
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        type: 'spring',
        stiffness: 100,
      },
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.1,
        yoyo: Infinity,
        repeatDelay: 0.5,
      },
    },
  };

  const textColorLimited = isLimited ? '#E77C40' : 'inherit';

  return (
    <motion.div
      className={`relative overflow-hidden p-2 w-full sm:w-[450px] rounded-md shadow-sm ${bgGradient} bg-cover bg-center lg:overflow-visible  
      hover:cursor-pointer`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <Link to={'/products'}>
        <motion.div
          className={`flex flex-col gap-2 max-w-[80%] z-10 relative ${textColor}`}
          variants={textVariants}
        >
          <Text fw="bold" c={textColorLimited}>
            {subtitle}
          </Text>
          <Title order={3}>{title}</Title>
          <Text size="sm" className="w-4/5">
            {description}
          </Text>

          <motion.div className="flex items-center">
            <Text fw="bold">Explore Items</Text>
            <motion.span
              className="ml-0.5"
              variants={{
                hover: { x: 5 },
                visible: { x: 0 },
              }}
            >
              →
            </motion.span>
          </motion.div>
        </motion.div>

        <motion.img
          src={imageSrc}
          className={`absolute ${imageStyles} min-[520px]:right-0 min-[950px]:right-0 z-0 object-contain `}
          alt={imageAlt}
          variants={imageVariants}
          whileHover="hover"
        />
      </Link>
    </motion.div>
  );
};

const Categories = () => {
  return (
    <Flex
      justify="center"
      align="center"
      direction={{ base: 'column', sm: 'row' }}
      wrap="wrap"
      component="section"
      className="gap-4 p-2 py-3 md:p-3.5"
    >
      <CategoryCard
        title="Stylish Look"
        subtitle="Ends Today"
        description="Top Ten Products of the Week"
        imageSrc={smartwatch}
        imageAlt="A smartwatch"
        imageStyles="top-[-2.5%] min-[467px]:top-[-9%] h-[300px] right-[-85px]"
        bgGradient="bg-[linear-gradient(to_right_bottom,rgba(245,242,242,0.8),rgba(255,255,255,0.8)),url('/src/assets/img/home-categories/pc-bg.webp')]"
        textColor="text-gray-800"
        isLimited={true}
      />

      <CategoryCard
        title="Modern Life"
        subtitle="Your Space"
        description="Top Ten Products of the Week"
        imageSrc={phone}
        imageAlt="A phone"
        imageStyles="top-[2%] min-[467px]:top-[-2%] h-[280px] right-[-60px]"
        bgGradient="bg-[linear-gradient(to_right_bottom,rgba(2,130,202,0.8),rgba(2,130,202,0.8)),url('/src/assets/img/home-categories/phones-bg.webp')]"
        textColor="text-white"
      />
    </Flex>
  );
};

export default Categories;
