import classes from './Pagination.module.scss'
import Button from '../../../components/UI/Button';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Pagination = ({ productsPerPage, totalProducts, paginate, currentPage }) => {
    const currentProductType = useSelector((state) => state.products.currentProductType)
    const pageNumbers = [];

    for(let i =1 ; i <= Math.ceil(totalProducts / productsPerPage); i++){
        pageNumbers.push(i)
    }

    useEffect(() => {
        paginate(1)
    }, [currentProductType])

    return <nav className={classes.pagination}>
        <ul>
            {pageNumbers.map(number => {
                return <li key={number} id={number}>
                    <Button className={`${classes.button} ${currentPage == number ? classes.active : ''}`} onClick={() => paginate(number)}>{number}</Button>
                </li>
            })}
        </ul>
    </nav>
}

export default Pagination
