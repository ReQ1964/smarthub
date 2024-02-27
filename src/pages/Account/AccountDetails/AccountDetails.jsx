import Button from '../../../components/UI/Button';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase';

const AccountDetails = () => {
	const handleLogout = () => {
		signOut(auth)
			.then(() => {
				console.log('Signed out successfully');
			})
			.catch((error) => {
				console.log(error.code, error.message);
			});
	};

	return (
		<section>
			<Button onClick={handleLogout}>Sign out</Button>
		</section>
	);
};

export default AccountDetails;
