import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import AccountIcon from '@/assets/icon/navbar/account.svg';
import CartIcon from '@/assets/icon/navbar/cart.svg';
import HamburgerIcon from '@/assets/icon/navbar/hamburger.svg';
import CloseIcon from '@/assets/icon/navbar/x.svg';
import classes from './Navbar.module.scss';
import NavigationLinks from '@/components/UI/NavigationLinks/NavigationLinks';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const cartProducts = useAppSelector((state) => state.cart.cartProducts);

  const cartQuantity = cartProducts.reduce(
    (total, product) => total + product.quantity,
    0,
  );

  const navigate = useNavigate();

  const hamburgerHandler = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <nav className={classes.navWrapper}>
      <div className={classes.heading}>
        <div className={classes.headingLeftContainer}>
          <h1>
            <Link to={'/'}>SmartHub</Link>
          </h1>
          <NavigationLinks className={classes.desktopMenu} />
        </div>
        <div className={classes.controls}>
          <img
            src={CartIcon}
            onClick={() => navigate('/cart')}
            alt="An icon to go to the basket"
          />
          {cartQuantity != 0 ? <p>{cartQuantity}</p> : ''}
          <img
            src={AccountIcon}
            onClick={() => navigate('/account')}
            alt="An icon to go to the account/auth page"
          />
          <div className={classes.hamburgerIconContainer}>
            {isActive ? (
              <img
                src={CloseIcon}
                onClick={hamburgerHandler}
                alt="An icon to close the hamburger"
              />
            ) : (
              <img
                src={HamburgerIcon}
                onClick={hamburgerHandler}
                alt="An icon to open the hamburger"
              />
            )}
          </div>
        </div>
      </div>
      <NavigationLinks
        className={`${classes.mobileMenu} ${isActive ? classes.active : ''}`}
      />
    </nav>
  );
};

export default Navbar;
