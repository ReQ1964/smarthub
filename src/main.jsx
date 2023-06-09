import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import './index.scss';
import HomePage from './pages/Home/HomePage';
import ShopPage from './pages/Shop/ShopPage';
import SingleProductPage from './pages/SingleProduct/SingleProductPage';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';
import AccountPage from './pages/Account/AccountPage';
import CartPage from './pages/Cart/CartPage';
import Order from './layouts/Order/Order';
import DetailsPage from './pages/Details/DetailsPage';
import ShippingPage from './pages/Shipping/ShippingPage';
import PaymentPage from './pages/Payment/PaymentPage';

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
				element: <CartPage />,
			},
		],
	},
	{
		path: '/order',
		element: <Order />,
		children: [
			{
				path: '/order/details',
				element: <DetailsPage />,
			},
			{ path: '/order/shipping', element: <ShippingPage /> },
			{
				path: '/order/payment',
				element: <PaymentPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);
