import React from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

function Contact() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="container my-5 px-3"
    >
      {/* Map Section */}
      <motion.div variants={fadeInUp}>
        <h2 className="text-center">
          <span style={{ color: 'blue', fontWeight: 'bold' }}>Find </span>
          <span style={{ color: 'red', fontWeight: 'bold' }}>Us on the Map</span>
        </h2>
        <p className="text-jusitify text-center fs-10 mt-3" >
          St.Joseph English Academy School is located in the heart of Kathmandu. Click the map below to view our exact location on Google Maps and get directions to visit our campus.
        </p>
      </motion.div>

      <motion.div
        className="map-embed mt-4 d-flex justify-content-center"
        variants={fadeInUp}
      >
        <iframe
          title="St. Joseph English Academy Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.296209087729!2d85.33703141506196!3d27.70619488279183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1973abf279c5%3A0x2b4e0d0f768cf409!2sHoly%20Vision%20Technical%20Campus!5e0!3m2!1sen!2snp!4v1718100300000!5m2!1sen!2snp"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: '12px', maxWidth: '1000px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>

      {/* Contact Info Section */}
      <Container fluid className="px-0">
        <motion.div
          className="contact-info-section py-5 px-3"
          style={{
            background: 'linear-gradient(135deg, #1f4f4f, #205c5c)',
            color: 'white',
          }}
          variants={fadeInUp}
        >
          <Container>
            <Row className="g-4">
              {/* Contact Form */}
              <Col xs={12} lg={6}>
                <motion.div
                  className="bg-white text-dark p-4 rounded-4 shadow-lg h-100"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="fw-bold text-center mb-4">Direct Contact Us</h3>
                  <Form>
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>E-mail</Form.Label>
                      <Form.Control type="email" placeholder="example@gmail.com" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="phone">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="text" placeholder="Enter your phone number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="message">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows={3} placeholder="Write your message..." />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                      Send Message
                    </Button>
                  </Form>
                </motion.div>
              </Col>

              {/* Info Text */}
              <Col xs={12} lg={6}>
                <motion.div className="h-100" variants={fadeInUp}>
                  <h2 className="fw-bold text-center mb-3">St. Joseph English Academy School</h2>
                  <p style={{ fontSize: '1.1rem', textAlign: 'justify' }}>
                    St. Joseph English Academy provides a safe, inclusive, and inspiring learning environment. We encourage academic excellence, creativity, and personal growth.
                  </p>
                  <p style={{ fontSize: '1.1rem', textAlign: 'justify' }}>
                    Our state-of-the-art simulation labs and expert-led courses ensure a top-tier academic environment tailored for future professionals.
                  </p>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </motion.div>
      </Container>

      {/* Contact Cards */}
      <Container className="my-5 text-center">
        <motion.h2 className="mb-4 text-primary fw-bold" variants={fadeInUp}>
          Contact Us
        </motion.h2>
        <Row className="gy-4">
          {[
            {
              icon: <FaMapMarkerAlt size={40} className="text-primary mb-3" />,
              title: 'Our Location',
              content: <>BudhanilKantha-7, Golfutar<br />Kathmandu, Nepal</>
            },
            {
              icon: <FaPhoneAlt size={40} className="text-primary mb-3" />,
              title: 'Telephone',
              content: <>
                01-4370215<br />
                01-4371715
              </>
            },
            {
              icon: <FaEnvelope size={40} className="text-primary mb-3" />,
              title: 'Mail Us',
              content: 'stjosephs.edu.np@gmail.com'
            }
          ].map((item, index) => (
            <Col xs={12} md={4} key={index}>
              <motion.div
                variants={fadeInUp}
                custom={index}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="shadow-sm p-4 h-100">
                  {item.icon}
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="mb-0">{item.content}</p>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.div>
  );
}

export default Contact;
