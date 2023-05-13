import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	details: {},
};

export const orderSlice = createSlice({
	name: 'order',
	initialState: initialState,
	reducers: {
		addOrderDetails(state, action) {
			state.details = action.payload;
		},
		addOrderShippingMethod(state, action) {
			state.details = {
				...state.details,
				shippingMethod: action.payload,
			};
		},
	},
});

export const { addOrderDetails, addOrderShippingMethod } = orderSlice.actions;

export default orderSlice.reducer;
