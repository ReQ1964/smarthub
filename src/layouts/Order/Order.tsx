import React from 'react';
import Breadcrumbs from '@/layouts/Order/Breadcrumbs/Breadcrumbs';
import OrderDetails from './OrderDetails/OrderDetails';
import classes from './Order.module.scss';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useScrollToTop from '@/hooks/useScrollToTop';

const Order = () => {
  useScrollToTop();
  return (
    <>
      <OrderDetails />
      <h2 className={classes.heading}>
        <Link to={'/'}>SmartHub</Link>
      </h2>
      <Breadcrumbs />
      <Outlet />
    </>
  );
};

export default Order;
