import React from 'react';
import '../components/Footer.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Logo from '../images/logo.jpg';


function Footer() {
  return (
    <footer className="footer text-white pt-5 pb-3">
      <Container>
        <Row className="mb-4">
          <Col md={4}>
            <img
              src={Logo} // replace with actual logo URL
              alt="St.joseph English Academy"
              className="mb-3"
              style={{ maxWidth: '150px' }}
            />
          </Col>

          <Col md={4}>
            <h5 className="fw-bold">Our Activities</h5>
            <ul className="list-unstyled">
              <li>Child-Friendly classroom</li>
              <li>Freedom To Learn</li>
              <li>Caring, Compassionate Community</li>
              <li>Caregiver Program</li>
            </ul>
          </Col>

          <Col md={4}>
            <h5 className="fw-bold">Helpful Links</h5>
            <ul className="list-unstyled">
              <li> <a href='/' className="text-white text-decoration-none "> Home </a></li>
              <li><a href="/about" className="text-white text-decoration-none ">About Us</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact Us</a></li>
              <li><a href="/gallery" className="text-white text-decoration-none">Gallery</a></li>
            </ul>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={4}></Col>

          <Col md={4}></Col>

          <Col md={4}>
            <h5 className="fw-bold">Contact Us</h5>
            <p>
              <FaEnvelope className="me-2" />
              stjosephs.edu.np@gmail.com
            </p>
            <p>
              <FaPhone className="me-2" />
              01-4370215
            </p>
            <p>
              <FaPhone className="me-2" />
              01-4371715
            </p>
            <p>
              <FaMapMarkerAlt className="me-2" />
              BudhanilKantha-7,Golfutar <br />
              Kathmandu, Nepal
                      </p>
                      <Link to="/contact">
                      
                          <Button variant="success">Contact Us</Button>
                      </Link>
          </Col>
        </Row>

        <hr className="border-top border-light" />
        <p className="text-center mb-0  footer-copy">
          &copy; 2025 St. Joseph's English Academy. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
