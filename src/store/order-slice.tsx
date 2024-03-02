import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDetailsPayload } from '@/pages/Details/DetailsForm/DetailsForm';
import { IPaymentPayload } from '@/pages/Payment/PaymentForm/PaymentForm';
import { IShippingPayload } from '@/pages/Shipping/ShippingForm/ShippingForm';

interface IOrderState {
  details: IDetailsPayload;
  shippingMethod: IShippingPayload;
  cardInfo: IPaymentPayload;
}

const initialState: IOrderState = {
  details: {
    email: '',
    number: '',
    name: '',
    surname: '',
    address: '',
    postal: '',
    city: '',
    note: '',
    country: '',
    region: '',
  },
  shippingMethod: {
    name: '',
    price: 0,
  },
  cardInfo: {
    cardNumber: null as unknown as number,
    holderName: '',
    expiration: '',
    ccv: '',
  },
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrderDetails(state, action: PayloadAction<IDetailsPayload>) {
      state.details = action.payload;
    },
    addOrderShippingMethod(state, action: PayloadAction<IShippingPayload>) {
      state.shippingMethod = action.payload;
    },
    addOrderPaymentInfo(state, action: PayloadAction<IPaymentPayload>) {
      state.cardInfo = action.payload;
    },
    clearDetails(state) {
      state.details = initialState.details;
      state.shippingMethod = initialState.shippingMethod;
      state.cardInfo = initialState.cardInfo;
    },
  },
});

export const {
  addOrderDetails,
  addOrderPaymentInfo,
  addOrderShippingMethod,
  clearDetails,
} = orderSlice.actions;

export default orderSlice.reducer;
