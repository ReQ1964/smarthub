import classes from './Pagination.module.scss'
import Button from '../../../components/UI/Button';

const Pagination = ({ productsPerPage, totalProducts, paginate, currentPage }) => {
    const pageNumbers = [];

    for(let i =1 ; i <= Math.ceil(totalProducts / productsPerPage); i++){
        pageNumbers.push(i)
    }

    return <nav className={classes.pagination}>
        <ul>
            {pageNumbers.map(number => {
                return <li key={number} id={number}>
                    <Button className={`${classes.button} ${currentPage == number ? classes.active : ''}`} onClick={(e) => paginate(number)}>{number}</Button>
                </li>
            })}
        </ul>
    </nav>
}

export default Pagination
