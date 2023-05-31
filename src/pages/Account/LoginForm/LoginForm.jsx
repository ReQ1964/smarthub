import classes from '../AccountPage.module.scss';
import { useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Button from '../../../components/UI/Button';
import visibleIcon from '../../../assets/icon/navbar/visible.svg';
import invisibleIcon from '../../../assets/icon/navbar/invisible.svg';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import Spinner from '../../../components/UI/Spinner';

const LoginForm = ({ setMethod, emailRegExp }) => {
	const [passwordShown, setPasswordShown] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isError, setIsError] = useState(false);

	const schema = yup.object().shape({
		email: yup
			.string()
			.required('Please enter your email address.')
			.matches(emailRegExp, { message: 'Please enter a valid email address.' }),
		password: yup.string().required('Please enter your password.'),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onLogin = ({ email, password }) => {
		setIsError(false);
		setIsLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
			})
			.catch((error) => {
				console.log(error.code, error.message);
				setIsError(true);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<section className={classes.loggingForm}>
			<div className={classes.login}>
				<h1>Login to your account</h1>
				{isError && (
					<p className={classes.error}>Invalid email and/or password!</p>
				)}
				<form onSubmit={handleSubmit(onLogin)} className={classes.loginForm}>
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
					<Button type="submit" disabled={isLoading}>
						{isLoading ? (
							<Spinner className={classes.btnSpinner} />
						) : (
							'Login Now'
						)}
					</Button>
				</form>
				<p className={classes.helper}>
					Don't Have An Account?{' '}
					<span
						onClick={() => {
							setMethod('login');
							setPasswordShown(false);
						}}
					>
						Sign Up
					</span>
				</p>
			</div>
		</section>
	);
};

export default LoginForm;
