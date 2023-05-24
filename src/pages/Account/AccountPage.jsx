import LoginForm from './LoginForm/LoginForm';
import SignUpForm from './SignUpForm/SignUpForm';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import { useEffect } from 'react';

const AccountPage = () => {
	const [method, setMethod] = useState('login');
	const [user, setUser] = useState();

	const methodHandler = (type) => {
		let method = type === 'login' ? 'register' : 'login';
		setMethod(method);
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const uid = user.uid;
				setUser(uid);
			} else {
				setUser(null);
				console.log('user is logged out');
			}
		});
	}, [user]);

	return (
		<main>
			{!user ? (
				<>
					{method === 'login' ? (
						<LoginForm setMethod={methodHandler} />
					) : (
						<SignUpForm setMethod={methodHandler} />
					)}
				</>
			) : (
				<button></button>
			)}
		</main>
	);
};

export default AccountPage;
