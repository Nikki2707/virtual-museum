import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Link , NavLink } from 'react-router-dom';
import Collapse from 'react-bootstrap/Collapse';
import './Homepage.css';
 
function Homepage(){
  const [apod, setApod] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Fetch Astronomy Picture of the Day
    axios.get('https://api.nasa.gov/planetary/apod?api_key=diO51zeLGvrk6PIn1wIqHeW94DZR9uRB1Z2agnh6')
      .then(response => {
        setApod(response.data);
      })
      .catch(error => {
        console.error('Error fetching APOD:', error);
      });
  })

    return(
      <>
      <div class="bg-dark text-light p-4">
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Virtual-Museum</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link><Link to={"/aboutus"} className="nav-link">About Us</Link></Nav.Link>   
              <Nav.Link><Link to={"/events"} className="nav-link">Events</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      </div>
      <div class="bg-dark text-light p-4">
      <h3 class="display-4 fw-bold">
         <p>Explore dreams, surrealism, <br />
          and the subconcious mind
          </p>
        </h3>
        
        <Button style={{marginBottom:"2rem"}}> 
        <Link to={"/Explore"} className="nav-link">Explore</Link>
        </Button>
        
        
     
    <Col>
      <Row> 
      <Card className="event-card">
      {/* <Card.Body>
      <h6>Astronomy Picture of the Day</h6>
      </Card.Body> */}
        <Card.Img variant="top" src={apod.url} className="zoomable-picture" />
        <Card.Body>
        <Card.Title style={{color:"white"}} >{apod.title}</Card.Title>
        <Card.Text style={{color:"white"}}>
        Astronomy Picture of the Day
        </Card.Text>
        <Button variant="primary" onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        >Know more
        </Button>
        <Collapse in={open}>
        <div style={{color:"white"}} id="example-collapse-text">
          {apod.explanation}
        </div>
      </Collapse>
      </Card.Body>
      </Card>

      <Card className="event-card">
        <Card.Img variant="top" src="https://imageio.forbes.com/specials-images/imageserve/577c129fd7c6ee6a37c42b99/This-is-the-Milky-Way-from-Concordia-Camp--in-Pakistan-s-Karakoram-Range-/960x0.jpg?format=jpg&width=960" className="zoomable-picture" />
        <Card.Body>
        <Card.Title style={{color:"white"}}>Explore the gallery</Card.Title>
        <Button>
        <Link to={"/Explore"} className="nav-link">Explore</Link>
        </Button>
        </Card.Body>
      </Card>

      <Card className="event-card">
        <Card.Img variant="top" src="https://c4.wallpaperflare.com/wallpaper/363/364/42/mars-space-light-surface-wallpaper-preview.jpg" className="zoomable-picture" />
        <Card.Body>
        <Card.Title style={{color:"white"}}>Mars Corner</Card.Title>
        <Button>
        <Link to={"/Mars"} className="nav-link">Explore</Link>
        </Button>
        </Card.Body>
      </Card>
      </Row>
    </Col>
    </div>
      
  </>        
    );
}
export default Homepage;
