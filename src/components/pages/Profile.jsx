import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Profile() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    city: '',
    mobile: ''
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      console.log(formData);
      // TODO: Add profile update logic here
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
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="lastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
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
                value={formData.city}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="mobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Mobile" 
                required 
                value={formData.mobile}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid mobile number.
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
