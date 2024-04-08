import React from "react";
import axios from "axios";
import { Button } from 'react-bootstrap';
import { useEffect, useState} from 'react';
import { Card, Container, Row, Col, Modal } from 'react-bootstrap';


function Explore(){
  const [astronomicalBodies, setAstronomicalBodies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentCard, setCurrentCard] = useState({});

  const handleCardClick = (cardData) => {
    setCurrentCard(cardData);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  useEffect(() => {

    // Fetch information about different astronomical bodies
    axios.get('https://images-api.nasa.gov/search?q=star')
    .then(response => {
      // Extract relevant data from the API response
      const items = response.data.collection.items;
      const starData = items.map(item => {
        // Check if 'data' and 'links' arrays exist
        if (item.data && item.data.length > 0 && item.links && item.links.length > 0) {
          return {
            name: item.data[0].title,
            description: item.data[0].description,
            image: item.links[0].href
          };
        } else {
          // Return null if data is missing
          return null;
        }
      });
      // Filter out null values
      const filteredStarData = starData.filter(star => star !== null);
      // Set the star data to state
      setAstronomicalBodies(filteredStarData);
    })
    .catch(error => {
      console.error('Error fetching star data:', error);
    });
}, []);


  return (
    <>
    <div className="bg-dark text-light p-4">
    <Container>
      <h1>Astronomical Bodies</h1>
      <Row>
        {astronomicalBodies.map(body => (
          <Col key={body.id} md={4} className="mb-4">
            <Card className={"border border-light bg-dark"} onClick={() => handleCardClick(body)}>
              <Card.Img variant="top" src={body.image} />
              <Card.Body>
                <Card.Title style={{color:"white"}}>{body.name}</Card.Title>
                <Card.Text style={{color:"white"}}>{body.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>

<Modal show={showModal} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
<Modal.Header closeButton>
  <Modal.Title>{currentCard.name}</Modal.Title>
</Modal.Header>
<Modal.Body>
  <img src={currentCard.image} alt={currentCard.name} style={{ width: '100%' }}/>
  <p>{currentCard.description}</p>
</Modal.Body>
</Modal>
</>
  );

     
}

export default Explore;
