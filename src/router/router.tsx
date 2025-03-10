import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Order from '@/layouts/Order/Order';
import {
  AllProductsLoader,
  SingleProductLoader,
} from '@/loaders/productsLoaders';
import AboutPage from '@/pages/About/AboutPage';
import AccountPage from '@/pages/Account/AccountPage';
import CartPage from '@/pages/Cart/CartPage';
import ContactPage from '@/pages/Contact/ContactPage';
import DetailsPage from '@/pages/Details/DetailsPage';
import HomePage from '@/pages/Home/HomePage';
import PaymentPage from '@/pages/Payment/PaymentPage';
import ShippingPage from '@/pages/Shipping/ShippingPage';
import ShopPage from '@/pages/Shop/ShopPage';
import SingleProductPage from '@/pages/SingleProduct/SingleProductPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: AllProductsLoader,
      },
      {
        path: '/products',
        element: <ShopPage />,
        loader: AllProductsLoader,
      },
      {
        path: '/shop/:productId',
        element: <SingleProductPage />,
        loader: SingleProductLoader,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/account',
        element: <AccountPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
    ],
  },
  {
    path: '/order',
    element: <Order />,
    children: [
      {
        path: '/order/details',
        element: <DetailsPage />,
      },
      { path: '/order/shipping', element: <ShippingPage /> },
      {
        path: '/order/payment',
        element: <PaymentPage />,
      },
    ],
  },
]);

export default router;
