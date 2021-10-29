import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Header.css"
const Header = () => {
  const activeStyle = {
    color: "var(--yellow-color)"
  }
  return (
    <div>
      <Navbar className="gomoto-navbar" expand="lg">
        <Container>
          <Navbar.Brand><NavLink to="/home">
            <img className="logo" src="http://gomoto.like-themes.com/wp-content/uploads/2019/06/logo_1x.png" alt="" />
          </NavLink></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto links">
              <NavLink className="px-4 " activeStyle={activeStyle} to="/home">Home</NavLink>
              <NavLink className="px-4 " activeStyle={activeStyle} to="/link">Link</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;