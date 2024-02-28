import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDetailedProduct } from '@/interfaces';

interface ProductsState {
  products: IDetailedProduct[];
  processedProducts: IDetailedProduct[];
  currentProductType: 'watch' | 'phone' | 'all';
  currentSortType: 'a-z' | 'z-a' | 'high-price' | 'low-price';
}

const initialState: ProductsState = {
  products: [],
  processedProducts: [],
  currentProductType: 'all',
  currentSortType: 'a-z',
};

export const sortProducts = (
  products: IDetailedProduct[],
  sortType: ProductsState['currentSortType'],
) => {
  const sortedProducts = products;
  switch (sortType) {
    case 'a-z':
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'z-a':
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'high-price':
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    case 'low-price':
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
  }
};

export const shopProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<IDetailedProduct[]>) {
      state.products = action.payload;
    },
    setSortedProducts(
      state,
      action: PayloadAction<ProductsState['currentSortType']>,
    ) {
      state.currentSortType = action.payload;
      sortProducts(state.processedProducts, action.payload);
    },
    setFilteredProducts(
      state,
      action: PayloadAction<ProductsState['currentProductType']>,
    ) {
      state.currentProductType = action.payload;

      state.processedProducts = state.products.filter(
        (product) => product.type === action.payload,
      );

      if (action.payload === 'all') {
        state.processedProducts = state.products;
      }

      sortProducts(state.processedProducts, state.currentSortType);
    },
    clearProducts(state) {
      state.products = [];
      state.processedProducts = [];
    },
  },
});

export const {
  setProducts,
  setFilteredProducts,
  setSortedProducts,
  clearProducts,
} = shopProductsSlice.actions;

export default shopProductsSlice.reducer;
