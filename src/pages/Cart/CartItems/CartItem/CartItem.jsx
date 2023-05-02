import classes from './CartItem.module.scss';
import trash from '../../../../assets/icon/delete.svg';

const CartItem = (props) => {
	return (
		<div className={classes.item}>
			<img src={props.img} alt="" className={classes.prodImg}/>
			<div className={classes.left}>
				<h3>{props.name}</h3>
				<img src={trash} alt="" />
			</div>
			<div className={classes.right}>
                <p className={classes.price}>${props.price}</p>
                <div className={classes.quantity}>
                    <p>Quantity</p>
                    <div className={classes.button}>
                        <button>-</button>
                        <p>1</p>
                        <button>+</button>
                    </div>
                </div>
            </div>
		</div>
	);
};

export default CartItem;
