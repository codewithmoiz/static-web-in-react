import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <Container>
        <Row>
          {/* About Us Section */}
          <Col md={3} className="mb-4">
            <h5>About Us</h5>
            <p>
              We are a leading company in our industry, providing top-notch
              products and services to our valued customers. Our mission is to
              deliver exceptional value through innovative solutions.
            </p>
          </Col>

          {/* Quick Links Section */}
          <Col md={3} className="mb-4">
            <h5>Quick Links</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className="bg-dark text-white border-0 p-0">
                <a href="/" className="text-white">Home</a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-white border-0 p-0">
                <a href="/about" className="text-white">About Us</a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-white border-0 p-0">
                <a href="/services" className="text-white">Services</a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-white border-0 p-0">
                <a href="/contact" className="text-white">Contact</a>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Contact Info Section */}
          <Col md={3} className="mb-4">
            <h5>Contact Us</h5>
            <p>
              123 Main Street, Anytown, USA<br />
              Phone: (123) 456-7890<br />
              Email: info@yourcompany.com
            </p>
          </Col>

          {/* Social Media Section */}
          <Col md={3} className="mb-4">
            <h5>Follow Us</h5>
            <div className="d-flex">
              <a href="https://facebook.com" className="text-white me-3">
                <FaFacebookF size={20} />
              </a>
              <a href="https://twitter.com" className="text-white me-3">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-white me-3">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-white">
                <FaLinkedin size={20} />
              </a>
            </div>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row className="mt-4">
          <Col className="text-center">
            <p className="mb-0">&copy; 2024 Your Company Name. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
