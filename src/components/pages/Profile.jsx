import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useMessage } from '../Message'; 
import { UserContext } from '../../App'; // Adjust the import path based on your context file
import { getUsers, updateUser } from '../../utils/userStorage'; // Import updateUser function

function Profile() {
  const { user, setUser } = useContext(UserContext); // Use context to get the current user data
  const [firstName, setFirstName] = useState(user?.firstName || ''); // Initialize to current user's first name or empty string
  const [lastName, setLastName] = useState(user?.lastName || ''); // Initialize to current user's last name or empty string
  const [city, setCity] = useState(user?.city || ''); // Initialize to current user's city or empty string
  const [country, setCountry] = useState(user?.country || ''); // Initialize to current user's country or empty string
  const [validated, setValidated] = useState(false);
  const { showMessage } = useMessage();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Current user in state:', user);
    // Load user data from local storage when the component mounts
    if (user) {
      setFirstName(user.firstName || ''); // Set to empty string if undefined
      setLastName(user.lastName || ''); // Set to empty string if undefined
      setCity(user.city || ''); // Set to empty string if undefined
      setCountry(user.country || ''); // Set to empty string if undefined
    }
  }, [user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Save updated profile data to local storage
      const updatedUser = {
        ...user,
        firstName,
        lastName,
        city,
        country
      };

      // Update the user in the list of users
      const users = getUsers();
      const userIndex = users.findIndex(u => u.id === updatedUser.id);
      if (userIndex !== -1) {
        users[userIndex] = updatedUser;
        localStorage.setItem('users', JSON.stringify(users));
      }

      // Save updated user data to local storage
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      console.log('Updated user saved to localStorage:', updatedUser);

      // Update the user context state
      setUser(updatedUser); // Update the context state with the new user data

      showMessage('Profile updated successfully!', 'success');
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
