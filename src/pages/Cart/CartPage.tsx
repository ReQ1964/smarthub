import React, { useState } from 'react';
import classes from './CartPage.module.scss';
import Button from '@/components/UI/Button';
import CartItems from './CartItems/CartItems';
import { useAppSelector } from '@/store/hooks';
import { useNavigate } from 'react-router-dom';
import Modal from '@/components/Modal/Modal';

const CartPage = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>('');
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  const products = useAppSelector((state) => state.cart.products);

  const checkoutHandler = () => {
    if (products.length === 0) {
      setModalMessage("Your cart can't be empty!");
      setIsOpen(true);
      return;
    }
    navigate('/order/details');
  };

  return (
    <main className={classes.cart}>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        defaultButton={true}
      >
        <h3>{modalMessage}</h3>
      </Modal>
      <h1>Your Cart Items</h1>
      <div className={classes.info}>
        <p>Product</p>
        <p>Price</p>
      </div>
      <CartItems />
      <h3>Total price: ${totalPrice}</h3>
      <Button className={classes.checkout} onClick={checkoutHandler}>
        Checkout
      </Button>
    </main>
  );
};

export default CartPage;
