import React from 'react';
import { Container, Row, Col, Card,  } from 'react-bootstrap';



const Academy = () => {
  return (
    <div className="bg-light text-dark">
      {/* Header */}
      <div className="text-center  text-blue py-4 ">
        <h1 className="fw-bold">About St.Joseph English School</h1>
      </div>

      <Container className="py-5">
        <Row className="align-items-center">
          {/* Icons and Text */}
          <Col md={5} className="mb-4 mb-md-0">
            <Card className="text-center border-0">
              <Card.Body>
                <Row className="mb-4">
                  <Col xs={6}>
                    <div className="bg-primary text-white rounded-circle p-4 mx-auto" style={{ width: '80px', height: '80px' }}>
                      <i className="bi bi-shield-plus fs-3"></i>
                    </div>
                    <p className="mt-2 fw-semibold">Quality Healthcare</p>
                  </Col>
                  <Col xs={6}>
                    <div className="bg-warning text-white rounded-circle p-4 mx-auto" style={{ width: '80px', height: '80px' }}>
                      <i className="bi bi-easel fs-3"></i>
                    </div>
                    <p className="mt-2 fw-semibold">Practical Training</p>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col xs={6}>
                    <div className="bg-warning text-white rounded-circle p-4 mx-auto" style={{ width: '80px', height: '80px' }}>
                      <i className="bi bi-mortarboard fs-3"></i>
                    </div>
                    <p className="mt-2 fw-semibold">Academic Excellence</p>
                  </Col>
                  <Col xs={6}>
                    <div className="bg-primary text-white rounded-circle p-4 mx-auto" style={{ width: '80px', height: '80px' }}>
                      <i className="bi bi-people fs-3"></i>
                    </div>
                    <p className="mt-2 fw-semibold">Community Focus</p>
                  </Col>
                </Row>
                <h4 className="fw-bold mt-4">St.Joseph English Academy School</h4>
              </Card.Body>
            </Card>
          </Col>

          {/* Description */}
          <Col md={7}>
            <Card className="shadow-sm">
              <Card.Body>
                <h2 className="fw-bold text-blue mb-4">Welcome to St.joseph English Academy</h2>
                <p style={{textAlign:'justify'}}>
                  St. Joseph English Academy School was founded with a mission to produce skilled middle-level health professionals ready for immediate employment, especially in rural areas. The School emphasizes comprehensive healthcare training—covering preventive, promotive, curative, managerial, and rehabilitative care.
                </p>
                
                
                <p style={{textAlign:'justify'}}>
                  To support inclusive education and academic excellence, SJEA offers scholarships to deserving students. Three scholarships are awarded annually to students from Category 3, as designated by Board, to promote diversity and support underrepresented backgrounds. Additionally, a merit-based scholarship is granted each year to recognize outstanding academic performance. Through these initiatives, SJEA reinforces its commitment to accessible, high-quality healthcare education and the development of compassionate, competent professionals.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Academy;
