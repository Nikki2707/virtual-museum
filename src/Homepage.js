import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Card, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Link , NavLink } from 'react-router-dom';
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
      <div class="bg-dark text-light p-4" style={{alignItems:"center"}}>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Virtual-Museum</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link><Link to={"/aboutus"} className="nav-link">About Us</Link></Nav.Link>   
              <Nav.Link><Link to={"/events"} className="nav-link">Events</Link></Nav.Link>
              <Nav.Link><Link to={"/Mars"} className="nav-link">Mars Corner</Link></Nav.Link>
              <Nav.Link><Link to={"/Model"} className="nav-link">3D planetary Models</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      </div>
      <div class="bg-dark text-light p-4">
      <h3 class="display-4 fw-bold">
         <p>Explore the Universe from Your Screen: <br/>
          Where Infinity Meets<br/>
           Your Imagination!
          </p>
        </h3>
        
        <Button style={{margin:"auto"}}> 
        <Link to={"/Explore"} className="nav-link">Gallery</Link> 
        </Button>
        <Button style={{margin:"30px"}}>
        <Link to={"/Model"} className="nav-link">3D Models</Link>
        </Button>

        <Container >

        <h1 style={{marginTop:"60px", marginBottom:"45px", textAlign:"center"}}><b>Astronomy Picture of the Day</b></h1>
        <hr/>
        
      <Row style={{marginBottom:"60px", alignItems:"center"}}>
      <Col md={4}>
        <Card style={{background:"none", margin:"auto"}}>
          <Card.Body>
          <Card.Text style={{color:"white"}}>
            {apod.explanation}
          </Card.Text>
          </Card.Body>
        </Card>
      
      </Col>

      <Col md={4}>
      <Card className="event-card" style={{marginLeft:"10rem"}}>
        <Card.Img variant="top" src={apod.url} className="zoomable-picture" />
        <Card.Body>
        <Card.Title style={{color:"white"}} >{apod.title}</Card.Title>
        </Card.Body>
        </Card>
        </Col>
        {/* <Button variant="primary" onClick={toggleOpen}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        >Know more
        </Button> */}
      </Row>
      
      <h1 style={{marginTop:"45px", marginBottom:"45px", textAlign:"center"}} >Explore the world</h1>
      <hr/>

      <Row style={{marginBottom:"60px"}}>
      <Col md={4}>

      <Card className="event-card-gallery">
        <Card.Img variant="top" src="https://imageio.forbes.com/specials-images/imageserve/577c129fd7c6ee6a37c42b99/This-is-the-Milky-Way-from-Concordia-Camp--in-Pakistan-s-Karakoram-Range-/960x0.jpg?format=jpg&width=960" className="zoomable-picture" />
        <Card.Body>
        <Card.Title style={{color:"white"}}>Explore the gallery</Card.Title>
        <Button>
        <Link to={"/Explore"} className="nav-link">Explore</Link>
        </Button>
        </Card.Body>
      </Card>
      </Col>

      <Col md={4}>
      <Card style={{background:"none", color:"white", marginLeft:"10rem", width:"30rem"}}>
        <Card.Body>
            <Card.Text>
            Stars are luminous celestial bodies composed mostly of hydrogen and helium gas, which emit light and heat through nuclear fusion reactions occurring in their cores. They are fundamental building blocks of galaxies, including our Milky Way. Stars vary greatly in size, temperature, brightness, and lifespan. Classification of stars is often based on their spectral characteristics, with main sequence stars being the most common type, like our Sun. Other types include giants, supergiants, white dwarfs, and neutron stars. Stars play a crucial role in the universe's dynamics, influencing the formation of planetary systems, the evolution of galaxies, and even the creation of heavy elements necessary for life. Studying stars provides insights into the cosmos' evolution and helps scientists understand fundamental astrophysical processes.
            </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      </Row>

      <h1 style={{marginTop:"45px", marginBottom:"45px", textAlign:"center"}}><b>Mars updates!</b></h1>
      <hr/>

      <Row style={{marginBottom:"60px"}}>
      <Col md={4}>
      <Card style={{background:"none", color:"white"}}>
        <Card.Body>
            <Card.Text>
                Mars, often referred to as the "Red Planet," is the fourth planet from the Sun in our solar system. It is named after the Roman god of war due to its reddish appearance, which is caused by iron oxide (rust) on its surface. Mars has a thin atmosphere composed mostly of carbon dioxide, with surface temperatures ranging from -195 degrees Fahrenheit (-125 degrees Celsius) at the poles to 70 degrees Fahrenheit (20 degrees Celsius) at the equator during summer.

The planet has intrigued scientists for centuries with its potential to harbor life. Recent discoveries suggest Mars was once warmer and wetter, with evidence of ancient river valleys, lakes, and possibly even oceans. Today, water exists mainly as ice in the polar caps and as vapor in the atmosphere.

Mars has been extensively explored by robotic spacecraft, including orbiters, landers, and rovers. These missions have provided valuable data about the planet's geology, climate, and potential for life. Notable missions include NASA's Mars rovers Spirit, Opportunity, and Curiosity, as well as the InSight lander, which is studying the planet's interior.
  
            </Card.Text>
        </Card.Body>
      </Card>
      </Col>

      <Col md={4}>
      <Card className="event-card-gallery" style={{marginLeft:"10rem"}} >
        <Card.Img variant="top" src="https://c4.wallpaperflare.com/wallpaper/363/364/42/mars-space-light-surface-wallpaper-preview.jpg" className="zoomable-picture" />
        <Card.Body>
        <Card.Title style={{color:"white"}}>Mars Corner</Card.Title>
        <Button>
        <Link to={"/Mars"} className="nav-link">Explore</Link>
        </Button>
        </Card.Body>
      </Card>
      </Col>

      </Row>

      <h1 style={{marginTop:"45px", marginBottom:"45px", textAlign:"center"}}><b>3D model exploration</b></h1>

      <hr/>

      <Row style={{marginBottom:"60px"}}>
      <Col md={4}>
      <Card className="event-card-gallery">
        <Card.Img variant="top" src="https://media2.giphy.com/media/VOgpnDOAddaN0zr9UE/giphy.gif?cid=790b7611ordwgj83ykls5r01pebk53ajydycopwtuga7wu2t&ep=v1_gifs_search&rid=giphy.gif&ct=g" className="zoomable-picture" />
        <Card.Body>
        <Card.Title style={{color:"white"}}>Mars Corner</Card.Title>
        <Button>
        <Link to={"/Model"} className="nav-link">Explore</Link>
        </Button>
        </Card.Body>
      </Card>
      </Col>

      <Col md={4}>
      <Card style={{background:"none", color:"white", marginLeft:"10rem", width:"30rem"}}>
        <Card.Body>
            <Card.Text>
            A 3D space model is a three-dimensional representation of objects, environments, or phenomena related to space, such as celestial bodies, spacecraft, or astronomical phenomena. These models are typically created using computer graphics software or physical materials to provide a more immersive and detailed understanding of space-related concepts.

In astronomy and astrophysics, 3D space models can help scientists visualize complex data, such as the structure of galaxies, the orbits of planets, or the dynamics of star systems. They allow researchers to study celestial phenomena from different perspectives and simulate various scenarios to better understand the universe.
  
            </Card.Text>
        </Card.Body>
      </Card>
      </Col>

      </Row>

      <hr/>
      </Container>
    </div>  
    
    </div>
  </>        
    );
}
export default Homepage;
