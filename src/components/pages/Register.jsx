import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useMessage } from '../Message'; // Import the useMessage hook
import { addUser, initializeUsers } from '../../utils/userStorage'; // Correct path to userStorage.js

const Register = () => {
  const [email, setEmail] = useState(''); // Initialize to an empty string
  const [password, setPassword] = useState(''); // Initialize to an empty string
  const [confirmPassword, setConfirmPassword] = useState(''); // Initialize to an empty string
  const { showMessage } = useMessage(); // Get the showMessage function from context
  const navigate = useNavigate(); // Initialize useNavigate

  // Initialize users on component mount
  useEffect(() => {
    initializeUsers();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Check if the user already exists
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.find(user => user.email === email);

    if (userExists) {
      showMessage('User already exists with this email address.', 'error');
      setTimeout(() => {
        resetFormFields(); // Reset the form fields
      }, 2000);
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      showMessage('Passwords do not match.', 'error');
      resetPasswordFields(); // Reset the password fields
      return;
    }

    // Register the user
    const newUser = { id: Date.now(), email, password, role: 'User' }; // Add a unique ID and role
    addUser(newUser); // Use the addUser function to add the new user
    showMessage('Registration successful!', 'success');

    // Reset all fields after successful registration
    resetFormFields(); // Reset the form fields

    // Redirect to the login page
    navigate('/login'); // Redirect to the login page
  };

  // Function to reset all form fields
  const resetFormFields = () => {
    setEmail(''); // Reset to an empty string
    setPassword(''); // Reset to an empty string
    setConfirmPassword(''); // Reset to an empty string
  };

  // Function to reset only password fields
  const resetPasswordFields = () => {
    setPassword(''); // Reset to an empty string
    setConfirmPassword(''); // Reset to an empty string
  };

  return (
    <Container fluid className="d-flex align-items-center justify-content-center vh-100">
      <Row className="justify-content-center w-100">
        <Col xs={12} sm={10} md={8} lg={6} xl={4}>
          <h4 className='text-center mb-4'>Register</h4>
          <Form onSubmit={handleSubmit} className="border rounded p-4 bg-light">
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email} // Controlled input
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password} // Controlled input
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword} // Controlled input
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Register
              </Button>
            </div>
          </Form>
          <p className='text-center mt-3'>Already have an account? <Link to="/login">Login</Link></p>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
