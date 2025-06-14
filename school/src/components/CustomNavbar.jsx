import React, { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { SiGooglemaps } from 'react-icons/si';
import Logo from '../images/logo.jpg';
import './CustomNavbar.css'; // Ensure this is imported

function CustomNavbar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  

  const closeOffcanvas = () => setShowOffcanvas(false);
  const openOffcanvas = () => setShowOffcanvas(true);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact Us' },
    { to: '/gallery', label: 'Gallery' }
  ];

  return (
    <Navbar expand="lg" sticky="top" style={{ backgroundColor: 'white', fontWeight: 'bold' }}>
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            src={Logo}
            alt="St. Joseph English Academy"
            style={{ height: '60px', objectFit: 'contain' }}
          />
        </Navbar.Brand>

        <Navbar.Toggle onClick={openOffcanvas} aria-controls="offcanvasNavbar" />

        {/* Desktop Nav */}
        <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-flex justify-content-end">
          <Nav className="align-items-center" style={{ gap: '25px' }}>
            {navLinks.map((link, i) => (
              <NavLink
                key={i}
                to={link.to}
                className={({ isActive }) => isActive ? 'active-link nav-link' : 'nav-link'}
              >
                {link.label}
              </NavLink>
            ))}
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

        {/* Mobile Offcanvas Nav */}
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          placement="start"
          show={showOffcanvas}
          onHide={closeOffcanvas}
          className="d-lg-none"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <img
                src={Logo}
                alt="St. Joseph English Academy"
                style={{ height: '50px', objectFit: 'contain' }}
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column mb-4" style={{ gap: '20px' }}>
              {navLinks.map((link, i) => (
                <NavLink
                  key={i}
                  to={link.to}
                  onClick={closeOffcanvas}
                  className={({ isActive }) => isActive ? 'active-link nav-link' : 'nav-link'}
                >
                  {link.label}
                </NavLink>
              ))}
            </Nav>
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
  );
}

export default CustomNavbar;
