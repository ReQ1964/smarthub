import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './products-slice'


export default configureStore({
    reducer: {
        products: productsReducer
    },
})