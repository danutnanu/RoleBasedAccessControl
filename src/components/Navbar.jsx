import React, { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../App'; 

function Navigation() {
  const [expanded, setExpanded] = useState(false);
  const { user, setUser } = useContext(UserContext); // Access the user context
  const navigate = useNavigate();

  const handleLinkClick = () => {
    setExpanded(false);
  };

  const handleLogout = () => {
    setUser(null); // Clear the user context
    localStorage.removeItem('currentUser'); // Remove user from local storage
    navigate('/'); // Redirect to home page
    setExpanded(false); // Close the navbar
  };

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const getDisplayName = () => {
    if (user.firstName) {
      return capitalize(user.firstName);
    }
    if (user.email) {
      return capitalize(user.email.split('@')[0]);
    }
    return 'User';
  };

  return (
    <Navbar expanded={expanded} onToggle={() => setExpanded(!expanded)} expand="md" className="navbar fixed-top bg-body-tertiary bg-dark-subtle mt-0 mx-0 p-0">
      <Container>
        <a className="badge text-bg-light text-wrap fst-italic p-1 border border-info">RBAC</a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="my-1" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end text-center me-3">
          <Nav className="p-0 w-100 align-items-center justify-content-md-end">
            <Nav.Link as={Link} to="/" onClick={handleLinkClick}>Home</Nav.Link>
            {!user ? (
              <Nav.Link as={Link} to="/login" onClick={handleLinkClick}>Login</Nav.Link>
            ) : (
              <>
                <Nav.Link as={Link} to="/profile" onClick={handleLinkClick}>Profile</Nav.Link>
                {user.role.toLowerCase() === 'admin' && (
                  <Nav.Link as={Link} to="/manageusers" onClick={handleLinkClick}>Manage Users</Nav.Link>
                )}
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                <div className="d-none d-md-inline mx-3"></div> {/* Gap for larger screens */}
                <span className="navbar-text">Hi, {getDisplayName()}!</span>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
