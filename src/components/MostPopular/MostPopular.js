import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import "./MostPopular.css"
const MostPopular = () => {
  const [popularServices, setPopularServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/popular")
      .then(res => res.json())
      .then(data => setPopularServices(data))
  }, [])
  return (
    <div className="py-5">
      <Container>
        <h1 className="popular-text text-center py-4">Most popular <span>Delivery Services</span> </h1>
        <Row xs={1} md={2} lg={4} className="gy-4 mb-5">
          {
            popularServices.map(((service, index) => <Col key={index}>
              <Card className="d-flex flex-row align-items-center justify-content-center p-3 border-0 popular-card ">
                <Card.Img className="card-image" src={service.image} alt={service.image}></Card.Img>
                <Card.Body>
                  <Card.Title className="ps-2">{service.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            ))
          }
        </Row>

      </Container>
    </div>
  );
};

export default MostPopular;