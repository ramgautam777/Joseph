import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Gallery.css'; // ⬅️ Import the CSS

import Img2 from '../images/img2.jpg';
import Img3 from '../images/img3.jpg';
import Img4 from '../images/img4.jpg';
import Img6 from '../images/img6.jpg';
import Img7 from '../images/img7.jpg';
import Img8 from '../images/img8.jpg';
import Img9 from '../images/img9.jpg';
import Img14 from '../images/img14.jpg';
import Img15 from '../images/img15.jpg';
import Img17 from '../images/img17.jpg';
import Img19 from '../images/img19.jpg';
import Img21 from '../images/img21.jpg';
import Img22 from '../images/img22.jpg';
import Img23 from '../images/img23.jpg';
import Img24 from '../images/img24.jpg';
import Img25 from '../images/img25.jpg';
import Img27 from '../images/img27.jpg';
import Img28 from '../images/img28.jpg';
import Img29 from '../images/img29.jpg';
import Img30 from '../images/img30.jpg';
import Img31 from '../images/img31.jpg';
import Img32 from '../images/img32.jpg';
import Img33 from '../images/img33.jpg';
import Img34 from '../images/img43.jpg';
import Img36 from '../images/img36.jpg';
import Img37 from '../images/img37.jpg';
import Img38 from '../images/img38.jpg';
import Img39 from '../images/img39.jpg';
import Img40 from '../images/img40.jpg';

import Out1 from '../images/out1.jpg';
import Out2 from '../images/out2.jpg';
import Out3 from '../images/out3.jpg';
import Out4 from '../images/out4.jpg';
import Out5 from '../images/out5.jpg';
import Out6 from '../images/out6.jpg';
import Out7 from '../images/out7.jpg';
import Out8 from '../images/out8.jpg';
import Out9 from '../images/out9.jpg';
import Out10 from '../images/out10.jpg';
import Out11 from '../images/out11.jpg';
import Stparent from '../images/stparent.jpg';
import Teacher from '../images/teacher.jpg';
import Tmeet from '../images/tmeet.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Gallery = () => {
  const campusImages = [
    { src: Img2, alt: 'Group Photo on Stairs' },
    { src: Img3, alt: 'Indoor Football Team' },
    { src: Img4, alt: 'Team Posing Indoors' },
    { src: Img6, alt: 'Outdoor Group by Bus' },
    { src: Img7, alt: 'Campus Event' },
    { src: Img8, alt: 'Campus Activity' },
    { src: Img9, alt: 'Campus Function' },
    { src: Img14, alt: 'Group Shot' },
    { src: Img15, alt: 'Sports Day' },
    { src: Img17, alt: 'Indoor Event' },
    { src: Img19, alt: 'Outdoor Gathering' },
    { src: Img21, alt: 'Celebration' },
    { src: Img22, alt: 'Indoor Function' },
    { src: Img23, alt: 'Team Activity' },
    { src: Img24, alt: 'Cultural Show' },
    { src: Img25, alt: 'Award Ceremony' },
    { src: Img27, alt: 'Function Hall' },
    { src: Img28, alt: 'Event Group' },
    { src: Img29, alt: 'Performance' },
    { src: Img30, alt: 'Classroom Activity' },
    { src: Img31, alt: 'Sports Event' },
    { src: Img32, alt: 'Outdoor Meet' },
    { src: Img33, alt: 'Cultural Dress' },
    { src: Img34, alt: 'Stage Performance' },
    { src: Img36, alt: 'Lecture' },
    { src: Img37, alt: 'Class Photo' },
    { src: Img38, alt: 'Morning Assembly' },
    { src: Img39, alt: 'Poster Making' },
    { src: Img40, alt: 'Indoor Seminar' },
  ];

  const lotcImages = [
    { src: Out1, alt: 'Health Camp Poster Group' },
    { src: Out2, alt: 'Students in Uniform Outside Gate' },
    { src: Out3, alt: 'Outdoor Presentation with Models' },
    { src: Out4, alt: 'Teaching Session on Dengue' },
    { src: Out5, alt: 'Student Holding Model on Field' },
    { src: Out6, alt: 'Field Model Demonstration' },
    { src: Out7, alt: 'Student Demonstration' },
    { src: Out8, alt: 'Student with Chart' },
    { src: Out9, alt: 'Outdoor Awareness Drive' },
    { src: Out10, alt: 'Medical Camp Participation' },
    { src: Out11, alt: 'Public Health Model Display' },
    { src: Stparent, alt: 'Parent Engagement Activity' },
    { src: Teacher, alt: 'Teacher Addressing Students' },
    { src: Tmeet, alt: 'Community Meeting' }
  ];

  return (
    <Container className="py-5">
      {/* Campus Gallery Section */}
      <motion.h2
        className="text-center text-primary mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        St. Joseph Academy English School Gallery
      </motion.h2>

      <motion.div variants={staggerContainer} initial="hidden" animate="visible">
        <Row className="g-4 mb-5">
          {campusImages.map((img, idx) => (
            <Col key={idx} xs={12} sm={6} md={4} lg={3}>
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  className="gallery-img shadow-sm"
                />
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>

      {/* LOTC Section */}
      <motion.h2
        className="text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Community Work / <span className="text-decoration-underline" style={{ color: 'blue' }}>Learning Outside the Classroom (LOTC)</span>
      </motion.h2>

      <motion.div variants={staggerContainer} initial="hidden" animate="visible">
        <Row className="g-4">
          {lotcImages.map((img, idx) => (
            <Col key={idx} xs={12} sm={6} md={4} lg={3}>
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  className="gallery-img shadow-sm"
                />
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </Container>
  );
};

export default Gallery;
