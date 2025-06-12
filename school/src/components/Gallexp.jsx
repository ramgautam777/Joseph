import React from 'react';
import './Gallexp.css'; // Custom CSS for animation
import { Container } from 'react-bootstrap';
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

const images = [Out1, Out2, Out3,Out4,Out5,Out6,Out7,Out8,Out9,Out10,Out11,Stparent,Teacher,Tmeet
  
];

const GalleryCarousel = () => {
  return (
    <section className="py-5 bg-white">
      <h2 className="text-center fw-bold mb-4">
        <span className="text-primary">Explore</span> <span className="text-danger">Gallery</span>
        <div className="underline mx-auto mt-2"></div>
      </h2>
      <Container fluid className="overflow-hidden">
        <div className="marquee">
          <div className="marquee-content">
            {images.map((src, idx) => (
              <div className="marquee-item" key={idx}>
                <img src={src} alt={`Gallery ${idx}`} className="img-fluid rounded shadow" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GalleryCarousel;
