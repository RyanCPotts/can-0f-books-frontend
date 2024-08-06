import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css'; // Import the CSS file

class Footer extends React.Component {
  render() {
    return (
      <Navbar className="footer" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>@2024 Bookshelf</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;
