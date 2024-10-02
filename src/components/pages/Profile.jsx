import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Profile() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const formData = {
        firstName: form.elements.validationCustom01.value,
        lastName: form.elements.validationCustom02.value,
        city: form.elements.validationCustom03.value,
        mobile: form.elements.validationCustom04.value,
      };
      console.log(formData);
    }
    setValidated(true);
  };

  return (
    <>
      <p className='h4 text-center'>Profile</p>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="w-50 mx-auto mb-1 border border-dark rounded">
        <Row className="mb-3 my-2 px-5">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3 my-2 px-5">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="text" placeholder="Mobile" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit" className='mx-5 mb-3'>Submit form</Button>
      </Form>
    </>
  );
}

export default Profile;
