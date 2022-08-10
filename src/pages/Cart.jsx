import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { addCartThunk, getCartThunk, updateCartThunk } from '../store/slices/car.slice';

const Cart = () => {
const dispatch=useDispatch()
dispatch(getCartThunk())

let add=()=>{
    dispatch(addCartThunk())
}
let update=()=>{
    dispatch(updateCartThunk())
}

    return (
        <div>
            <button onClick={add}> Add to cart</button>
            <button onClick={update}>Update</button>
        </div>

    );
};

export default Cart;