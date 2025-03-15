import React from 'react';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Modal from '@/components/UI/Modal/Modal';
import { useAppSelector } from '@/store/hooks';
import classes from './Breadcrumbs.module.scss';

const Breadcrumbs = () => {
  const orderDetails = useAppSelector((state) => state.order);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>('');

  const isOrderEmptyHandler = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    console.log(orderDetails);
    const isOrderEmpty = orderDetails.details.name === '';
    const isShippingMethodEmpty = !orderDetails?.shippingMethod;

    if (isShippingMethodEmpty || isOrderEmpty) {
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
          <li>
            <NavLink
              to={'/order/details'}
              className={({ isActive }) => (isActive ? classes.active : '')}
            >
              Details
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/order/shipping'}
              className={({ isActive }) => (isActive ? classes.active : '')}
              onClick={isOrderEmptyHandler}
            >
              Shipping
            </NavLink>
          </li>
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
