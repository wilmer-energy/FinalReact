import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Casa inteligente</Nav.Link>
            <Nav.Link href="#features">Interruptores</Nav.Link>
            <Nav.Link href="#pricing">Tomadas</Nav.Link>
            <Nav.Link href="#pricing">sensores</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    );
};

export default Header;