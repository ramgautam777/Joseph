import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './SchoolMember.css';

const boardMembers = [
  { name: 'loremmm', title: 'Principal, ' },
  { name: 'loremmmm', title: 'Vice-Principal' },
  { name: 'loremmmm', title: 'co-ordinator' },
  { name: 'loremmmm', title: 'Accountant' },
  { name: 'loremmmmm', title: 'Teacher' },
  { name: 'loremmmm', title: 'Teacher' },
  { name: 'loremmmm', title: 'Teacher' },
];

const SchoolMember = () => {
  return (
    <div className="board-section py-5">
      <Container>
        <h2 className="board-title text-center mb-5">
          <span className="blue-text">Members</span> <span className="red-text">of Schools</span>
          <div className="underline mx-auto mt-2"></div>
        </h2>

        <Row className="g-4 justify-content-center">
          {boardMembers.map((member, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Card className="board-card text-center h-100">
                <Card.Body>
                  <Card.Title className="fw-bold">{member.name}</Card.Title>
                  <Card.Text className="text-muted">{member.title}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SchoolMember;
