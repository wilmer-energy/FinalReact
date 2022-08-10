import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const ShoppingCart = ({ show, handleClose }) => {



    return (

        <Offcanvas show={show} onHide={handleClose} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Carrito de compras</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                producto 1
            </Offcanvas.Body>
           <hr />
           <div className='mb-5 w-100 p-3 pt-0'>
           <span className='fs-2 mb-5'> <b>Total:</b>  $ 2000</span>
          <button className='buton-filter ps-3 pe-3 mt-4 border-0 pt-1 pb-1 fs-4 d-block m-auto'>checkout</button>
          </div>
        </Offcanvas>



    );
};

export default ShoppingCart;