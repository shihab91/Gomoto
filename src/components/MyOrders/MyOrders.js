import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import useAuth from '../../hooks/useAuth';
import "./MyOrders.css"
const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState();

  useEffect(() => {
    fetch(`https://radiant-peak-15690.herokuapp.com/orders`)
      .then(res => res.json())
      .then(orders => {
        const myOrders = orders.filter(order => order.email === user.email)
        setMyOrders(myOrders)
      })
  }, [])
  const handleDeleteOrder = (id) => {
    fetch(`https://radiant-peak-15690.herokuapp.com/orders/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount) {
          alert('Deleted successfully')
          const remainingOrders = myOrders.filter(myOrder => myOrder._id !== id)
          setMyOrders(remainingOrders)
        }
      })

  }
  return (
    <div className="myOrders">
      <Container>
        <Row xs={1} lg={2} xl={3} className="g-4">
          {
            myOrders?.map(myOrder => <Col key={myOrder._id}>
              <Card className="d-flex flex-row p-3 myOrder-card  ">
                <Card.Img src={myOrder.image} className="my-order-image"></Card.Img>
                <Card.Body className="ps-2 pe-0 pt-0">
                  <Card.Title>{myOrder.serviceName}</Card.Title>
                  <Button variant="danger" className=" mt-3" onClick={() => handleDeleteOrder(myOrder._id)}>Cancel</Button>
                </Card.Body>
              </Card>
            </Col>)
          }
        </Row>
      </Container>
    </div>
  );
};

export default MyOrders;