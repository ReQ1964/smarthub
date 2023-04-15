
import classes from './Categories.module.scss'

const Categories = () => {
    return <section className={classes.categories}>
        <div className={classes.category}>
            <h2>Phones</h2>
            <p>5 items</p>
        </div>
        <div className={classes.category}>
            <h2>Watches</h2>
            <p>5 items</p>
        </div>
    </section>
}

export default Categories