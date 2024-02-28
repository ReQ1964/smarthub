import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './layouts/Navbar/Navbar';
import Footer from './layouts/Footer/Footer';
import useScrollToTop from './hooks/useScrollToTop';

const App = () => {
  useScrollToTop();

  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
