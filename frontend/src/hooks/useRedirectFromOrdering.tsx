import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';

const useRedirectFromOrdering = () => {
  const navigate = useNavigate();

  const cartItemsQuantity = useAppSelector(
    (state) => state.cart.cartProducts.length,
  );

  useEffect(() => {
    console.log(cartItemsQuantity);
    if (cartItemsQuantity === 0) {
      navigate('/');
    }
  }, []);
};

export default useRedirectFromOrdering;
