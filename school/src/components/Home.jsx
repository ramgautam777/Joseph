import React from 'react';
import { Container, Button, Carousel } from 'react-bootstrap';
import Img4 from '../images/img4.jpg';
import Img14 from '../images/img14.jpg';
import Img18 from '../images/img18.jpg';
import Img25 from '../images/img25.jpg';
import Img32 from '../images/img32.jpg';
import Img33 from '../images/img33.jpg';
import Img37 from '../images/img37.jpg';
import Img38 from '../images/img38.jpg';
//import MissionVisionValues from './MissionVisionValues';
import Facilities from './Facilities';
import Academy from './Academy';
import Features from './Features';
import SchoolMember from './SchoolMember';
import Achievements from './Achievements';
import FAQ from './FAQ';
import Galleryexp from './Gallexp';
import Contact from './Contact';
import '../components/Home.css';

function Home() {
  return (
    <Container className="text-center " >
      <Carousel className="mb-0">
        <Carousel.Item>
          <img
          className="carousel-img"
           src={Img4}
            alt="First slide"
             />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img "
            src={Img18}
            alt="Second slide"
            
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img "
            src={Img14}
            alt="Third slide"
            
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src={Img25}
            alt="fourth slide"
           
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src={Img32}
            alt="fifth slide"
            
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img "
            src={Img33}
            alt="Sixth slide"
            
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img "
            src={Img37}
            alt="Seventh slide"
           
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img "
            src={Img38}
            alt="eighth slide"
            
          />
        </Carousel.Item>
      </Carousel>
      <h2 className="course-title">
          <span className="text-blue animate-left">Welcome To</span>{' '}
          <span className="text-red animate-right">St. Joseph English Academy</span>
        </h2>
      <p className="lead mb-4">Empowering students for a bright future!</p>

      
      

      <Button variant="primary" href="/about">Learn More</Button>
      
      
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
