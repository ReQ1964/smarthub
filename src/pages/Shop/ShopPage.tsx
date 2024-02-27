import React from 'react';
import { useState } from 'react';
import Categories from './Categories/Categories';
import Filter from './Filter/Filter';
import ShopProducts from './ShopProducts/ShopProducts';
import Pagination from './Pagination/Pagination';
import { useAppSelector } from '@/store/hooks';

const ShopPage = () => {
  const products = useAppSelector((state) => state.products.filteredProducts);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState<number>(2);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <main>
      <Categories />
      <Filter />
      <ShopProducts products={currentProducts} />
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </main>
  );
};

export default ShopPage;
