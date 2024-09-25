import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import heroImg from '../../public/Assets/hero-img.jpg'

function HeroSection() {
  return (
    <Container fluid style={{backgroundColor: '#f8f9fa'}}>
    <Container className="hero-section d-flex align-items-center" style={{ minHeight: '100vh' }}>
      <Row className="w-100">
        {/* Text Block */}
        <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-lg-start">
          <h1 className="display-4 fw-medium">Welcome to Your Adventure</h1>
          <p className="lead">Explore the world with our travel packages tailored just for you.</p>
          <Button variant="primary" size="lg" className='border-0' style={{backgroundColor: '#099f1a'}}>Get Started</Button>
        </Col>

        {/* Image Block */}
        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
          <img
            src={heroImg}
            alt="Travel Adventure"
            className="img-fluid rounded"
            style={{ maxHeight: '400px' }}
          />
        </Col>
      </Row>
    </Container>
    </Container>
  );
}

export default HeroSection;