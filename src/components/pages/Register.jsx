import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Register() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = event.target.elements;
    console.log(formData);
    // const email = event.target.elements.formBasicEmail.value;
    // const password = event.target.elements.formBasicPassword.value;
    // console.log(email, password);
  };
  return (
    <>
      <p className='h4 text-center'>Register</p>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto mb-1 border border-dark rounded">

        <Form.Group className="my-2 px-5" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-2 px-5" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-2 px-5" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button className='mx-5 mb-2 px-5' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className='text-center'>Already have an account? <a href="/login">Login</a></p>
    </>
  );
}

export default Register;
