import React from "react";
import { Container, Card } from "react-bootstrap";

function AboutUs(){
    const styles = {
        padding:"1rem",
        marginBottom:"40px",
        color:"white",
        background: new URL('https://piktochart.com/wp-content/uploads/2023/10/large-204-600x338.jpg')
    }
    return(
        <>
        <div className="bg-dark text-light p-4">
        <Container>
            <h1 style={{textAlign:"center", marginBottom:"60px"}} ><b>About this Virtual Museum</b></h1>
           <Card className={"boder border-dark bg-dark"} style={styles} id="para"><Card.Text>
Welcome to the Space Virtual Museum, where the wonders of the cosmos are at your fingertips. Our museum is a digital portal to the awe-inspiring universe beyond our own planet, offering a unique and immersive exploration of space exploration, astronomy, and the mysteries of the cosmos.
            </Card.Text></Card>
            <hr />
            <Card className={"boder border-dark bg-dark"} style={styles} id="para"><Card.Text>At the Space Virtual Museum, we are passionate about sharing the wonders of space with people from all walks of life. Whether you're a seasoned astronomer, a curious student, or simply someone who marvels at the beauty of the night sky, there is something here for you.Our museum features a diverse collection of exhibits, each carefully curated to showcase the remarkable achievements and discoveries made by humanity in the realm of space. From the pioneering missions of the Apollo program to the breathtaking images captured by telescopes like the Hubble Space Telescope, our exhibits offer a glimpse into the vastness and complexity of the universe.
            </Card.Text></Card><hr />
            <Card className={"boder border-dark bg-dark"} style={styles} id="para"><Card.Text>But our museum is more than just a collection of artifacts and images. It's a journey through time and space, where you can learn about the history of space exploration, the science behind the cosmos, and the ongoing quest to unlock the secrets of the universe. Through interactive exhibits, virtual tours, and multimedia presentations, we aim to inspire curiosity, spark imagination, and foster a deeper understanding of the cosmos.Whether you're exploring the surface of Mars with a rover, learning about the life cycle of stars, or marveling at the beauty of distant galaxies, we invite you to embark on an unforgettable journey through the cosmos at the Space Virtual Museum. Join us as we reach for the stars and explore the wonders of the universe together.
            </Card.Text></Card>
            <hr />
            <Card className={"boder border-dark bg-dark"} style={styles} id="para">
            <Card.Text>
                    
In addition to our permanent exhibits, the Space Virtual Museum will be adding special events, guest lectures, and educational programs designed to engage audiences of all ages. From live Q&A sessions with astronauts to virtual stargazing events led by expert astronomers, there are countless opportunities to deepen your understanding of space and connect with others who share your passion for exploration. Whether you're a student looking to expand your knowledge or a lifelong learner seeking inspiration, the Space Virtual Museum is your gateway to the cosmos. Join us on this extraordinary journey of discovery, where the wonders of space await at every turn.
                </Card.Text>
            </Card>
        </Container>
        </div>
        </>
    );
}

export default AboutUs;