import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function Home() {
  return (
    <>
      <section id="home">
        <div className='px-5 pt-5 pb-5 mt-0 mx-0 bg-secondary-subtle'>
          <p className='h4 fw-bold text-center mb-0 rounded'>Role Based Access Control</p>
          <div className='text-start mx-5 p-5 pt-2 border border-dark rounded'>
            <p className='fw-bold text-center text-danger mb-4 mt-0'>HOME PAGE</p>
            <p className='fw-bold text-center text-danger mb-4 mt-0'>"This content is visible to all, without any restrictions. The page is public and can be viewed without logging in."</p>
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
      </section>


      <section id="user">
        <div className='px-5 p-5 bg-success-subtle'>
          <div className='text-start mx-5 p-5 pt-2 border border-dark rounded'>
            <p className='fw-bold text-center text-danger mb-4 mt-0'>USER PAGE</p>
            <div>
              <h2>Welcome, User!</h2>
              <p>You are logged in with a user ID. You now have access to the Home page and your User page.</p>
              <p>Feel free to explore the features available to you. If you need any assistance, don't hesitate to reach out.</p>
            </div>
          </div>
        </div>
      </section>


      <section id="moderator">
        <div className='px-5 p-5 bg-warning-subtle'>
          <div className='text-start mx-5 p-5 pt-2 border border-dark rounded'>
            <p className='fw-bold text-center text-danger mb-4 mt-0'>MODERATOR PAGE</p>
            <div>
              <h2>Welcome, Moderator!</h2>
              <p>You are logged in with a moderator ID. You now have access to the Home page, User page, and Moderator controls.</p>
              <p>As a moderator, you can manage content, review reports, and assist with user issues. If you need help or additional tools, feel free to reach out to the admin team.</p>
            </div>
          </div>
        </div>
      </section>


      <section id="admin">
        <div className='px-5 p-5 bg-danger-subtle'>
          <div className='text-start mx-5 p-5 pt-2 border border-dark rounded'>
            <p className='fw-bold text-center text-danger mb-4 mt-0'>ADMIN PAGE</p>
            <div>
              <h2>Welcome, Admin!</h2>
              <p>You are logged in with an admin ID. You now have full access to all features, including the Home page, User page, Moderator tools, and Admin controls.</p>
              <p>As an admin, you can manage users, configure system settings, and oversee platform operations. Please proceed with caution when making changes.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
