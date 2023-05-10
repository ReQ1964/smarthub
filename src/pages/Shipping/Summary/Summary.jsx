import classes from './Summary.module.scss';

const Summary = () => {
	return (
		<div className={classes.summary}>
			<div>
				<h4>Contact</h4>
				<p>Info</p>
			</div>
			<div>
				<h4>Ship to</h4>
				<p>Info</p>
			</div>
		</div>
	);
};

export default Summary;
