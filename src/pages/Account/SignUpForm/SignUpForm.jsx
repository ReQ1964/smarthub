import classes from '../AccountPage.module.scss';
import { useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Button from '../../../components/UI/Button';
import visibleIcon from '../../../assets/icon/navbar/visible.svg';
import invisibleIcon from '../../../assets/icon/navbar/invisible.svg';

const SignUpForm = ({ setMethod }) => {
	const [passwordShown, setPasswordShown] = useState(false);

	const schema = yup.object().shape({
		email: yup
			.string()
			.required('Please enter your email address.')
			.matches(
				/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				{ message: 'Please enter a valid email address.' }
			),
		password: yup.string().required('Please enter your password.').min(6),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onRegister = async ({ email, password }) => {};

	return (
		<section className={classes.loggingForm}>
			<div className={classes.register}>
				<h1>Create an account</h1>
				<form
					onSubmit={handleSubmit(onRegister)}
					className={classes.registerForm}
				>
					<div className={classes.email}>
						<label htmlFor="email">Email</label>
						<input
							{...register('email')}
							type="email"
							placeholder="Enter your email address"
						/>
						<p className={classes.error}>{errors.email?.message}</p>
					</div>
					<div className={classes.password}>
						<label htmlFor="password">Password</label>
						<img
							onClick={() => setPasswordShown((prevState) => !prevState)}
							src={passwordShown ? visibleIcon : invisibleIcon}
							alt=""
						/>
						<input
							type={passwordShown ? 'text' : 'password'}
							{...register('password')}
							placeholder="Enter your password"
						/>
						<p className={classes.error}>{errors.password?.message}</p>
					</div>
					<Button type="submit">Create account</Button>
				</form>
				<p>
					Already Have An Account?{' '}
					<span
						onClick={() => {
							setMethod('register');
							setPasswordShown(false);
						}}
					>
						Log In
					</span>
				</p>
			</div>
		</section>
	);
};

export default SignUpForm;
