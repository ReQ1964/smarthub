import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDetailedProduct } from '@/interfaces';

interface ProductsState {
  products: IDetailedProduct[];
  filteredProducts: IDetailedProduct[];
  sortType: 'a-z' | 'z-a' | 'high-price' | 'low-price';
  currentProductType: 'watch' | 'phone' | 'all';
}

const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  sortType: 'a-z',
  currentProductType: 'all',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<IDetailedProduct[]>) {
      state.products = action.payload;
    },
    setFilteredProducts(
      state,
      action: PayloadAction<{
        productType: ProductsState['currentProductType'];
        sortType: ProductsState['sortType'];
      }>,
    ) {
      state.currentProductType = action.payload.productType;

      state.filteredProducts = state.products.filter(
        (product) => product.type === action.payload.productType,
      );

      if (action.payload.productType === 'all') {
        state.filteredProducts = state.products;
      }

      switch (action.payload.sortType) {
        case 'a-z':
          state.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'z-a':
          state.filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case 'high-price':
          state.filteredProducts.sort((a, b) => b.price - a.price);
          break;
        case 'low-price':
          state.filteredProducts.sort((a, b) => a.price - b.price);
          break;
      }
    },
    setSortType(state, action: PayloadAction<ProductsState['sortType']>) {
      state.sortType = action.payload;
    },
  },
});

export const { setProducts, setFilteredProducts, setSortType } =
  productsSlice.actions;

export default productsSlice.reducer;
