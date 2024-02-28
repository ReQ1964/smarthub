import React from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Navbar from './layouts/Navbar/Navbar';
import Footer from './layouts/Footer/Footer';
import useScrollToTop from './hooks/useScrollToTop';
import useResetCategory from './hooks/useResetCategory';
import { setProducts } from './store/products-slice';
import { useAppDispatch } from './store/hooks';

const App = () => {
  const dispatch = useAppDispatch();
  useScrollToTop();
  useResetCategory();

  const fetchProducts = async () => {
    const res = await axios.get(
      'https://phone-shop-43033-default-rtdb.europe-west1.firebasedatabase.app/producats.json',
    );
    dispatch(setProducts(Object.values(res.data)));
    return res.data;
  };

  const { refetch } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
