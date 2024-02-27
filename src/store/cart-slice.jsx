import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  totalPrice: 0,
};

function calculateTotalPrice(products) {
  return products.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      const newProduct = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === newProduct.id,
      );

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.products.push({ ...newProduct, quantity: 1 });
      }

      state.totalPrice = calculateTotalPrice(state.products);
    },
    removeFromCart(state, action) {
      const id = action.payload;
      state.products = state.products.filter((product) => product.id !== id);

      state.totalPrice = calculateTotalPrice(state.products);
    },
    changeQuantity(state, action) {
      const { id, type } = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === id,
      );

      if (type === 'increase') existingProduct.quantity++;
      else if (type === 'decrease' && existingProduct.quantity != 1)
        existingProduct.quantity--;

      state.totalPrice = calculateTotalPrice(state.products);
    },
    clearCart(state) {
      state.products = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, changeQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
