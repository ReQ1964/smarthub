import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import { useEffect } from 'react';
import classes from './AccountPage.module.scss';
import LoginForm from './LoginForm/LoginForm';
import SignUpForm from './SignUpForm/SignUpForm';
import AccountDetails from './AccountDetails/AccountDetails';
import PasswordModal from './PasswordModal/PasswordModal';

const AccountPage = () => {
	const [modalIsOpen, setModalIsOpen] = useState();
	const [method, setMethod] = useState('login');
	const [user, setUser] = useState();

	const { reset } = useForm();

	const methodHandler = (type) => {
		let method = type === 'login' ? 'register' : 'login';
		setMethod(method);
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const uid = user.uid;
				setUser(uid);
				console.log('uid', uid);
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
				/>
			)}
			{!user ? (
				<>
					{method === 'login' ? (
						<LoginForm setMethod={methodHandler} />
					) : (
						<SignUpForm setMethod={methodHandler} />
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
