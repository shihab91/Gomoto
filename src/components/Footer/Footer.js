import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import "./Footer.css"
const Footer = () => {
  return (
    <div style={{ backgroundColor: 'var(--black-color)' }} className="text-white py-5">
      <Container>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="contact d-flex justify-content-center align-items-center flex-column flex-md-row" >
            <div className="me-md-4 d-flex flex-column flex-lg-row justify-content-center align-items-center">
              <img className="call-icon" src="https://img.icons8.com/ios-filled/2x/phone.png" alt="" />
              <div className="ps-md-2">
                <p className="m-0"> Call us to make order now</p>
                <h4 className="m-0 fw-bold">90-500-28-999</h4>
              </div>
            </div>
            <div className="ms-md-4 mt-4 mt-md-0 d-flex flex-column flex-lg-row justify-content-center align-items-center">
              <img className="email-icon" src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/2x/external-email-multimedia-kiranshastry-lineal-kiranshastry-1.png" alt="" />
              <div className="ps-md-2">
                <p className="m-0"> Mail us to make order now</p>
                <h4 className="m-0 fw-bold ">Shumonshihab449@gamil.com</h4>
              </div>
            </div>
          </div>
          <div className="my-4 text-center ">
            <img src="https://i.ibb.co/Qp4khmw/logo-1x.png" alt="" />
            <p className="mt-3 footer-text">These days you can get virtually anything delivered from <br /> your phone directly to you. Gomoto will send a car to pick you up. </p>
          </div>
          <div>
            <FaFacebookF className="footer-icon" />
            <FaInstagram className="footer-icon" />
            <FaTwitter className="footer-icon" />
            <FaYoutube className="footer-icon " />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;