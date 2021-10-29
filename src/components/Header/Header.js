import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import "./Header.css"
const Header = () => {
  const { user, handleSingOut } = useFirebase();
  console.log(user);
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
            <Nav className="ms-auto links d-flex justify-content-center align-items-center">
              <NavLink className="px-4 " activeStyle={activeStyle} to="/home">Home</NavLink>
              {user?.displayName || user?.email ?
                <div className="user-info d-flex justify-content-center align-items-center  ">
                  <h5 className="text-white mt-2">{user.displayName}</h5>
                  <img className="user-photo ms-3" src={user?.photoURL ? user?.photoURL : "https://img.icons8.com/bubbles/2x/ffffff/user.png"} alt="" />
                  <button className="ms-3 button" onClick={handleSingOut}>signOut</button>
                </div> :
                <div>
                  <NavLink className="px-4 " activeStyle={activeStyle} to="/login">Login</NavLink>
                  <NavLink className="px-4 " activeStyle={activeStyle} to="/register">Register</NavLink>
                  <NavLink className="px-4 " activeStyle={activeStyle} to="/services">services</NavLink>
                </div>

              }


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;