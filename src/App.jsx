import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import cardImg from '../public/Assets/Card-1.jpg';
import Table from './components/Table';
import { Carousel } from 'react-bootstrap'; // Import Carousel from react-bootstrap
import Footer from './components/Footer';
import ExampleCarouselImage from '../public/Assets/hero-img.jpg'; // Ensure this path is correct

const App = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container d-flex justify-content-between">
        <Card data={cardImg} />
        <Card data={cardImg} />
        <Card data={cardImg} />
      </div>
      <Table />
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {/* First Slide */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ExampleCarouselImage}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First Slide Label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Second Slide */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ExampleCarouselImage}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second Slide Label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Third Slide */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ExampleCarouselImage}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third Slide Label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Footer />
    </>
  );
};

export default App;