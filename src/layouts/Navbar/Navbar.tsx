import React from 'react';
import { Box, Burger, Drawer, Flex, Transition } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { ShoppingCart, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import NavigationLinks from '@/layouts/NavigationLinks';
import useCartStore from '@/store/cartStore';

const Navbar = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const totalQuantity = useCartStore((state) => state.totalQuantity);
  const navigate = useNavigate();

  const childVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 p-1.5 z-50 bg-white/95 backdrop-blur-sm shadow-md"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Flex gap="lg" justify="space-between" direction="row">
        {/* Logo and Desktop Navigation */}
        <Flex gap="xl" justify="between" align="center" direction="row">
          <motion.h1
            variants={childVariants}
            className="text-3xl font-bold tracking-tight transition-transform duration-200 hover:-translate-y-[3px]"
          >
            <Link to="/" className="text-gray-900 hover:text-primary">
              SmartHub
            </Link>
          </motion.h1>

          <motion.div variants={childVariants}>
            <NavigationLinks className="hidden md:flex items-center gap-2" />
          </motion.div>
        </Flex>

        {/* Right side controls */}
        <Flex gap="md" justify="center" align="center" direction="row">
          {/* Cart Icon */}
          <motion.div variants={childVariants}>
            <Box
              className="relative cursor-pointer transition-transform duration-100 hover:-translate-y-[3px]"
              onClick={() => navigate('/cart')}
              aria-label="Shopping cart"
              tabIndex={0}
            >
              <ShoppingCart className="h-2 w-2 text-gray-700" />
              {totalQuantity > 0 && (
                <Transition
                  mounted={totalQuantity > 0}
                  transition="pop"
                  duration={300}
                >
                  {(styles) => (
                    <span
                      style={styles}
                      className="absolute -top-0.5 -right-0.5 flex h-1 w-1 items-center justify-center rounded-full bg-primary text-xs font-medium text-white"
                    >
                      {totalQuantity}
                    </span>
                  )}
                </Transition>
              )}
            </Box>
          </motion.div>

          {/* Account Icon */}
          <motion.div variants={childVariants}>
            <Box
              className="cursor-pointer transition-transform duration-100 hover:-translate-y-[3px]"
              onClick={() => navigate('/account')}
              aria-label="Account"
              tabIndex={0}
            >
              <User className="h-2 w-2 text-gray-700" />
            </Box>
          </motion.div>

          {/* Mobile Menu Burger */}
          <motion.div variants={childVariants} className="md:hidden">
            <Burger
              opened={opened}
              onClick={toggle}
              size="md"
              color="#333"
              aria-label="Toggle navigation"
              className="transition-all duration-200"
            />
          </motion.div>
        </Flex>
      </Flex>

      {/* Mobile Navigation Drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        title={<h3 className="text-2xl font-semibold text-gray-900">Menu</h3>}
        padding="xl"
        size="xs"
        position="right"
        overlayProps={{ opacity: 0.6, blur: 1 }}
        transitionProps={{
          transition: 'slide-left',
          duration: 200,
        }}
        className="md:hidden"
      >
        <NavigationLinks
          className="flex flex-col gap-0.5"
          isMobile={true}
          onLinkClick={close}
        />
      </Drawer>
    </motion.nav>
  );
};

export default Navbar;
