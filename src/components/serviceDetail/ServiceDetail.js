import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServiceDetail = () => {
  const { id } = useParams();
  console.log(id);

  const [singleService, setSingleService] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then(res => res.json())
      .then(data => setSingleService(data))
  }, [])

  return (
    <div>
      <Container>
        <h2>this is the service detail of {singleService?._id} and name is {singleService?.name}</h2>
        <img src={singleService?.image} alt="" />
      </Container>

    </div>
  );
};

export default ServiceDetail;