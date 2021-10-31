import React from 'react';
import { Container } from 'react-bootstrap';
import "./Banner.css"
const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <div className="d-flex flex-column flex-lg-row w-100 justify-content-center align-items-center py-5">
          <div className="banner-text d-flex flex-column justify-content-center align-items-lg-start align-items-center ">
            <h1 className="banner-heading text-center text-lg-start py-4">Express <br /> <span>Home Delivery
            </span> </h1>
            <p className="pb-3">Leading air courier and air freight company worldwide. We'll provide the best transport and logistics to suit your air cargo shipping needs</p>
            <button className="button">Read More</button>
          </div>
          <div className="banner-img py-5 py-lg-0 ">
            <img className="img-fluid" src="https://i.ibb.co/LhL4Pmb/slider-courier-mask.png" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;