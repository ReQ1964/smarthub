import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.scss';
import HomePage from './pages/Home/HomePage';
import ShopPage from './pages/Shop/ShopPage';
import SingleProductPage from './pages/SingleProduct/SingleProductPage';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';
import AccountPage from './pages/Account/AccountPage';
import CartPage from './pages/Cart/CartPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: '/shop',
				element: <ShopPage />,
			},
			{
				path: '/shop/:productId',
				element: <SingleProductPage />,
			},
			{
				path: '/about',
				element: <AboutPage />,
			},
			{
				path: '/contact',
				element: <ContactPage />,
				action: async ({ request, params }) => {
					const data = await request.formData();

					const eventData = {
						name: data.get('name'),
						email: data.get('email'),
						topic: data.get('topic'),
						message: data.get('message'),
					};

					return null;
				},
			},
			{
				path: '/account',
				element: <AccountPage />,
			},
			{
				path: '/cart',
				element: <CartPage/>
			}
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
