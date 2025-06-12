import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './MissionVisionValues.css'; // Custom CSS

import { FaChalkboardTeacher, FaUsers, FaFlag } from 'react-icons/fa';

function MissionVisionValues() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const cards = [
    {
      icon: <FaChalkboardTeacher className="animated-icon" />,
      title: 'OUR MISSION',
      text: 'To empower students with high-quality, affordable, and practical education in health sciences, cultivating compassionate healthcare professionals ready to serve their communities.',
    },
    {
      icon: <FaUsers className="animated-icon" />,
      title: 'OUR VISION',
      text: 'To become a center of academic excellence, producing globally competent and children will be given chance to explore the activities they want most and spent as much as time on that activities.',
    },
    {
      icon: <FaFlag className="animated-icon" />,
      title: 'OUR VALUES',
      text: 'Integrity, compassion, and academic excellence form the core of our values. We strive to build a nurturing environment that inspires students to achieve their highest potential.',
    },
  ];

  return (
    <Container className="py-5 mission-container">
      <Row className="g-4">
        {cards.map((card, idx) => (
          <Col lg={4} md={6} sm={12} key={idx} data-aos="zoom-in" data-aos-delay={idx * 200}>
            <Card className="text-center p-4 mission-card">
              <div className="icon-wrapper">{card.icon}</div>
              <Card.Body>
                <Card.Title className="fw-bold mb-3 fade-in-text">{card.title}</Card.Title>
                <Card.Text className="fade-in-text delay">{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MissionVisionValues;
