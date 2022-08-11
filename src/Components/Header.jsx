import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

import Offcanvas from 'react-bootstrap/Offcanvas';


import ShoppingCart from './ShoppingCart';


const Header = ({filterByCategory}) => {

    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    const showLogIn = () => {
        navigate("/LogIn")
    }
    const showPurchases = () => {
        navigate("/purchases")
    }
    const showCart = () => {
        navigate("/cart")
    }



    return (
        <>
            <Navbar bg="light" expand="lg" sticky="top" >
                <Container className='flex-row-reverse flex-lg-row'>
                    <Form className="d-flex d-lg-none">


                        <Button variant="none" onClick={() => navigate('/LogIn')} className='p-2'><i className="fa-regular fa-user fs-6"></i></Button>
                        <Button variant="none" onClick={() => navigate('/purchases')} className='p-2'><i className="fa-solid fa-bag-shopping fs-6"></i></Button>
                        <Button variant="none" onClick={handleShow} className='p-2'><i className="fa-solid fa-cart-shopping fs-6"></i></Button>

                        

                    </Form>
                    <Navbar.Brand href="/">
                        <img className='img-logo' src="./src/img/Chomerce-logo.png" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end gap-5">


                        <Nav className='gap-2 m-auto'>

                            <Nav.Link href="#" className='fw-semibold text-center' >Smart TV</Nav.Link>
                            <Nav.Link href="#" className='fw-semibold text-center'>Computers</Nav.Link>
                            <Nav.Link href="#" className='fw-semibold text-center' >Smartphone</Nav.Link>
                            <Nav.Link href="#" className='fw-semibold text-center'>Kitchen</Nav.Link>
                        </Nav>
                        <Form className="d-flex gap-0 gap-sm-2 d-none d-lg-flex">


                            <Button variant="none"onClick={showLogIn}><i className="fa-regular fa-user fs-5"></i></Button>
                            <Button variant="none"onClick={showPurchases}><i className="fa-solid fa-bag-shopping fs-5"></i></Button>
                            <Button variant="none" onClick={handleShow}><i className="fa-solid fa-cart-shopping fs-5"></i></Button>

                        </Form>
                        
          
                    </Navbar.Collapse>
                    
                   
                   


                </Container>
              
            </Navbar>
            <ShoppingCart show={show} handleClose={handleClose} />
        </>
    );
};

export default Header;