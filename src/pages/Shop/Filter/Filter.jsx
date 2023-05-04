
import classes from './Filter.module.scss'
import Button from '../../../components/UI/Button'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSortType, setFilteredProducts } from '../../../store/products-slice'

const Filter = () => {
    const dispatch = useDispatch()
    const [selectedSort, setSelectedSort] = useState('a-z');
    const currentProductType = useSelector((state) => state.products.currentProductType)
    const filteredProductsLength = useSelector((state) => state.products.filteredProducts.length)

    const submitSortingHandler = (e) => {
        setSelectedSort(e.target.value)
        dispatch(setFilteredProducts({sortType: e.target.value, productType: currentProductType}))
        dispatch(setSortType(e.target.value))
    }

    return <section className={classes.filter}>
        <h4>Showing {filteredProductsLength} results</h4>
        <div className={classes.controls} >
            <select name="filters" id="filters" value={selectedSort} onChange={submitSortingHandler}>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
                <option value="high-price">Price High To Low</option>
                <option value="low-price">Price Low to High</option>
            </select>
            <Button onClick={() => {
                setSelectedSort('default')
                dispatch(setFilteredProducts({sortType: 'a-z', productType: currentProductType}))}
            }>Reset</Button>
        </div>

    </section>
}

export default Filter