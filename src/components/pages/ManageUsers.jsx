import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const ManageUsers = () => {
  const [users, setUsers] = useState([]); // State to hold the list of users

  // Function to fetch users from local storage
  const fetchUsers = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || []; // Get users from local storage
    setUsers(storedUsers); // Update state with the users
  };

  // useEffect to fetch users when the component mounts
  useEffect(() => {
    fetchUsers(); // Call the function to fetch users
  }, []);

  return (
    <Container fluid className="mt-5">
      <h1 className="text-center mb-4">Manage Users</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td> 
              <td>{user.firstName} {user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ManageUsers;
