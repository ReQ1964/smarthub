import { useState } from 'react';
import Categories from './Categories/Categories';
import Filter from './Filter/Filter';
import ShopProducts from './ShopProducts/ShopProducts';
import Pagination from './Pagination/Pagination';
import { useSelector } from 'react-redux';

const ShopPage = () => {
  const products = useSelector((state) => state.products.filteredProducts);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(2);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
