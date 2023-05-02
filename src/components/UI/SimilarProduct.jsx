import classes from './SimilarProduct.module.scss';

const SimilarProduct = (props) => {
	return (
		<div className={classes.product} onClick={props.onClick}>
            <img src={props.img} alt="" />
			<h4>{props.name}</h4>
			<p className={classes.company}>{props.company}</p>
			<p className={classes.price}>${props.price}</p>
		</div>
	);
};

export default SimilarProduct;
