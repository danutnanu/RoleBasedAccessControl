import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getUsers } from '../../utils/userStorage';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      console.log('Login successful', user);
      setErrorMessage('');
      localStorage.setItem('currentUser', JSON.stringify(user));
      // Here you would typically set the user as logged in and redirect
    } else {
      console.log('Login failed');
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <>
      <p className='h4 text-center'>Login</p>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto mb-1 border border-dark rounded">
        <Form.Group className="mb-3 mx-5 mt-2" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 mx-5" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}

        <Button className='mx-5 mb-2 px-5' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className='text-center'>Don't have an account? <a href="/register">Register</a></p>
    </>
  );
}

export default Login;
