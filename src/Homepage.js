import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link , NavLink } from 'react-router-dom';

 
function Homepage(){
    return(
      <><Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Virtual-Museum</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link><Link to={"/aboutus"}>About Us</Link></Nav.Link>   
              <Nav.Link><Link to={"/events"}>Events</Link></Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link><Link to={"/login"}>Login</Link></Nav.Link>
            <Nav.Link><Link to={"/signup"}>
                Sign Up
              </Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Accordion>
      <h3 style={{Color:'black',marginLeft:'70px',marginBottom:'40px'}}>
         <p>Explore dreams, surrealism, <br />
          and the subconcious mind
          </p>
        </h3>
        </Accordion>
        <Button variant="dark" style={{marginLeft:'70px',marginBottom:'20px'}}>Explore</Button>
        <Container>
        <Row>
          <Col xs><img src='https://static.toiimg.com/thumb/msid-103932887,imgsize-1000433,width-400,resizemode-4/103932887.jpg' id='myimg' width='260px'></img></Col>
          <Col xs={{ order: 12 }}><img src='https://static.toiimg.com/thumb/msid-103932887,imgsize-1000433,width-400,resizemode-4/103932887.jpg' id='myimg' width='260px'></img></Col>
          <Col xs={{ order: 1 }}><img src='https://static.toiimg.com/thumb/msid-103932887,imgsize-1000433,width-400,resizemode-4/103932887.jpg' id='myimg' width='260px'></img></Col>
        </Row>
      </Container>
  </>        
    );
}
export default Homepage;