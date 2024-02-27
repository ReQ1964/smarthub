import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  details: {},
};

export const orderSlice = createSlice({
  name: 'order',
  initialState: initialState,
  reducers: {
    addOrderDetails(state, action) {
      if (action.payload) {
        state.details = {
          ...state.details,
          ...action.payload,
        };
        return;
      }
      state.details = action.payload;
    },
    clearDetails(state) {
      state.details = {};
    },
  },
});

export const { addOrderDetails, clearDetails } = orderSlice.actions;

export default orderSlice.reducer;
