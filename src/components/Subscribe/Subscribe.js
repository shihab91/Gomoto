import React from "react";
import { Container } from "react-bootstrap";
import "./Subscribe.css";
const Subscribe = () => {
  return (
    <div>
      <Container>
        <div className="my-5 d-flex flex-column flex-lg-row justify-content-center w-100 py-5">
          <div className="d-flex  justify-content-center align-items-center   ">
            <div className="subscribe-text d-none d-md-block">
              <h1>We Serve A Range Of Industries</h1>
              <button className="button mt-3">Send Stuff</button>
            </div>
            <img className="subscribe-img me-md-4" src="https://elementor.detheme.com/deliventure/wp-content/uploads/sites/46/2021/08/african-american-delivery-man-posing-with-thermo-b-MF95KTL.jpg" alt="" />
          </div>
          <div className="input ms-md-4  ">
            <h3 className="mb-3 pt-5">Subscribe Newsletter</h3>
            <input type="email" className="mt-3" placeholder="Email" />
            <button className="button mt-3">Subscribe</button>
            <p className="pt-4">Your personal details are strictly for our use,  <br /> and you can unsubscribe at any time</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Subscribe;
