import React from 'react';
import { useState, useEffect } from 'react';
import Categories from './Categories/Categories';
import Sorting from './Sorting/Sorting';
import Pagination from './Pagination/Pagination';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { setProducts } from '@/store/shop-products-slice';
import { useLoaderData } from 'react-router';
import { IDetailedProduct } from '@/interfaces';
import { setFilteredProducts } from '@/store/shop-products-slice';
import { clearProducts } from '@/store/shop-products-slice';
import ProductsList from '@/components/Products/ProductsList/ProductsList';
import { useWindowSize } from '@uidotdev/usehooks';

const ShopPage = () => {
  const size = useWindowSize();
  const dispatch = useAppDispatch();
  const shopProducts = useAppSelector(
    (state) => state.shopProducts.processedProducts,
  );
  const starterProducts = useLoaderData() as IDetailedProduct[];

  useEffect(() => {
    dispatch(setProducts(starterProducts));
    dispatch(setFilteredProducts('all'));
    return () => {
      dispatch(clearProducts());
    };
  }, []);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState<number>(
    (size.width as number) > 300 ? 2 : 4,
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = shopProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <main>
      <Categories />
      <Sorting />
      <ProductsList products={currentProducts} />
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={shopProducts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </main>
  );
};

export default ShopPage;
