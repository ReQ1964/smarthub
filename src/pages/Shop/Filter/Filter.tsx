import React from 'react';
import classes from './Filter.module.scss';
import Button from '@/components/UI/Button';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setFilteredProducts } from '@/store/products-slice';
import { useRef } from 'react';

type ISortType = 'a-z' | 'z-a' | 'high-price' | 'low-price';
type IProductType = 'watch' | 'phone' | 'all';

const Filter = () => {
  const dispatch = useAppDispatch();

  const filterRef = useRef<ISortType>('a-z');

  const currentProductType = useAppSelector(
    (state) => state.products.currentProductType,
  );
  const filteredProductsLength: number = useAppSelector(
    (state) => state.products.filteredProducts.length,
  );

  const submitSortingHandler = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    filterRef.current = event.target.value as ISortType;
    console.log(filterRef.current);
    dispatch(
      setFilteredProducts({
        sortType: event.target.value as ISortType,
        productType: currentProductType as IProductType,
      }),
    );
  };

  const resetSortingHandler = (): void => {
    filterRef.current = 'a-z';
    dispatch(
      setFilteredProducts({
        sortType: 'a-z',
        productType: 'all',
      }),
    );
  };

  return (
    <section className={classes.filter} id="filter">
      <h4>Showing {filteredProductsLength} results</h4>
      <div className={classes.controls}>
        <select
          name="filters"
          id="filters"
          value={filterRef.current}
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

export default Filter;
