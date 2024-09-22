import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  const handleLinkClick = () => {
    setExpanded(false);
  };

  return (
    <>
      <Navbar expanded={expanded} onToggle={() => setExpanded(!expanded)} expand="md" className="navbar fixed-top bg-body-tertiary bg-dark-subtle mt-0 mx-0 p-0 rounded">
        <Container>
          <img src="/public/favicon.ico" alt="logo" width="30" height="24" className="d-inline-block align-text-top m-1" />
          <a className="badge text-bg-light text-wrap fst-italic p-1 border border-info" >RBAC</a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="p-0">
              <Nav.Link as={Link} to="/" onClick={handleLinkClick}>Home</Nav.Link>
              <Nav.Link as={Link} to="/register" onClick={handleLinkClick}>Register</Nav.Link>
              <Nav.Link as={Link} to="/login" onClick={handleLinkClick}>Login</Nav.Link>
              <Nav.Link as={Link} to="/profile" onClick={handleLinkClick}>Profile</Nav.Link>
              <Nav.Link as={Link} to="/manageusers" onClick={handleLinkClick}>Manage Users</Nav.Link>
              <Nav.Link href="#link" onClick={handleLinkClick}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
