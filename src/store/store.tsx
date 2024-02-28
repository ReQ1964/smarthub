import { configureStore } from '@reduxjs/toolkit';
import shoProductsReducer from './shop-products-slice';
import cartReducer from './cart-slice';
import orderReducer from './order-slice';

export const store = configureStore({
  reducer: {
    products: shoProductsReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
