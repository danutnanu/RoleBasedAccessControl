// import React from 'react';
// import './Navbar.css'

// function Navbar() {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top rounded p-1 m-2 border border-danger">
//         <div className="container-fluid">
//           <a className="badge text-bg-dark text-wrap fst-italic p-2" >Role Based Access Control</a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarText">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">Home</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#">Register</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#">Login</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#">Logout</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Manage users</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Profile</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import './Navbar.css'
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
            <Nav.Link as={Link} to="#home">Home</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link href="#link">Logout</Nav.Link>
            <Nav.Link href="#link">Manage users</Nav.Link>
            <Nav.Link href="#link">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;