import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    isLoading: false,
}

export const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        setProducts(state, action){
            state.products = action.payload
        },
        setIsLoading(state, action){
            state.isLoading = action.payload
        }
    }
})

export const {setProducts, setIsLoading} = productsSlice.actions

export default productsSlice.reducer