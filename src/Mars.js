import React, {useState, useEffect} from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

function Mars() {
    const [mars, setMars] = useState([]);

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
            <Row>
            {mars.map((m, index) => (
                <Col key={index} md={4} className="mb-4">
                <Card className={"event-card-mars"}>
                    <Card.Img variant="top" src={m.image} className="zoomable-picture"/>
                    <Card.Title style={{color:"white"}}>
                         {m.name}
                    </Card.Title>
                    <Card.Text style={{color:"white"}}>
                         {m.description}
                    </Card.Text>
                </Card>
                </Col>

            ))}
            </Row>
            </Container>
           </div>
        
        </>
    )
}

export default Mars;