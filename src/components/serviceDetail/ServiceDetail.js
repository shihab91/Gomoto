import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import "./ServiceDetail.css"
const ServiceDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const [singleService, setSingleService] = useState({});
  useEffect(() => {
    fetch(`https://radiant-peak-15690.herokuapp.com/services/${id}`)
      .then(res => res.json())
      .then(data => setSingleService(data))
  }, [])
  const handleBookOrder = id => {
    history.push(`/bookOrder/${id}`)
  }
  return (
    <div className="service-detail d-flex justify-content-center align-items-center h-lg-75">
      <Container>
        <div className="d-flex my-5 flex-column  flex-lg-row  justify-content-center align-items-center text-center text-md-start">
          <img className=" w-75" src={singleService?.image} alt="" />
          <div className="w-75 w-lg-50 mt-5 mt-lg-0 ms-lg-5">
            <h1>{singleService.name}</h1>
            <p className=" service-info my-5 ">{singleService.description}</p>
            <button className="book-order-btn" onClick={() => handleBookOrder(singleService._id)}>Book Order</button>
          </div>
        </div>
      </Container>

    </div >
  );
};

export default ServiceDetail;