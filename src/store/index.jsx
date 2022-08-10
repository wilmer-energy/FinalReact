import { configureStore } from '@reduxjs/toolkit'
import isLoadingSlice from './slices/isLoading.slice'
import productsSlice from './slices/products.slice'
import carSlice from './slices/car.slice'
import purchasesSlice from './slices/purchases.slice'



export default configureStore({
    reducer: {
        isLoadingSlice, productsSlice,
        cart: carSlice,
        purchases: purchasesSlice
    }
})
