import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	products: [],
	filteredProducts: [],
	sortType: 'default',
	currentProductType: '',
};

export const productsSlice = createSlice({
	name: 'products',
	initialState: initialState,
	reducers: {
		setProducts(state, action) {
			state.products = action.payload;
		},
		setFilteredProducts(state, action) {
			state.currentProductType = action.payload.productType;

			state.filteredProducts = state.products.filter(
				(product) => product.type === action.payload.productType
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
		setSortType(state, action) {
			state.sortType = action.payload;
		},
	},
});

export const { setProducts, setFilteredProducts, setSortType } =
	productsSlice.actions;

export default productsSlice.reducer;
