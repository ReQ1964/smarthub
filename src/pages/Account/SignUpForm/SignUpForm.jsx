import classes from '../AccountPage.module.scss';
import { useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Button from '../../../components/UI/Button';
import visibleIcon from '../../../assets/icon/navbar/visible.svg';
import invisibleIcon from '../../../assets/icon/navbar/invisible.svg';
import Spinner from '../../../components/UI/Spinner';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';

const SignUpForm = ({ setMethod, emailRegExp }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);
	const [passwordShown, setPasswordShown] = useState(false);

	const schema = yup.object().shape({
		email: yup
			.string()
			.required('Please enter your email address.')
			.matches(emailRegExp, 'Please enter a valid email address.'),
		password: yup
			.string()
			.required('Please enter your password.')
			.min(6, 'Password has to be at least 6 characters long.'),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref('password'), null], "Passwords don't match")
			.required('Please confirm your password.'),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onRegister = ({ email, password, confirmPassword }) => {
		if (password === confirmPassword) {
			setIsError(false);
			setIsLoading(true);
			createUserWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					const user = userCredential.user;
					console.log(user);
				})
				.catch((error) => {
					if (error.code === 'auth/email-already-in-use') {
						setError('Email already in use!');
					} else {
						setError(error.message);
					}
				})
				.finally(() => {
					setIsLoading(false);
				});
		}
	};

	return (
		<section className={classes.loggingForm}>
			<div className={classes.register}>
				<h1>Create an account</h1>
				{error && <p className={classes.error}>{error}</p>}
				<form
					onSubmit={handleSubmit(onRegister)}
					className={classes.registerForm}
				>
					<div className={classes.email}>
						<label htmlFor="email">Email</label>
						<input
							{...register('email')}
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
					<div className={classes.password}>
						<label htmlFor="password">Confirm Password</label>
						<input
							type={passwordShown ? 'text' : 'password'}
							{...register('confirmPassword')}
							placeholder="Confirm your password"
						/>
						<p className={classes.error}>{errors.confirmPassword?.message}</p>
					</div>
					<Button type="submit" disabled={isLoading}>
						{isLoading ? (
							<Spinner className={classes.btnSpinner} />
						) : (
							'Create Account'
						)}
					</Button>
				</form>
				<p className={classes.helper}>
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
