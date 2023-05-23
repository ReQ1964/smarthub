import LoginForm from './LoginForm/LoginForm';
import SignUpForm from './SignUpForm/SignUpForm';
import { useState } from 'react';

const AccountPage = () => {
	const [method, setMethod] = useState('login');

	const methodHandler = (type) => {
		let method = type === 'login' ? 'register' : 'login';
		setMethod(method);
	};

	return (
		<main>
			{method === 'login' ? (
				<LoginForm setMethod={methodHandler} />
			) : (
				<SignUpForm setMethod={methodHandler} />
			)}
		</main>
	);
};

export default AccountPage;
