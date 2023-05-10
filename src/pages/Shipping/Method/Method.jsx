import classes from './Method.module.scss';
import Button from '../../../components/UI/Button';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Method = () => {
	const navigate = useNavigate();

	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		console.log(data);
		navigate('/order/payment');
	};

	return (
		<div className={classes.method}>
			<h2>Shipping method</h2>
			<form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
				<div>
					<input
						type="radio"
						{...register('radio')}
						id="standard"
						value="standard"
						defaultChecked
					/>
					<label htmlFor="standard">Standard shipping</label>
					<p>Free</p>
				</div>
				<div>
					<input
						type="radio"
						{...register('radio')}
						id="priority"
						value="priority"
					/>
					<label htmlFor="priority">Priority shipping</label>
					<p>$10</p>
				</div>
				<Button className={classes.btn}>Go to payment</Button>
			</form>
		</div>
	);
};

export default Method;
