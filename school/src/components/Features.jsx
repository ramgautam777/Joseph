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
            <h2 className="fw-bold mb-3 text-blue">Empower Your Career with St. Joseph English Academy</h2>
            <p className="text-muted mb-4" style={{textAlign:'justify'}}>
              At St. Joseph English Academy School, we provide comprehensive 
              education with personalized support for your academic and professional growth.
            </p>
            <ListGroup variant="flush">
              <ListGroup.Item className="border-0 ps-0">
                <span className="text-success fw-bold">•</span>{' '}
                <strong>CHILD FRIENDLY CLASSROOM:</strong><p style={{textAlign:'justify'}}> Cozy and well furnished classrooms which help to foster children learning activities, amicable environment and accommodate children comfortably.</p>
              </ListGroup.Item>
              <ListGroup.Item className="border-0 ps-0">
                <span className="text-success fw-bold">•</span>{' '}
                <strong>MULTI ACTIVITIES</strong><p style={{textAlign:'justify'}}>Children are encouraged to pursue their own talent while some children may be independently busy in practical works.</p>
              </ListGroup.Item>
              <ListGroup.Item className="border-0 ps-0">
                <span className="text-success fw-bold">•</span>{' '}
                <strong>FREEDOM TO LEARN</strong> <p style={{textAlign:'justify'}}>Children will be given chance to explore the activities they want the most and spents as much as time on that activities to froster self discipline as well as empower themselves for solving problems, skills and enhance them for life long learning. </p>
              </ListGroup.Item>
              <ListGroup.Item className="border-0 ps-0">
                <span className="text-success fw-bold">•</span>{' '}
                <strong>CARING, COMPASSIONATE COMMUNITY</strong><p style={{textAlign:'justify'}}>In a supportive & collaborative classroom environment, children learn, self awareness, self-discipline, as well as kindness and respect for others. Developing the emotional and social well being for children is just as important as intellectual and academic development.</p>
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
