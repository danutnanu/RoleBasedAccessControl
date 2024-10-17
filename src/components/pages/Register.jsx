import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useMessage } from '../Message'; // Import the useMessage hook

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { showMessage } = useMessage(); // Get the showMessage function from context

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Check if the user already exists
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.find(user => user.email === email);

    if (userExists) {
      showMessage('User already exists with this email address.', 'error');
      // Optionally, you can clear the fields after a delay
      setTimeout(() => {
        resetFormFields(); // Reset the form fields
      }, 2000); // Adjust the delay as needed (2000 ms = 2 seconds)
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      showMessage('Passwords do not match.', 'error');
      resetPasswordFields(); // Reset the password fields
      return;
    }

    // Register the user
    const newUser = { email, password };
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    showMessage('Registration successful!', 'success');

    // Reset all fields after successful registration
    resetFormFields(); // Reset the form fields
  };

  // Function to reset all form fields
  const resetFormFields = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  // Function to reset only password fields
  const resetPasswordFields = () => {
    setPassword('');
    setConfirmPassword('');
  };

  // useEffect to log the state whenever it changes
  useEffect(() => {
    console.log('Current fields:', { email, password, confirmPassword });
  }, [email, password, confirmPassword]); // Log whenever any of these fields change

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
                value={email}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
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
