import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import getConfig from '/src/utils/getConfig';


export const cart = createSlice({
    name: 'car',
    initialState: [],
    reducers: {
        setCar:function(state,action){
            return action.payload
        }

    }
})
export const getCartThunk = () => (dispatch) => {
    //dispatch(setIsLoading(true));
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/cart",getConfig())
        .then((res) => dispatch(setCar(res.data)))
        .finally(() => {/*dispatch(setIsLoading(false)) */});
}

export const addCartThunk = () => (dispatch) => {
    
    return axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/cart",{id: 4,quantity: 99},getConfig())
        .then(() => dispatch(getCartThunk()))
        .catch((error)=>{console.log(error)})
        .finally(() => {})
}

export const updateCartThunk = () => (dispatch) => {
    
    return axios.patch("https://ecommerce-api-react.herokuapp.com/api/v1/cart",{id: 4,newQuantity: 4},getConfig())
        .then(() => dispatch(getCartThunk()))
        .finally(() => {})
}

export const deleteCartThunk = () => (dispatch) => {
    //dispatch(setIsLoading(true));
    return axios.delete("https://ecommerce-api-react.herokuapp.com/api/v1/cart/1",getConfig())
        .then(() => dispatch(getCartThunk()))
        .finally(() => {/*dispatch(setIsLoading(false))*/});
}

export const { setCar } = cart.actions;

export default cart.reducer;
