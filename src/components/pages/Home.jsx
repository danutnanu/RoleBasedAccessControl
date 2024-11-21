import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { ListGroup } from 'react-bootstrap';

function Home() {
  const { user } = useContext(UserContext);

  const renderProfileAndActivity = () => (
    <>
      <h3>Your Profile</h3>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>

      <h3>Recent Activity</h3>
      <ul>
        <li>Logged in on {new Date().toLocaleDateString()}</li>
        <li>Viewed the Home page</li>
      </ul>
    </>
  );

  const renderUserPage = () => (
    <section id="user">
      <div className='px-0 p-lg-5'>
        <div className='text-start m-2 p-3 pt-2 mx-md-5 mx-lg-5 p-lg-5 border border-dark rounded bg-secondary-subtle'>
          <p className='fw-bold text-center text-danger mb-4 mt-0'>USER PAGE</p>
          <div>
            <h2>Welcome, User!</h2>
            <p>You've successfully logged in and now have access to the Home page and your User page.</p>
            <p>Feel free to explore the features available to you. If you need any assistance, don't hesitate to reach out.</p>
            {user.role.toLowerCase() === 'user' && renderProfileAndActivity()}
          </div>
        </div>
      </div>
    </section>
  );

  const renderModeratorPage = () => (
    <section id="moderator">
      <div className='px-0 p-lg-5'>
        <div className='text-start m-2 p-3 pt-2 mx-md-5 mx-lg-5 p-lg-5 border border-dark rounded bg-primary-subtle'>
          <p className='fw-bold text-center text-danger mb-4 mt-0'>MODERATOR PAGE</p>
          <div>
            <h2>Welcome, Moderator!</h2>
            <p>You have moderator privileges. You can access the Home page, User page, and this Moderator page.</p>
            <p>As a moderator, you have additional responsibilities and access to moderate content and user activities.</p>
            {user.role.toLowerCase() === 'moderator' && renderProfileAndActivity()}
          </div>
        </div>
      </div>
    </section>
  );

  const renderAdminPage = () => (
    <section id="admin">
      <div className='px-0 p-lg-5'>
        <div className='text-start m-2 mx-md-5 mx-lg-5 p-3 p-lg-5 pt-2 border border-dark rounded bg-danger-subtle'>
          <p className='fw-bold text-center text-danger mb-4 mt-0'>ADMIN PAGE</p>
          <div>
            <h2>Welcome, Administrator!</h2>
            <p>You have full administrative access. You can view and manage all sections: Home, User, Moderator, and Admin.</p>
            <p>With great power comes great responsibility. Use your admin privileges wisely to manage the application and its users.</p>
            {user.role.toLowerCase() === 'admin' && renderProfileAndActivity()}
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div>
      <section id="home">
        <div className='mt-5 mx-md-5 p-lg-5'>
          <p className='h4 fw-bold text-center mb-2 rounded'>Role Based Access Control</p>
          <div className='text-start mx-0 p-3 pt-2 border border-dark rounded bg-secondary-subtle p-lg-5'>
            <p className='fw-bold text-center text-success mb-4 mt-3'>
              "This content is visible to all, without any restrictions. The page is public and can be viewed without logging in."
            </p>
            <p className='text-center'>
              This project uses local storage for data persistence, without any database integration. Below are example credentials you can use to explore the role-based access control:
            </p>
            <ul className='text-center' style={{ listStyleType: 'none', padding: 0 }}>
              <li><strong>User</strong> Email: bob@example.com, Password: password456</li>
              <li><strong>Moderator</strong> Email: henry@example.com, Password: modpass2</li>
              <li><strong>Admin</strong> Email: alice@example.com, Password: password123</li>
            </ul>
            <p className='text-center'>
              This project demonstrates a Role-Based Access Control (RBAC) system using React and local storage. Users are managed through utility functions that handle operations such as adding, updating, and deleting user data.
            </p>
            <p className='h6 fw-bold'>Project Overview</p>
            <p className='text-start'>
              The system allows for managing user roles and controlling access to various parts of the application based on their assigned permissions.
            </p>
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
          {user.role.toLowerCase() === 'user' && renderUserPage()}

          {user.role.toLowerCase() === 'moderator' && (
            <>
              {renderUserPage()}
              {renderModeratorPage()}
            </>
          )}

          {user.role.toLowerCase() === 'admin' && (
            <>
              {renderUserPage()}
              {renderModeratorPage()}
              {renderAdminPage()}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Home;
