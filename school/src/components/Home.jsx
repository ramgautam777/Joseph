import React from 'react';
import { Container, Button, Carousel } from 'react-bootstrap';
import Sclbanner from '../images/sclbanner.jpg';
import Img18 from '../images/img2.jpg';
import MissionVisionValues from './MissionVisionValues';
import Facilities from './Facilities';
import Academy from './Academy';
import Features from './Features';
import SchoolMember from './SchoolMember';
import Achievements from './Achievements';
import FAQ from './FAQ';
import Galleryexp from './Gallexp';
import Contact from './Contact';

function Home() {
  return (
    <Container className="text-center " >
      <h1 className="mb-4">Welcome to St. Joseph's English Academy</h1>
      <p className="lead mb-4">Empowering students for a bright future!</p>

      <Carousel className="mb-4">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Sclbanner}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Inspire Learning</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img18}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Excellence in Education</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Button variant="primary" href="/about">Learn More</Button>
      
      <MissionVisionValues />
      <Facilities />
      <Academy />
      <Features />
      <SchoolMember />
      <Achievements />
      <FAQ />
      <Galleryexp />
      <Contact />
       
     
    </Container>
  
   
  );
}

  

export default Home;
