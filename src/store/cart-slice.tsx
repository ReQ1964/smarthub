import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICartProduct {
  id: string | number;
  name: string;
  color: string;
  company: string;
  price: number;
  img: string;
  type: string;
  quantity: number;
}
interface CartState {
  cartProducts: ICartProduct[];
  totalPrice: number;
}

const initialState: CartState = {
  cartProducts: [],
  totalPrice: 0,
};

const calculateTotalPrice = (products: ICartProduct[]) => {
  return products.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ICartProduct>) {
      const newProduct = action.payload;
      const existingProduct = state.cartProducts.find(
        (product) => product.id === newProduct.id,
      );

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cartProducts.push({ ...newProduct, quantity: 1 });
      }

      state.totalPrice = calculateTotalPrice(state.cartProducts);
    },
    removeFromCart(state, action) {
      const id = action.payload;
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== id,
      );

      state.totalPrice = calculateTotalPrice(state.cartProducts);
    },
    changeQuantity(state, action) {
      const { id, type } = action.payload;

      const existingProduct = state.cartProducts.find(
        (product) => product.id === id,
      );

      if (existingProduct) {
        if (type === 'increase') existingProduct.quantity++;
        else if (type === 'decrease' && existingProduct.quantity != 1)
          existingProduct.quantity--;
      } else {
        return;
      }

      state.totalPrice = calculateTotalPrice(state.cartProducts);
    },
    clearCart(state) {
      state.cartProducts = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, changeQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
