import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useMessage } from '../Message'; 
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

function Profile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [validated, setValidated] = useState(false);
  const { showMessage } = useMessage();
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const loggedInUserEmail = user && user.email;

  useEffect(() => {
    console.log('Current user in state:', user);
    // Load user data from local storage when the component mounts
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const currentUserIndex = existingUsers.findIndex(user => user.email === loggedInUserEmail);
    
    if (currentUserIndex !== -1) {
      const currentUser = existingUsers[currentUserIndex];
      setFirstName(currentUser.firstName);
      setLastName(currentUser.lastName);
      setCity(currentUser.city);
      setCountry(currentUser.country);
    }
  }, [user, loggedInUserEmail]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Save updated profile data to local storage
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      const currentUserIndex = existingUsers.findIndex(user => user.email === loggedInUserEmail);

      if (currentUserIndex !== -1) {
        // Update the user data with the new form data
        existingUsers[currentUserIndex] = {
          ...existingUsers[currentUserIndex],
          firstName,
          lastName,
          city,
          country
        };

        // Save updated users back to local storage
        localStorage.setItem('users', JSON.stringify(existingUsers));
        localStorage.setItem('currentUser', JSON.stringify(existingUsers[currentUserIndex]));

        // Update state with new values
        setFirstName(existingUsers[currentUserIndex].firstName);
        setLastName(existingUsers[currentUserIndex].lastName);
        setCity(existingUsers[currentUserIndex].city);
        setCountry(existingUsers[currentUserIndex].country);

        showMessage('Profile updated successfully!', 'success');
        console.log('Updated user data:', existingUsers[currentUserIndex]); // Log updated user data
      } else {
        showMessage('User not found!', 'error');
      }
    }
    setValidated(true);
  };

  return (
    <Container fluid className="d-flex align-items-center justify-content-center vh-100">
      <Row className="justify-content-center w-100">
        <Col xs={12} sm={10} md={8} lg={6} xl={4}>
          <h4 className='text-center mb-4'>Profile</h4>
          <Form noValidate validated={validated} onSubmit={handleSubmit} className="border rounded p-4 bg-light">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="firstName">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="lastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="City" 
                required 
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Country" 
                required 
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid country.
              </Form.Control.Feedback>
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Update Profile
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
