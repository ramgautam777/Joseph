import React from 'react';

import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { SiGooglemaps } from 'react-icons/si';
import Logo from '../images/logo.jpg';

function CustomNavbar() {
  return (
    <>
      <Navbar expand="lg" style={{
        fontWeight: 'bold',
        backgroundColor: 'white',
      }} sticky="top">
        <Container>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/">
            <img
              src={Logo}
              alt="Holy Vision Technical Campus"
              style={{ height: '60px', objectFit: 'contain' }}
            />
          </Navbar.Brand>

          {/* Toggler */}
          <Navbar.Toggle aria-controls="offcanvasNavbar" />

          {/* Desktop Navbar */}
          <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-flex justify-content-end">
            <Nav className="align-items-center" style={{ gap: '25px' }}>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
              <Nav.Link href="https://www.facebook.com/" target="_blank">
                <FaFacebookF size={24} color="#1877F2" />
              </Nav.Link>
              <Nav.Link href="https://www.google.com/maps" target="_blank">
                <SiGooglemaps size={24} color="#34A853" />
              </Nav.Link>
              <Nav.Link href="https://wa.me/yourphonenumber" target="_blank">
                <FaWhatsapp size={24} color="#25D366" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          {/* Mobile Offcanvas */}
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            className="d-lg-none"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <img
                  src={Logo}
                  alt="Holy Vision Technical Campus"
                  style={{ height: '50px', objectFit: 'contain' }}
                />
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              {/* Navigation Links */}
              <Nav className="flex-column mb-4" style={{ gap: '20px' }}>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                {/* <Nav.Link as={Link} to="/academic">Academic Facilities</Nav.Link> --> You can skip this if not needed */}
                <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
              </Nav>

              {/* Social Icons */}
              <div className="d-flex justify-content-start align-items-center" style={{ gap: '20px' }}>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF size={26} color="#1877F2" />
                </a>
                <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
                  <SiGooglemaps size={26} color="#34A853" />
                </a>
                <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp size={26} color="#25D366" />
                </a>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
