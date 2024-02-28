import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDetailedProduct } from '@/interfaces';

type ISortType = 'a-z' | 'z-a' | 'high-price' | 'low-price';

export const sortProducts = (
  products: IDetailedProduct[],
  sortType: ISortType,
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
  return sortedProducts;
};

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

export const shopProductsSlice = createSlice({
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
      state.sortType = action.payload.sortType;

      state.filteredProducts = state.products.filter(
        (product) => product.type === action.payload.productType,
      );

      if (action.payload.productType === 'all') {
        state.filteredProducts = state.products;
      }

      sortProducts(state.filteredProducts, state.sortType);
    },
    clearProducts(state) {
      state.products = [];
      state.filteredProducts = [];
    },
  },
});

export const { setProducts, setFilteredProducts, clearProducts } =
  shopProductsSlice.actions;

export default shopProductsSlice.reducer;
