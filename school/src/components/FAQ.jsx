import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './FAQ.css';

const faqs = [
  {
    question: 'What does the PCL in General Medicine (HA) program at HVTC focus on?',
    answer: 'It focuses on developing clinical skills and theoretical knowledge in general medicine, preparing students for primary healthcare delivery.',
  },
  {
    question: 'What practical experience is included in the PCL in General Medicine (HA) program?',
    answer: 'Students undergo hospital rotations, community outreach, and supervised clinical practice as part of their training.',
  },
  {
    question: 'What career paths can graduates of the PCL in General Medicine (HA) pursue?',
    answer: 'Graduates can work in hospitals, clinics, public health programs, or pursue further medical education.',
  },
  {
    question: 'What is the main goal of the Diploma in Pharmacy program at HVTC?',
    answer: 'The program aims to produce skilled pharmacy professionals capable of managing drug stores, preparing medications, and ensuring proper drug use.',
  },
  {
    question: 'What practical training is included in the Diploma in Pharmacy program?',
    answer: 'It includes internships in pharmacies, hands-on drug dispensing, compounding exercises, and industry visits.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (i) => {
    setActiveIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="faq-section py-5">
      <Container>
        <h2 className="text-center mb-4 fw-bold text-primary">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggle(index)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="answer-text">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
