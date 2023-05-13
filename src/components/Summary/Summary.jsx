import classes from './Summary.module.scss';

const Summary = ({ contact, address, ship }) => {
	return (
		<div className={classes.summary}>
			<div>
				<h4>Contact</h4>
				<p>{contact}</p>
			</div>
			<div>
				<h4>Ship to</h4>
				<p>{address}</p>
			</div>
			{ship && (
				<div className={classes.third}>
					<h4>Method</h4>
					<p>{ship}</p>
				</div>
			)}
		</div>
	);
};

export default Summary;
