import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        < div className='header'>
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/"> 
            <img src='' className="w-50" alt="" srcSet="" />
             </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="home#">Home</Nav.Link>
                <Nav.Link href="home#services">Services</Nav.Link>
                <Nav.Link href="/blogs"> Blogs</Nav.Link>
               
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="/aboutMe">About me</Nav.Link>
                <Nav.Link as={Link} to="/login">Log in</Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </ div>
    );
};

export default Header;