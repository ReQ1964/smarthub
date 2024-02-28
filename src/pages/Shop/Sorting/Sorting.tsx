import React from 'react';
import classes from './Sorting.module.scss';
import Button from '@/components/UI/Button';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  setFilteredProducts,
  setSortedProducts,
} from '@/store/shop-products-slice';

type ISortType = 'a-z' | 'z-a' | 'high-price' | 'low-price';

const Sorting = () => {
  const dispatch = useAppDispatch();
  const [selectedSort, setSelectedSort] = useState('a-z');

  const filteredProductsLength = useAppSelector(
    (state) => state.products.processedProducts.length,
  );

  const submitSortingHandler = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedSort(event.target.value as ISortType);
    dispatch(setSortedProducts(event.target.value as ISortType));
  };

  const resetSortingHandler = (): void => {
    setSelectedSort('a-z');
    dispatch(setSortedProducts('a-z'));
    dispatch(setFilteredProducts('all'));
  };

  return (
    <section className={classes.sorting} id="sorting">
      <h4>Showing {filteredProductsLength} results</h4>
      <div className={classes.controls}>
        <select
          name="sortingMethods"
          id="sortingMethods"
          value={selectedSort}
          onChange={submitSortingHandler}
        >
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
          <option value="high-price">Price High To Low</option>
          <option value="low-price">Price Low to High</option>
        </select>
        <Button onClick={resetSortingHandler}>Reset</Button>
      </div>
    </section>
  );
};

export default Sorting;
