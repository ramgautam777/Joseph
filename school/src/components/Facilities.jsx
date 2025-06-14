import React from 'react';
import './Facilities.css';
import { Container } from 'react-bootstrap';

const Facilities = () => {
  return (
    <div className="course-section">
      <Container className="text-center py-5">
        <h2 className="course-title">
          <span className="text-blue animate-left">Explore</span>{' '}
          <span className="text-red animate-right">Our Activities</span>
        </h2>
              <p className="course-subtext fade-in-delay">Your academic goals are waiting to be achieved</p>

              <h2 className="text-success   animate-left ">
                  <ul style={{textAlign:'justify'}}>
                      <li>Having suffiecient area of  Play Ground  for sports</li>
                      <li>Multiple Buses are Available for  School Bus Service </li>
                      <li> Class Programs are also arranged in St.joseph Academy</li>
                      <li> Extracurricular Activities are done. </li>
                  </ul>
              </h2> 
              

      </Container>
    </div>
  );
};

export default Facilities;
