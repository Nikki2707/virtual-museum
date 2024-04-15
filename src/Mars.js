import React, {useState, useEffect} from "react";
import { Card, Container, Row, Col, Modal } from "react-bootstrap";
import axios from "axios";

function Mars() {
    const [mars, setMars] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentCard, setCurrentCard] = useState({});
  
    const handleCardClick = (cardData) => {
      setCurrentCard(cardData);
      setShowModal(true);
    };
  
    const handleClose = () => setShowModal(false);

    useEffect(() => {
        axios.get("https://images-api.nasa.gov/search?q=mars").then(response =>{
            const items = response.data.collection.items;
            const marsData = items.map(item => {
            if (item.data && item.data.length > 0 && item.links && item.links.length > 0)  {
            return{
              name: item.data[0].title,
              description: item.data[0].description,
              image: item.links[0].href
            };
            }else{
                return null;
            }
            });
            const filteredmarsData = marsData.filter(star => star !== null);
            setMars(filteredmarsData);
        }).catch(error =>{
            console.error(error);
        })
    })

    return (
        <>
           <div className="bg-dark text-light p-4">
            <Container>
            <h1>Welcome to the mars corner!</h1>
            <Row>
            {mars.map((m, index) => (
                <Col key={index} md={4} className="mb-4">
                <Card className={"border border-light bg-dark"} onClick={() => handleCardClick(m)}>
                    <Card.Body>
                    <Card.Img variant="top" src={m.image} className="zoomable-picture"/>
                    <Card.Title style={{color:"white"}}>
                         {m.name}
                    </Card.Title>
                    <Card.Text style={{color:"white"}}>
                         {m.description}
                    </Card.Text>
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
    )
}

export default Mars;