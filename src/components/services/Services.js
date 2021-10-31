import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { BsArrowRightSquare } from "react-icons/bs";
import { useHistory } from 'react-router';
import { AiFillDelete } from "react-icons/ai";
import useAuth from '../../hooks/useAuth';
import "./Services.css"
const Services = () => {
  const [services, setServices] = useState([]);
  const { user } = useAuth();
  const history = useHistory();
  const handleServiceDetail = (id) => {
    history.push(`/services/${id}`)
  }
  useEffect(() => {
    fetch("https://radiant-peak-15690.herokuapp.com/services")
      .then(res => res.json())
      .then(data => {
        setServices(data)
      })
  }, [])
  const handleDeleteService = (id) => {
    fetch(`https://radiant-peak-15690.herokuapp.com/services/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount) {
          alert("service deleted successfully")
          const remainingServices = services.filter(service => service._id !== id);
          setServices(remainingServices)
        }
      })
  }
  return (
    <div className="my-5 pb-5">
      <Container>
        <h1 className="text-center my-5 ">Have a look at our best services</h1>
        <Row xs={1} sm={2} lg={3} className="gx-md-5 gy-5">
          {services?.map(service => <Col key={service._id}>
            <Card className="service-card">
              <Card.Img src={service?.image} className="service-card-image "></Card.Img>
              <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text className="service-card-description">
                  {service.description.slice(0, 100)}....
                </Card.Text>
                <button onClick={() => { handleServiceDetail(service._id) }} className="see-more">See more <BsArrowRightSquare /></button>
                {user.displayName &&
                  <button onClick={() => { handleDeleteService(service._id) }} className="see-more ms-3">Delete <AiFillDelete /></button>

                }
              </Card.Body>
            </Card>
          </Col>)
          }
        </Row>
      </Container>
    </div>
  );
};

export default Services;