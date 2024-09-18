import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar expand="md" className="navbar bg-body-tertiary bg-dark-subtle mt-0 mx-0 p-0 sticky-top rounded">
      <Container>
        <img src="/public/favicon.ico" alt="logo" width="30" height="24" className="d-inline-block align-text-top m-1 justifyborder border-warning" />
        <a className="badge text-bg-light text-wrap fst-italic p-1 border border-info" >RBAC</a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="p-0">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
            <Nav.Link href="#link">Logout</Nav.Link>
            <Nav.Link href="#link">Manage users</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;