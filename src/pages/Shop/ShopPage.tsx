import React from 'react';
import { useState, useEffect } from 'react';
import Categories from './Categories/Categories';
import Sorting from './Sorting/Sorting';
import ShopProducts from './ShopProducts/ShopProducts';
import Pagination from './Pagination/Pagination';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { setProducts } from '@/store/shop-products-slice';
import { useLoaderData } from 'react-router';
import { IDetailedProduct } from '@/interfaces';
import { setFilteredProducts } from '@/store/shop-products-slice';
import { clearProducts } from '@/store/shop-products-slice';

const ShopPage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.processedProducts);
  const starterProducts = useLoaderData() as IDetailedProduct[];

  useEffect(() => {
    dispatch(setProducts(starterProducts));
    dispatch(setFilteredProducts('all'));
    return () => {
      dispatch(clearProducts());
    };
  }, []);

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
      <Sorting />
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
