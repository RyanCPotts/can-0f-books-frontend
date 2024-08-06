import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <Navbar className="custom-navbar" collapseOnSelect expand="lg">
        <Navbar.Brand className="brand">My Favorite Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Link to="/" className="custom-nav-link">Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/about" className="custom-nav-link">About</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
