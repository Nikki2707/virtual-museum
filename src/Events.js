import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Events(){
    return(
      <>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/jerrick/image/upload/c_scale,f_jpg,q_auto/651a6adae63932001d432d95.jpg"
          alt="First slide"
          height="490px"
          width="400px"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/jerrick/image/upload/c_scale,f_jpg,q_auto/651a6adae63932001d432d95.jpg"
          alt="Second slide"
          height="490px"
          width="400px"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/jerrick/image/upload/c_scale,f_jpg,q_auto/651a6adae63932001d432d95.jpg"
          alt="Third slide"
          height="490px"
          width="400px"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Events;