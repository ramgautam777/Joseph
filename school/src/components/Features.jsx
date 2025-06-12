import React from 'react';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import './Features.css'; // Import custom CSS
import Feature1 from '../images/feature1.jpg';
import Feature2 from '../images/feature2.png';

const HVTCFeatures = () => {
  return (
    <div className="bg-white py-5 position-relative">
      <Container>
        <Row className="align-items-start">
          {/* Text Section */}
          <Col md={6}>
            <h2 className="fw-bold mb-3 text-blue">Empower Your Career with STJEA</h2>
            <p className="text-muted mb-4">
              At Holy Vision Technical Campus, we provide comprehensive technical
              education with personalized support for your academic and professional growth.
            </p>
            <ListGroup variant="flush">
              <ListGroup.Item className="border-0 ps-0">
                <span className="text-success fw-bold">•</span>{' '}
                <strong>Diverse Technical Programs:</strong> Including Nursing, General Medicine,
                Pharmacy, and Caregiver Program.
              </ListGroup.Item>
              <ListGroup.Item className="border-0 ps-0">
                <span className="text-success fw-bold">•</span>{' '}
                <strong>Modern Infrastructure:</strong> Labs, libraries, simulation rooms, and digital resources.
              </ListGroup.Item>
              <ListGroup.Item className="border-0 ps-0">
                <span className="text-success fw-bold">•</span>{' '}
                <strong>Experienced Faculty:</strong> Qualified instructors with clinical and industrial expertise.
              </ListGroup.Item>
              <ListGroup.Item className="border-0 ps-0">
                <span className="text-success fw-bold">•</span>{' '}
                <strong>Internship Opportunities:</strong> Placements in hospitals, health centers, and pharmacies.
              </ListGroup.Item>
              <ListGroup.Item className="border-0 ps-0">
                <span className="text-success fw-bold">•</span>{' '}
                <strong>Career Counseling:</strong> Guidance for job readiness and further education.
              </ListGroup.Item>
              <ListGroup.Item className="border-0 ps-0">
                <span className="text-success fw-bold">•</span>{' '}
                <strong>CTEVT Affiliation:</strong> Recognized diplomas with nationwide value.
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Image Section */}
          <Col md={6} className="mt-4 mt-md-0">
            <Row>
              <Col xs={12} className="mb-3">
                <div className="image-wrapper">
                  <Image
                    src={Feature1}
                    alt="HVTC students"
                    className="animated-image"
                    fluid
                  />
                </div>
              </Col>
              <Col xs={12}>
                <div className="image-wrapper">
                  <Image
                    src={Feature2}
                    alt="Award-winning students"
                    className="animated-image"
                    fluid
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Floating Call Button */}
      <a
        href="tel:+9779800000000"
        className="position-fixed"
        style={{
          bottom: '20px',
          right: '20px',
          backgroundColor: '#25d366',
          color: 'white',
          borderRadius: '50%',
          padding: '15px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          zIndex: 1050,
        }}
      >
        <i className="bi bi-telephone-fill fs-4"></i>
      </a>
    </div>
  );
};

export default HVTCFeatures;
