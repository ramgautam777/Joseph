import React from 'react';
import '../components/About.css'; // Create this CSS file
import Mission from '../images/mission.jpg' // Replace with your correct image path


function About() {
  return (
    <div className="about-page">
      <div className="about-header text-center">
        <h1>
          Welcome to <span className="highlight">St. Joseph English Academy</span>
        </h1>
        <p className="subheading">Empowering young minds through quality education and holistic development.</p>
      </div>

      <div className="about-content container d-flex flex-wrap align-items-center justify-content-center mt-5">
        <div className="about-image">
          <img src={Mission} alt="Campus" className="img-fluid rounded-img" />
        </div>
        <div className="about-text ms-4">
          <h2 className="mission-title">Our Mission</h2>
          <p style={{textAlign:'justify'}}>
            St.Joseph's montessory is the best school
            for learning by doing as well as cultivates healthy behaviour of the kids.
            Children are encouraged to pursue their own talent While some children may be
            independently busy in their practical works and others may be working together 
            collaboratively on reading project.
            
          </p>
        </div>
        
      </div>
     <div className="why-choose-section">
  <h2>Why Choose Us?</h2>
  <ul>
    <li>Experienced faculty with real-world expertise</li>
    <li>Excellent academic performance and pass rates</li>
    <li>Strong focus on practical training and rural health service</li>
    <li>Supportive learning environment</li>
    <li>Career-focused programs with job placement assistance</li>
  </ul>
</div>

<div className="scholarship-section">
  <h2>Scholarship Opportunities</h2>
  <p>
    St.Joseph's English Academy  offers inclusive scholarships for students from underrepresented groups and a merit-based scholarship
    for top performers in the school based on ranking, discipline maintained and regular students and promoting access and excellence in education.
  </p>
</div>
<div className="principal-section container mt-5 p-4 shadow-sm rounded bg-white">
  <h2 className="text-primary fw-bold mb-4 text-center">Message from the Principal</h2>
  <div className="row align-items-start">
    <div className="col-md-4 text-center mb-4 mb-md-0">
      <img
        src={require('../images/principal.jpeg')} // Change path to your actual image location
        alt="Principal"
        className="img-fluid rounded shadow"
      />
    </div>
    <div className="col-md-8">
      <p style={{textAlign:'justify'}}>
        <strong>Principal Bishwa Bandhu Subedi</strong> St.Joseph Academy English School with a robust foundation built upon
        <strong> 30 years of leadership </strong> in technical education and vocational training at <strong>CTEVT</strong>, culminating in
        his retirement as a 1st class officer. His extensive experience in the health sector—including service as a 
        <strong> District Health Officer</strong> and <strong>Health Coordinator</strong> in remote regions like 
        <strong> Jumla</strong> and <strong>Manang</strong>—underscores his deep commitment to community care.
      </p>
      <p style={{textAlign:'justify'}}>
        Holding a <strong>Post Graduate Diploma in Health Education</strong> and a <strong>Master’s in Sociology & Anthropology</strong>, 
        he brings academic depth to his leadership. His professional affiliations include life membership in the 
        <strong> Public Health Association of Nepal</strong> and the <strong>Health Professional Council</strong>.
      </p>
      <p style={{textAlign:'justify'}}>
        Under his guidance, HVTC remains aligned with CTEVT’s mission of producing skilled health professionals. 
        Our graduates excel in government, private, and international sectors due to the institution’s focus on 
        <strong> practical skills, quality education</strong>, and community values.
            </p>
            ...
<p style={{textAlign:'justify'}}>
  For <strong>SEE graduates</strong> dreaming of a future in healthcare, HVTC is your launchpad. With highly qualified faculty, advanced lab facilities, and a nurturing environment, we are committed to shaping the health heroes of tomorrow.
</p>

<p className="text-end mt-4 fw-semibold">
  <span className="text-primary">— Bishwa Bandhu Subedi, Principal</span>
</p>

    </div>
  </div>
</div>

</div>

   
  );
}

export default About;
