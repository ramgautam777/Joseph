import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import {
  FaUsers, FaBriefcase, FaGlobe, FaUserGraduate,
} from 'react-icons/fa';
import { BsPersonBadgeFill } from 'react-icons/bs';
import './Achievements.css';

const data = [
  { icon: <FaUsers />, color: 'blue', label: 'Students Enrolled', value: 2287 },
  { icon: <BsPersonBadgeFill />, color: 'green', label: 'Govt. Service', value: 17.66, percent: true },
  { icon: <FaBriefcase />, color: 'orange', label: 'Private Sector', value: 35.16, percent: true },
  { icon: <FaGlobe />, color: 'purple', label: 'Foreign Study/Work', value: 27.61, percent: true },
  { icon: <FaUserGraduate />, color: 'deeppink', label: 'Self Employed', value: 19.55, percent: true },
];

const Achievements = () => {
  return (
    <section className="achievements-section text-center py-5">
      <h2 className="mb-3 fw-bold">
        Our <span className="text-danger">Achievements</span>
      </h2>
      <p className="text-muted mb-5 px-3">
        St.Joseph English Academy School celebrates success through excellence in academics and professional placements,
        reflecting our dedication and dynamic learning environment.
      </p>

      <Container>
        <Row className="justify-content-center gy-4">
          {data.map((item, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={2} className="d-flex justify-content-center">
              <motion.div
                className="achievement-card"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="icon-circle" style={{ backgroundColor: item.color }}>
                  {item.icon}
                </div>
                <div className="label">{item.label}</div>
                <div className="number text-danger fw-bold fs-4">
                  <CountUp
                    end={item.value}
                    duration={2}
                    decimals={item.percent ? 2 : 0}
                    suffix={item.percent ? '%' : ''}
                  />
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Achievements;
