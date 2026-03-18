import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-scroll';
import classes from './Pagination.module.scss';
import { useAppSelector } from '@/store/hooks';

interface PaginationProps {
  productsPerPage: number;
  totalProducts: number;
  paginate: (arg0: number) => void;
  currentPage: number;
}

const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
}: PaginationProps) => {
  const currentProductType = useAppSelector(
    (state) => state.shopProducts.currentProductType,
  );
  const pageNumbers = [] as number[];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    paginate(1);
  }, [currentProductType]);

  return (
    <nav className={classes.pagination}>
      <ul>
        {pageNumbers.map((number) => {
          return (
            <li key={number} id={number.toString()}>
              <Link
                to="results"
                spy={true}
                smooth={true}
                duration={250}
                offset={-120}
                className={`${classes.button} ${
                  currentPage == number ? classes.active : ''
                }`}
                onClick={() => paginate(number)}
              >
                {number}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
