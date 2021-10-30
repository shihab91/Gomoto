import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
  return (
    <div>
      <Container className="d-flex justify-content-center align-items-center">
        <img style={{ height: "100%", width: "100%" }} src="https://i.ibb.co/frF8TPV/404-error-dribbble-800x600.gif" alt="" />
      </Container>
    </div>
  );
};

export default NotFound;