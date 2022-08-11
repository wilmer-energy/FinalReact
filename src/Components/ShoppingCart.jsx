import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addCartThunk, checkoutThunk, deleteCartThunk, getCartThunk, updateCartThunk } from '../store/slices/car.slice';

const ShoppingCart = ({ show, handleClose }) => {
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
    console.log(itemsInCart)
    let totalPrice=0
    itemsInCart.forEach(e=>{totalPrice=totalPrice+parseInt(e.price)})
    console.log(totalPrice)



    return (

        <Offcanvas show={show} onHide={handleClose} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Carrito de compras</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
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
            </Offcanvas.Body>
           <hr />
           <div className='mb-5 w-100 p-3 pt-0'>
           <span className='fs-2 mb-5'> <b>Total:</b>  {totalPrice}</span>
          <button className='buton-filter ps-3 pe-3 mt-4 border-0 pt-1 pb-1 fs-4 d-block m-auto' onClick={checkout}>checkout</button>
          </div>
        </Offcanvas>



    );
};

export default ShoppingCart;