
import classes from './Filter.module.scss'
import Button from '../../../components/UI/Button'

const Filter = () => {
    return <section className={classes.filter}>
        <h4>Showing 12 results</h4>
        <div className={classes.controls}>
            <select name="filters" id="filters">
                <option value="Popular">Most Popular</option>
                <option value="Price HtL">Price High To Low</option>
                <option value="Price LtH">Price Low to High</option>
            </select>
            <Button className={classes.button}>Filter</Button>
        </div>
    </section>
}

export default Filter