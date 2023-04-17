import classes from './Product.module.scss'

const Product = (props) => {
    return <li className={classes.product}>
                <img src={props.img} alt="" />
                <div className={classes.description}>
                    <h4>{props.name}</h4>
                    <p className={classes.company}>{props.company}</p>
                    <p className={classes.price}>${props.price}</p>
                    <div className={classes.colors}>{props.colors.map(color => {
                        return <div className={classes.color} style={{
                            backgroundColor: color
                        }}></div>
                    })}
                    </div>
                </div>
            </li>
}

export default Product