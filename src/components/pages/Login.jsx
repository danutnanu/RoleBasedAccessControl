import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getUsers } from '../../utils/userStorage';
import { useMessage } from '../Message';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { showMessage } = useMessage();
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const users = getUsers();

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      showMessage('Login successful', 'success');
      localStorage.setItem('currentUser', JSON.stringify(user));
      setUser(user);
      navigate('/');
    } else {
      showMessage('Invalid email or password', 'error');
    }
  };

  return (
    <Container fluid className="d-flex align-items-center justify-content-center vh-100" style={{ marginTop: '60px' }}>
      <Row className="justify-content-center w-100">
        <Col xs={12} sm={10} md={8} lg={6} xl={4}>
          <h4 className='text-center mb-4'>Login</h4>
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

            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
          <p className='text-center mt-3'>Don't have an account? <Link to="/register">Register</Link></p>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
