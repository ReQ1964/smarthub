import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAssgnXzszmxFZq6UTyKgmnkB1WiyUcm-4',
	authDomain: 'phone-shop-43033.firebaseapp.com',
	projectId: 'phone-shop-43033',
	storageBucket: 'phone-shop-43033.appspot.com',
	messagingSenderId: '692124632269',
	appId: '1:692124632269:web:1234567890abcdef',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
