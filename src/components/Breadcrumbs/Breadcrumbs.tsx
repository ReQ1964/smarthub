import React from 'react';
import classes from './Breadcrumbs.module.scss';
import { NavLink, Link } from 'react-router-dom';
import arrow from '../../assets/icon/carousel.svg';
import { useAppSelector } from '@/store/hooks';
import { useState } from 'react';
import Modal from '../UI/Modal/Modal';

const Breadcrumbs = () => {
  const orderDetails = useAppSelector((state) => state.order);
  const [isOpen, setIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const isOrderEmptyHandler = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    const isOrderEmpty = Object.keys(orderDetails.details).length === 0;
    const isShippingMethodEmpty = !orderDetails?.shippingMethod;

    if (isOrderEmpty || isShippingMethodEmpty) {
      e.preventDefault();
      setModalMessage(
        'Please, fill out everything and click the button at the bottom to proceed.',
      );
      setIsOpen(true);
    }
  };

  return (
    <nav className={classes.breadcrumbs}>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        defaultButton={true}
      >
        <h3>{modalMessage}</h3>
      </Modal>
      <div className={classes.links}>
        <ul>
          <li>
            <Link to={'/cart'} className={classes.cart_link}>
              Cart
            </Link>
          </li>
          <img src={arrow} alt="" />
          <li>
            <NavLink
              to={'/order/details'}
              className={({ isActive }) => (isActive ? classes.active : '')}
            >
              Details
            </NavLink>
          </li>
          <img src={arrow} alt="" />
          <li>
            <NavLink
              to={'/order/shipping'}
              className={({ isActive }) => (isActive ? classes.active : '')}
              onClick={isOrderEmptyHandler}
            >
              Shipping
            </NavLink>
          </li>
          <img src={arrow} alt="" />
          <li>
            <NavLink
              to={'/order/payment'}
              className={({ isActive }) => (isActive ? classes.active : '')}
              onClick={isOrderEmptyHandler}
            >
              Payment
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
