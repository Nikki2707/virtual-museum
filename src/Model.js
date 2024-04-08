import React from "react";
import Container from "react-bootstrap/Container"
import {Row, Col, Card} from "react-bootstrap"

function Model(){
     return(
        <>
        <div className={"bg-dark text-light p-4"}>
        <h1 style={{margin:"14px", marginBottom:"35px"}}>3D models</h1>
        <Row> 
    <Col md={4}> 
    <Card className={"border border-light bg-dark"} style={{width:"fit-content", margin:"10px"}}>
    <Card.Body>
    <iframe title="Mercury" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/0a7a8958d49944f1aef057951daa8fd3/embed" style={{width:"30rem", height:"25rem"}}> </iframe> 
    <p style={{fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A'}}> 
        <a href="https://sketchfab.com/3d-models/mercury-0a7a8958d49944f1aef057951daa8fd3?utm_medium=embed&utm_campaign=share-popup&utm_content=0a7a8958d49944f1aef057951daa8fd3" target="_blank" rel="nofollow" style={{fontWeight: 'bold', color: '#1CAAD9'}}></a>
    </p>
    <Card.Title style={{color:"white"}}>
       Mercury
    </Card.Title>
    <Card.Text style={{color:"white"}}>
    Temperature: -173°C to 427°C(-280°F to 800°F).<br/> 
    Distance from the Sun: 58 million kilometers<br/> 
    Mass: 0.055 * mass of Earth.<br/> 
    Number of Moons: 0 (No moons).<br/> 
    Type of Planet: Hot <br/> 
    </Card.Text>
    </Card.Body>
    </Card>
    </Col>

    <Col md={4}>
    <Card className={"border border-light bg-dark"} style={{width:"fit-content", margin:"10px"}}> 
    <Card.Body>
    <iframe title="Venus" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/b306aaadbf2b4fcea1afa2db5ed75b4f/embed" style={{width:"30rem", height:"25rem"}}> </iframe> 
    <p style={{fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A'}}> 
        <a href="https://sketchfab.com/3d-models/venus-b306aaadbf2b4fcea1afa2db5ed75b4f?utm_medium=embed&utm_campaign=share-popup&utm_content=b306aaadbf2b4fcea1afa2db5ed75b4f" target="_blank" rel="nofollow" style={{fontWeight: 'bold', color: '#1CAAD9'}}></a>
    </p>
    <Card.Title style={{color:"white"}}>
       Venus
    </Card.Title>
    <Card.Text style={{color:"white"}}>
    Temperature: 462°C (864°F)<br/> 
    Distance from the Sun: 108 million kilometers.<br/> 
    Mass: 0.815 * mass of Earth.<br/> 
    Number of Moons: 0 (No moons).<br/> 
    Type of Planet: Hot <br/> 
    </Card.Text>
    </Card.Body>
    </Card>
    </Col>

    <Col md={4}>
    <Card className={"border border-light bg-dark"} style={{width:"fit-content", margin:"10px"}}>
    <Card.Body>
    <iframe title="Earth like" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/3cc8fb92638b4395b5746ecf3c58c6bd/embed" style={{width:"30rem", height:"25rem"}}> </iframe> 
    <p style={{fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A'}}> 
        <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=3cc8fb92638b4395b5746ecf3c58c6bd" target="_blank" rel="nofollow" style={{fontWeight: 'bold', color: '#1CAAD9'}}></a>
    </p>
    <Card.Title style={{color:"white"}}>
       Earth
    </Card.Title>
    <Card.Text style={{color:"white"}}>
    Temperature: 14°C (57°F)<br/> 
    Distance from the Sun: 150 million kilometers.<br/> 
    Mass: 1 * mass of Earth.<br/> 
    Number of Moons: 1 (The moon).<br/> 
    Type of Planet: Neutral <br/> 
    </Card.Text>
    </Card.Body>
    </Card>
    </Col>

    <Col md={4}>
    <Card className={"border border-light bg-dark"} style={{width:"fit-content", margin:"10px"}}>
    <Card.Body>
    <iframe title="Mars: InSight Lander and Volcanic Regions" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/50bb6eb0d1104d43bf684d2b0f70de1d/embed" style={{width:"30rem", height:"25rem"}}> </iframe> 
    <p style={{fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A'}}> 
        <a href="https://sketchfab.com/3d-models/mars-insight-lander-and-volcanic-regions-50bb6eb0d1104d43bf684d2b0f70de1d?utm_medium=embed&utm_campaign=share-popup&utm_content=50bb6eb0d1104d43bf684d2b0f70de1d" target="_blank" rel="nofollow" style={{fontWeight: 'bold', color: '#1CAAD9'}}></a>
    </p>
    <Card.Title style={{color:"white"}}>
       Mars
    </Card.Title>
    <Card.Text style={{color:"white"}}>
    Temperature: -63°C(-81°F)<br/> 
    Distance from the Sun: 228 million kilometers.<br/> 
    Mass: 0.107 * mass of Earth.<br/> 
    Number of Moons: 2(Phobos and Deimos).<br/> 
    Type of Planet: Cold <br/> 
    </Card.Text>
    </Card.Body>
    </Card>
    </Col>
 
    <Col md={4}>
    <Card className={"border border-light bg-dark"} style={{width:"fit-content", margin:"10px"}}>
    <Card.Body>
    <iframe title="jupiter" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/c5275eb96af245e4a8453837ac728a62/embed" style={{width:"30rem", height:"25rem"}}> </iframe> 
    <p style={{fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A'}}> 
        <a href="https://sketchfab.com/3d-models/jupiter-c5275eb96af245e4a8453837ac728a62?utm_medium=embed&utm_campaign=share-popup&utm_content=c5275eb96af245e4a8453837ac728a62" target="_blank" rel="nofollow" style={{fontWeight: 'bold', color: '#1CAAD9'}}></a>
    </p>
    <Card.Title style={{color:"white"}}>
      Jupiter
    </Card.Title>
    <Card.Text style={{color:"white"}}>
    Temperature: -145°C(-234°F)<br/> 
    Distance from the Sun: 778 million kilometers.<br/> 
    Mass: 317.8 * mass of Earth.<br/> 
    Number of Moons: 79<br/> 
    Type of Planet: Cold<br/> 
    </Card.Text>
    </Card.Body>
    </Card>
    </Col>

    <Col md={4}>   
    <Card className={"border border-light bg-dark"} style={{width:"fit-content", margin:"10px"}}> 
    <Card.Body>
    <iframe title="Saturn Planet 3D" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/a4dbfeeeef9b47a383863d496baf546f/embed" style={{width:"30rem", height:"25rem"}}> </iframe> 
    <p style={{fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A'}}> 
        <a href="https://sketchfab.com/3d-models/saturn-planet-3d-a4dbfeeeef9b47a383863d496baf546f?utm_medium=embed&utm_campaign=share-popup&utm_content=a4dbfeeeef9b47a383863d496baf546f" target="_blank" rel="nofollow" style={{fontWeight: 'bold', color: '#1CAAD9'}}></a>
    </p>
    <Card.Title style={{color:"white"}}>
       Saturn
    </Card.Title>
    <Card.Text style={{color:"white"}}>
    Temperature: -178°C(-289°F)<br/> 
    Distance from the Sun: 1.43 billion kilometers.<br/> 
    Mass: 95.2 * mass of Earth.<br/> 
    Number of Moons: 82<br/> 
    Type of Planet: Cold<br/> 
    </Card.Text>
    </Card.Body>
    </Card>
    </Col> 


    <Col md={4}>
    <Card className={"border border-light bg-dark"} style={{width:"fit-content", margin:"10px"}}>
    <Card.Body>
    <iframe title="Uranus" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/3c7240d7affd4a30aa581b5551c60066/embed" style={{width:"30rem", height:"25rem"}}> </iframe> 
    <p style={{fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A'}}> 
        <a href="https://sketchfab.com/studiolab.dev?utm_medium=embed&utm_campaign=share-popup&utm_content=3c7240d7affd4a30aa581b5551c60066" target="_blank" rel="nofollow" style={{fontWeight: 'bold', color: '#1CAAD9'}}></a>
    </p>
    <Card.Title style={{color:"white"}}>
       Uranus
    </Card.Title>
    <Card.Text style={{color:"white"}}>
    Temperature: -224°C(-371°F)<br/> 
    Distance from the Sun: 2.88 billion kilometers.<br/> 
    Mass: 14.5 * mass of Earth.<br/> 
    Number of Moons: 27<br/> 
    Type of Planet: Cold <br/> 
    </Card.Text>
    </Card.Body>
    </Card>
    </Col>

    <Col md={4}>
    <Card className={"border border-light bg-dark"} style={{width:"fit-content", margin:"10px"}}> 
    <Card.Body>
    <iframe title="Neptune" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/947a405a0a4348f9a49ff4bd3ed3cc4b/embed" style={{width:"30rem", height:"25rem"}}> </iframe> 
    <p style={{fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A'}}> 
        <a href="https://sketchfab.com/3d-models/neptune-947a405a0a4348f9a49ff4bd3ed3cc4b?utm_medium=embed&utm_campaign=share-popup&utm_content=947a405a0a4348f9a49ff4bd3ed3cc4b" target="_blank" rel="nofollow" style={{fontWeight: 'bold', color: '#1CAAD9'}}></a>
    </p>
    <Card.Title style={{color:"white"}}>
      Neptune
    </Card.Title>
    <Card.Text style={{color:"white"}}>
    Temperature: -214°C(-353°F)<br/> 
    Distance from the Sun: 4.5 billion kilometers.<br/> 
    Mass: 17.1 * mass of Earth.<br/> 
    Number of Moons: 14<br/> 
    Type of Planet: Cold <br/> 
    </Card.Text>
    </Card.Body>
    </Card>
    </Col>
    <Col md={4}>
        <Card className={"border border-light bg-dark"} style={{width:"fit-content", margin:"10px"}}>
        <Card.Body>
        <iframe title="Solar System" frameBorder="0" allowFullScreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/f7896d085f474ef28631d88129268411/embed" style={{width:"30rem", height:"25rem"}}></iframe> 
        <p style={{fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A'}}> 
            <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=f7896d085f474ef28631d88129268411" target="_blank" rel="nofollow" style={{fontWeight: 'bold', color: '#1CAAD9'}}></a>
        </p>
        <Card.Title style={{color:"white"}}>
       Solar System
    </Card.Title>
        <Card.Text style={{color:"white"}}>
        The solar system formed about 4.6 billion
         years ago from a giant cloud of gas and
          dust, known as the solar nebula. Gravity
           pulled this material together, forming the
            Sun at the center, while the remaining
             material flattened into a disk, coalescing
              into planets, moons, and other bodies,
               resulting in the solar system we observe today.
        </Card.Text>
        </Card.Body>
        </Card>
        </Col>
    <Col md={4}>
    <Card className={"border border-light bg-dark"} style={{width:"fit-content", margin:"10px"}}>
    <Card.Body>
    <iframe title="Moon" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/870de693475d436c8e925ab0bcda4ca4/embed" style={{width:"30rem", height:"25rem"}}> </iframe> 
    <p style={{fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A'}}> 
        <a href="https://sketchfab.com/miekeroth?utm_medium=embed&utm_campaign=share-popup&utm_content=870de693475d436c8e925ab0bcda4ca4" target="_blank" rel="nofollow" style={{fontWeight: 'bold', color: '#1CAAD9'}}></a>
    </p>
    <Card.Title style={{color:"white"}}>
       Moon
    </Card.Title>
    <Card.Text style={{color:"white"}}>
    Temperature: -173°C(-280°F) - 127°C (260°F).<br/> 
    Distance from the Earth: 384,400 kilometers.<br/> 
    Mass: 7.35 * 10^22 kilograms.<br/> 
    </Card.Text>
    </Card.Body>
    </Card>
    </Col>

    <Col md={4}>
    <Card className={"border border-light bg-dark"} style={{width:"fit-content", margin:"10px"}}>
    <Card.Body>
        <iframe title="Star-planet Magnetic Interaction" frameBorder="0" allowFullScreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/71a173d76fc6419a8965ba2580784a27/embed" style={{width:"30rem", height:"25rem"}}></iframe> 
        <p style={{fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A'}}> 
            <a href="https://sketchfab.com/3d-models/star-planet-magnetic-interaction-71a173d76fc6419a8965ba2580784a27?utm_medium=embed&utm_campaign=share-popup&utm_content=71a173d76fc6419a8965ba2580784a27" target="_blank" rel="nofollow" style={{fontWeight: 'bold', color: '#1CAAD9'}}></a>
        </p>
        <Card.Title style={{color:"white"}}>
       Magnetic Fields
    </Card.Title>
        <Card.Text style={{color:"white"}}>
        Magnetic fields are invisible forces that
         exert influence on magnetic materials and 
          charged particles in space, originating
           from moving electric charges. Earth's 
           magnetic field, for example, protects 
           the planet from solar and cosmic radiation, 
            guiding the solar wind around it.
    </Card.Text>
        </Card.Body>
        </Card>
        </Col>

        <Col md={4}>
        <Card className={"border border-light bg-dark"} style={{width:"fit-content", margin:"10px"}}>
        <Card.Body>
        <iframe title="Curiosity - Mars Rover" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/6c2f5ceea9034befa79f82dbd4f77dbb/embed" style={{width:"30rem", height:"25rem"}}> </iframe>
        <Card.Title style={{color:"white"}}>
       Mars Curiosity Rover
    </Card.Title>
        <Card.Text style={{color:"white"}}> 
        The Curiosity Rover is a car-sized robotic explorer that was launched by NASA to Mars in November 2011 and landed on the Martian surface in August 2012. Its mission is to investigate Mars' climate and geology, assess whether the selected field site inside Gale Crater has ever offered environmental conditions favorable for microbial life, including the investigation of the role of water, and study the planet in preparation for human exploration.
    
        </Card.Text>
        </Card.Body>
        </Card>
        </Col>
    </Row>
    </div>
</>
     );
}

export default Model;