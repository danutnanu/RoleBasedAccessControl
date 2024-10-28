import React, { useEffect, useState, useContext } from 'react';
import { Container, Table, Dropdown, Button } from 'react-bootstrap';
import { UserContext } from '../../App'; // Import UserContext

const ManageUsers = () => {
  const [users, setUsers] = useState([]); // State to hold the list of users
  const { user, setUser } = useContext(UserContext); // Use context to get/set current user

  // Function to fetch users from local storage
  const fetchUsers = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || []; // Get users from local storage
    setUsers(storedUsers); // Update state with the users
  };

  // useEffect to fetch users when the component mounts
  useEffect(() => {
    fetchUsers(); // Call the function to fetch users
  }, []);

  // Function to handle role change
  const handleRoleChange = (userId, newRole) => {
    const updatedUsers = users.map(user => 
      user.id === userId ? { ...user, role: newRole } : user
    );
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    if (user && user.id === userId) {
      const updatedUser = { ...user, role: newRole };
      setUser(updatedUser);
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      console.log('Updated user:', updatedUser);
    }
  };

  // Function to handle user deletion
  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers)); // Update local storage
  };

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
            <th>Delete</th> 
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.firstName} {user.lastName}</td>
              <td>{user.email}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm" className="w-100">
                    {user.role}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleRoleChange(user.id, 'User')}>User</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleRoleChange(user.id, 'Moderator')}>Moderator</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleRoleChange(user.id, 'Admin')}>Admin</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
              <td>
                <Button variant="danger" size="sm" onClick={() => handleDeleteUser(user.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ManageUsers;
