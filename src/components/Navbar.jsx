import React, { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../App'; 

function Navigation() {
  const [expanded, setExpanded] = useState(false);
  const { user, setUser } = useContext(UserContext); 
  const navigate = useNavigate();

  const handleLinkClick = () => {
    setExpanded(false);
  };

  const handleLogout = () => {
    setUser(null); 
    localStorage.removeItem('currentUser'); 
    navigate('/'); 
    setExpanded(false); 
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
    <Navbar expanded={expanded} onToggle={() => setExpanded(!expanded)} expand="md" className="navbar fixed-top mt-0 mx-0 p-0">
      <Container>
        <a className="badge nav-link text-bg-light fw-bold p-2 my-2 fs-6 border border-1 border-dark rounded-pill">🪬 RBAC</a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="my-2" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end text-center me-3">
          <Nav className="p-0 w-100 align-items-center justify-content-md-end">
            <Nav.Link as={Link} to="/" onClick={handleLinkClick} className='nav-link fw-bold py-0 px-2 my-2 mx-1 border border-1 border-dark rounded-pill'>🏠 Home</Nav.Link>
            {!user ? (
              <Nav.Link as={Link} to="/login" onClick={handleLinkClick} className='fw-bold py-0 px-2 my-2 mx-1 border border-1 border-dark rounded-pill'>🔐 Login</Nav.Link>
            ) : (
              <>
                <Nav.Link as={Link} to="/profile" onClick={handleLinkClick} className='fw-bold py-0 px-2 my-2 mx-1 border border-1 border-dark rounded-pill'>🤦🏻‍♂️ Profile</Nav.Link>
                {user.role.toLowerCase() === 'admin' && (
                  <Nav.Link as={Link} to="/manageusers" onClick={handleLinkClick} className='fw-bold py-0 px-2 my-2 mx-1 border border-1 border-dark rounded-pill'>👥🛠️ Manage Users</Nav.Link>
                )}
                <Nav.Link onClick={handleLogout} className='fw-bold py-0 px-2 my-2 mx-1 border border-1 border-dark rounded-pill'>👋🏻 Logout</Nav.Link>
                <div className="d-none d-md-inline ms-3"></div> {/* Gap for larger screens */}
                <span className="nav-link fw-bold py-0 px-2 my-2 ms-1 border border-1 border-dark rounded-pill">Hi, {getDisplayName()}!</span>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
