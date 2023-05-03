import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    filteredProducts: [],
    currentProductType: '',
}

export const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        setProducts(state, action){
            state.products = action.payload
        },
        setFilteredProducts(state, action){
            state.filteredProducts = state.products.filter(product => product.type === action.payload)
            if(action.payload === 'all'){
                state.filteredProducts = state.products
            }
            state.currentProductType = action.payload
        }
    }
})

export const {setProducts, setFilteredProducts} = productsSlice.actions

export default productsSlice.reducer