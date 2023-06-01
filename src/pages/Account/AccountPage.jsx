import { useForm } from 'react-hook-form';
import { useState } from 'react';
import {
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithRedirect,
} from 'firebase/auth';
import { auth } from '../../firebase';
import { useEffect } from 'react';
import classes from './AccountPage.module.scss';
import LoginForm from './LoginForm/LoginForm';
import SignUpForm from './SignUpForm/SignUpForm';
import AccountDetails from './AccountDetails/AccountDetails';
import PasswordModal from './PasswordModal/PasswordModal';
import googleIcon from '../../assets/icon/google.svg';

const AccountPage = () => {
	const [modalIsOpen, setModalIsOpen] = useState();
	const [method, setMethod] = useState('login');
	const [user, setUser] = useState();

	const provider = new GoogleAuthProvider();

	const emailRegExp =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const { reset } = useForm();

	const methodHandler = (type) => {
		let method = type === 'login' ? 'register' : 'login';
		setMethod(method);
	};

	const googleSignInHandler = () => {
		signInWithRedirect(auth, provider);
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(true);
			} else {
				setUser(null);
				console.log('user is logged out');
			}
		});
	}, []);

	const modalCloseHandler = () => {
		setModalIsOpen(false);
		reset();
	};

	return (
		<main>
			{modalIsOpen && (
				<PasswordModal
					modalIsOpen={modalIsOpen}
					modalCloseHandler={modalCloseHandler}
					emailRegExp={emailRegExp}
				/>
			)}
			{!user ? (
				<>
					<div className={classes.googleContainer}>
						<button className={classes.btnGoogle} onClick={googleSignInHandler}>
							<img src={googleIcon} alt="" />
							Continue with Google
						</button>
						<h4>or</h4>
					</div>
					{method === 'login' ? (
						<LoginForm setMethod={methodHandler} emailRegExp={emailRegExp} />
					) : (
						<SignUpForm setMethod={methodHandler} emailRegExp={emailRegExp} />
					)}
					<p
						className={classes.forgotPassword}
						onClick={() => setModalIsOpen(true)}
					>
						I forgot my password
					</p>
				</>
			) : (
				<AccountDetails />
			)}
		</main>
	);
};

export default AccountPage;
