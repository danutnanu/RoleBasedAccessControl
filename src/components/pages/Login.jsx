// import React from 'react';

// function Login() {
//   return (
//     <>
//       <div>
//         <p className='h1 text-center'>
//           Login page
//         </p>
//       </div>
//     </>
//   );
// }

// export default Login;


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submit button clicked');
  };
  return (
    <>
      <p className='h4 text-center'>Login</p>
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

        <Form.Group className="mb-2 px-5" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className='mx-5 mb-2 px-5' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className='text-center'>Don't have an account? <a href="/register">Register</a></p>
    </>
  );
}

export default Login;