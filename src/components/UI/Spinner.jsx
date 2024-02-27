import classes from './Spinner.module.scss';

const Spinner = ({ className }) => {
  return (
    <div className={`${classes.spinner} ${className}`}>
      <span className={`${classes.loader} ${className}`}></span>
    </div>
  );
};

export default Spinner;
