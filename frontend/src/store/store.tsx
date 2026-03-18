import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './order-slice';
import shoProductsReducer from './shop-products-slice';

export const store = configureStore({
  reducer: {
    shopProducts: shoProductsReducer,
    order: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
