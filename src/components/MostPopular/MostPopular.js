import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import "./MostPopular.css"
const MostPopular = () => {
  const [popularServices, setPopularServices] = useState([]);
  useEffect(() => {
    fetch("./mostPopular.json")
      .then(res => res.json())
      .then(data => setPopularServices(data))
  }, [])
  return (
    <div>
      <Container>
        <h1 className="popular-text text-center py-4">Most popular <span>Delivery Services</span> </h1>
        <Row xs={1} md={2} lg={4} className="gy-4 my-4">
          {
            popularServices.map((service => <Col>
              <Card className="d-flex flex-row align-items-center p-3 border-0 popular-card ">
                <Card.Img className="card-img" src={service.image} alt={service.image}></Card.Img>
                <Card.Body>
                  <Card.Title className="ps-3">{service.name}</Card.Title>
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