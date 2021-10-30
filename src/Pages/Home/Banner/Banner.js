import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/wheels-with-modern-alu-rims-on-black-picture-id1284747203?k=20&m=1284747203&s=612x612&w=0&h=5YNTz-Ec-85t5CsuQ6YM3n4HYikcZJ80x3BQY7wtqKE="
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/car-mechanic-screwing-the-wheel-at-auto-repair-garage-picture-id1145228455?k=20&m=1145228455&s=612x612&w=0&h=1n-sF6oK7En7eDxXDzswgKp5sxXY4Vk-L-qtMsNe7aY="
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/banner-of-automobile-mechanic-man-and-team-checking-car-damage-broken-picture-id1219401440?k=20&m=1219401440&s=612x612&w=0&h=URQ7p6f_FhapsZ50BipAKtCmJmbw7Awjqy0NBIRFVso="
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        
        </>
    );
};


export default Banner;