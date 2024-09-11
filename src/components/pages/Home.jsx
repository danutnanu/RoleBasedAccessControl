import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function Home() {
  return (
    <>
      <div className='px-5 pb-5 bg-info-subtle'>
        <p className='h4 fw-bold text-center mb-0 rounded'>Role Based Access Control</p>
        <div className='text-start mx-5 p-5 pt-2 border border-dark rounded'>
          <p className='fw-bold text-center text-primary mb-4 mt-0'>HOME PAGE: "This content is visible to all, without any restrictions. The page is public and can be viewed without logging in."</p>
          <p className='h5 fw-bold mb-4'>RBAC with React</p>
          <p className='h6 fw-bold'>Project Overview</p>
          <p className='text-start'>This project implements a Role-Based Access Control (RBAC) system using React. The system allows for managing user roles and controlling access to various parts of the application based on their assigned permissions.</p>
          <p className='h6 fw-bold'>Technologies Used:</p>
          <ListGroup as="ol" numbered>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-1 me-auto">
                <div className="fw-bold">React:</div>
                Frontend framework.
              </div>

            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-1 me-auto">
                <div className="fw-bold">React Router:</div>
                For navigation and route protection.
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-1 me-auto">
                <div className="fw-bold">JavaScript (ES6+):</div>
                Core programming language for the project.
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-1 me-auto">
                <div className="fw-bold">Optional Libraries:</div>
                Bootstrap.
              </div>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </>
  );
}

export default Home;
