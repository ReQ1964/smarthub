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

	const openModalHandler = () => {
		setModalIsOpen(true);
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
					{method === 'login' ? (
						<LoginForm
							setMethod={methodHandler}
							emailRegExp={emailRegExp}
							openModal={openModalHandler}
						/>
					) : (
						<SignUpForm
							setMethod={methodHandler}
							emailRegExp={emailRegExp}
							openModal={openModalHandler}
						/>
					)}
					<div className={classes.googleContainer}>
						<p>or</p>
						<button className={classes.btnGoogle} onClick={googleSignInHandler}>
							<img src={googleIcon} alt="" />
							Continue with Google
						</button>
					</div>
				</>
			) : (
				<AccountDetails />
			)}
		</main>
	);
};

export default AccountPage;
