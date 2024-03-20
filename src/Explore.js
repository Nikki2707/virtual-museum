import React from "react";
import axios from "axios";
import { Button } from 'react-bootstrap';
import { useEffect, useState} from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';


function Explore(){
  const [apod, setApod] = useState({});
  const [astronomicalBodies, setAstronomicalBodies] = useState([]);

  useEffect(() => {
    // Fetch Astronomy Picture of the Day
    axios.get('https://api.nasa.gov/planetary/apod?api_key=diO51zeLGvrk6PIn1wIqHeW94DZR9uRB1Z2agnh6')
      .then(response => {
        setApod(response.data);
      })
      .catch(error => {
        console.error('Error fetching APOD:', error);
      });

    // Fetch information about different astronomical bodies
    axios.get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=diO51zeLGvrk6PIn1wIqHeW94DZR9uRB1Z2agnh6')
      .then(response => {
        setAstronomicalBodies(response.data.near_earth_objects);
      })
      .catch(error => {
        console.error('Error fetching astronomical bodies:', error);
      });
  }, []);

  return (
    <Container>
      <h1>Astronomy Picture of the Day</h1>
      <Card>
        <Card.Img variant="top" src={apod.url} />
        <Card.Body>
          <Card.Title>{apod.title}</Card.Title>
          <Card.Text>{apod.explanation}</Card.Text>
        </Card.Body>
      </Card>

      <h1>Astronomical Bodies</h1>
      <Row>
        {astronomicalBodies.map(body => (
          <Col key={body.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>{body.name}</Card.Title>
                <Card.Text>{body.nasa_jpl_url}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );

     
}

export default Explore;
