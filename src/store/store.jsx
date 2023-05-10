import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products-slice';
import cartReducer from './cart-slice';
import orderReducer from './order-slice';

export default configureStore({
	reducer: {
		products: productsReducer,
		cart: cartReducer,
		order: orderReducer,
	},
});
