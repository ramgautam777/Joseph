import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './FAQ.css';

const faqs = [
  {
    question: 'What are the admission requirements?',
    answer: 'We require the student’s previous academic records, birth certificate, passport-size photographs, and completed admission form. For specific grades, an entrance test may also be required.',
  },
  {
    question: 'Are extracurricular activities available?',
    answer: 'Yes. We offer a range of activities such as sports, music, dance, art, yoga, and clubs like Science Club, Literature Club, and Eco Club..',
  },
  {
    question: ' How can parents communicate with teachers?',
    answer: 'We schedule regular parent-teacher meetings and also provide access to a digital portal where parents can message teachers directly or book appointments.',
  },
  {
    question: 'Are there any scholarships or discounts?',
    answer: 'Yes, scholarships are offered based on merit, need, and extracurricular performance. Please contact the office for eligibility.',
  },
  {
    question: 'Does the school have a library and computer lab?',
    answer: 'Yes, our school includes a well-stocked library and modern computer lab accessible to all students.',
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
