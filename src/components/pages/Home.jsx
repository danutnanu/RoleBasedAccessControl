import React, { useContext } from 'react';
import { UserContext } from '../../App'; // Make sure this path is correct
import { ListGroup } from 'react-bootstrap';

function Home() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <section id="home">
        <div className='mt-5 m-2 mx-md-5 p-lg-5'>
          <p className='h4 fw-bold text-center mb-2 rounded'>Role Based Access Control</p>
          <div className='text-start mx-0 p-3 pt-2 border border-dark rounded bg-light p-lg-5'>
            <p className='fw-bold text-center text-success mb-4 mt-3'>"This content is visible to all, without any restrictions. The page is public and can be viewed without logging in."</p>
            <p className='h6 fw-bold'>Project Overview</p>
            <p className='text-start'>This project implements a Role-Based Access Control (RBAC) system using React. The system allows for managing user roles and controlling access to various parts of the application based on their assigned permissions.</p>
            <p className='h6 fw-bold'>Technologies Used:</p>
            <ListGroup as="ol" numbered>
              <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                <div className="ms-1 me-auto">
                  <div className="fw-bold">React:</div>
                  Frontend framework.
                </div>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                <div className="ms-1 me-auto">
                  <div className="fw-bold">React Router:</div>
                  For navigation and route protection.
                </div>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                <div className="ms-1 me-auto">
                  <div className="fw-bold">JavaScript (ES6+):</div>
                  Core programming language for the project.
                </div>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                <div className="ms-1 me-auto">
                  <div className="fw-bold">Optional Libraries:</div>
                  Bootstrap.
                </div>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </section>

      {user && (
        <>
          <section id="user">
            <div className='px-0 p-lg-5'>
              <div className='text-start m-2 p-3 pt-2 mx-md-5 mx-lg-5 p-lg-5 border border-dark rounded bg-secondary-subtle'>
                <p className='fw-bold text-center text-danger mb-4 mt-0'>USER PAGE</p>
                <div>
                  <h2>Welcome, User!</h2>
                  <p>You are logged in with a user ID. You now have access to the Home page and your User page.</p>
                  <p>Feel free to explore the features available to you. If you need any assistance, don't hesitate to reach out.</p>
                </div>
              </div>
            </div>
          </section>

          {(user.role.toLowerCase() === 'moderator' || user.role.toLowerCase() === 'admin') && (
            <section id="moderator">
              <div className='px-0 p-lg-5'>
                <div className='text-start m-2 p-3 pt-2 mx-md-5 mx-lg-5 p-lg-5 border border-dark rounded bg-primary-subtle'>
                  <p className='fw-bold text-center text-danger mb-4 mt-0'>MODERATOR PAGE</p>
                  <div>
                    <h2>Welcome, Moderator!</h2>
                    <p>You have moderator privileges. You can access the Home page, User page, and this Moderator page.</p>
                    <p>As a moderator, you have additional responsibilities and access to moderate content and user activities.</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {user.role.toLowerCase() === 'admin' && (
            <section id="admin">
              <div className='px-0 p-lg-5'>
                <div className='text-start m-2 mx-md-5 mx-lg-5 p-3 p-lg-5 pt-2 border border-dark rounded bg-danger-subtle'>
                  <p className='fw-bold text-center text-danger mb-4 mt-0'>ADMIN PAGE</p>
                  <div>
                    <h2>Welcome, Administrator!</h2>
                    <p>You have full administrative access. You can view and manage all sections: Home, User, Moderator, and Admin.</p>
                    <p>With great power comes great responsibility. Use your admin privileges wisely to manage the application and its users.</p>
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}

export default Home;
