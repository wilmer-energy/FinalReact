import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addCartThunk, checkoutThunk, deleteCartThunk, getCartThunk, updateCartThunk } from '../store/slices/car.slice';

const Cart = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCartThunk())
    }, [])


    const itemsInCart = useSelector(state => state.cart)
    console.log("h1")


    let del = (id) => {
        dispatch(deleteCartThunk(id))
    }
    let add = (item) => {
        dispatch(updateCartThunk(item))

    }
    let substract = (itemd) => {
        dispatch(updateCartThunk(itemd))
    }
    const checkout = () => {
        dispatch(checkoutThunk())
    }
    //for update need quantity and id

    return (
        <div>
            <span>Hello </span>

            {itemsInCart.map(e => {
                return (
                    <div key={e.id}>

                        <ul>
                            <li>{e.title}</li>
                            <li>{e.productsInCart.quantity}</li>
                            <li><button onClick={() => { del(e.id) }}> Delete</button></li>
                            <li><button onClick={() => { add({ id: e.id, newQuantity: parseInt(e.productsInCart.quantity) + 1 }) }}>mas</button></li>
                            <li><button onClick={() => { substract({ id: e.id, newQuantity: parseInt(e.productsInCart.quantity) - 1 }) }}>menos</button></li>
                        </ul>
                        <br />
                    </div>
                )
            })}
            <button onClick={checkout}>Checkout</button>
        </div>

    );
};

export default Cart;