import classes from './Spinner.module.scss';

const Spinner = () => {
	return (
		<div className={classes.spinner}>
			<span className={classes.loader}></span>
		</div>
	);
};

export default Spinner;
