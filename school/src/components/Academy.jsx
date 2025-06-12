import React from 'react';
import { Container, Row, Col, Card,  } from 'react-bootstrap';



const Academy = () => {
  return (
    <div className="bg-light text-dark">
      {/* Header */}
      <div className="text-center bg-info text-white py-4">
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
                <h2 className="fw-bold text-info mb-4">Welcome to St.joseph English Academy</h2>
                <p>
                  St. Joseph English Academy School was founded with a mission to produce skilled middle-level health professionals ready for immediate employment, especially in rural areas. The institution emphasizes comprehensive healthcare training—covering preventive, promotive, curative, managerial, and rehabilitative care.
                </p>
                <p>
                  Over the years, SJEA has maintained a strong track record of academic excellence, with many graduates achieving distinction and first division marks, going on to serve in both local and international healthcare settings.
                </p>
                <p>
                  HVTC offers a range of CTEVT-affiliated and nationally recognized programs, including the Proficiency Certificate Level in Nursing (since 2002), General Medicine (Health Assistant, since 2003), Diploma in Pharmacy (since 2004), and the newly launched Caregiver Program. These programs are approved by regulatory bodies such as the Nepal Nursing Council, Nepal Health Professional Council, and Nepal Pharmacy Council, and are recognized by Tribhuvan University.
                </p>
                <p>
                  The institution takes pride in its experienced faculty, strong pass rates, hands-on practical training, and career-focused education designed to meet the growing needs of the healthcare sector.
                </p>
                <p>
                  To support inclusive education and academic excellence, HVTC offers scholarships to deserving students. Three scholarships are awarded annually to students from Category 3, as designated by CTEVT, to promote diversity and support underrepresented backgrounds. Additionally, a merit-based scholarship is granted each year to recognize outstanding academic performance. Through these initiatives, HVTC reinforces its commitment to accessible, high-quality healthcare education and the development of compassionate, competent professionals.
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
