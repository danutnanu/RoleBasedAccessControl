const USER_DATA_VERSION = '1.1'; // Increment this when you update user data

const initialUsers = [
  { id: 1, email: 'alice@example.com', password: 'password123', role: 'Admin' },
  { id: 2, email: 'bob@example.com', password: 'password456', role: 'User' },
  { id: 3, email: 'charlie@example.com', password: 'password789', role: 'User' },
  { id: 4, email: 'diana@example.com', password: 'password101', role: 'User' },
  { id: 5, email: 'ethan@example.com', password: 'password202', role: 'User' },
  { id: 6, email: 'frank@example.com', password: 'adminpass1', role: 'Admin' },
  { id: 7, email: 'grace@example.com', password: 'modpass1', role: 'Moderator' },
  { id: 8, email: 'henry@example.com', password: 'modpass2', role: 'Moderator' }
];

export const initializeUsers = () => {
  const storedVersion = localStorage.getItem('userDataVersion');
  if (!storedVersion || storedVersion !== USER_DATA_VERSION) {
    localStorage.setItem('users', JSON.stringify(initialUsers));
    localStorage.setItem('userDataVersion', USER_DATA_VERSION);
    console.log('Users initialized with new data version:', USER_DATA_VERSION);
  } else {
    console.log('Existing users found. Data version:', storedVersion);
  }
  logAllUsers(); // Always log users after initialization
};

export const getUsers = () => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : initialUsers;
};

export const addUser = (user) => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
};

export const updateUser = (updatedUser) => {
  const users = getUsers();
  const index = users.findIndex(u => u.id === updatedUser.id);
  if (index !== -1) {
    users[index] = updatedUser;
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }
  return false;
};

export const deleteUser = (userId) => {
  const users = getUsers();
  const filteredUsers = users.filter(u => u.id !== userId);
  if (filteredUsers.length < users.length) {
    localStorage.setItem('users', JSON.stringify(filteredUsers));
    return true;
  }
  return false;
};

export const logAllUsers = () => {
  const users = getUsers();
  console.log('All users:', users);
};

export const clearAllUsers = () => {
  localStorage.removeItem('users');
  localStorage.removeItem('userDataVersion');
  console.log('All user data cleared');
};

// Helper function to reset to initial state (useful for development/testing)
export const resetToInitialState = () => {
  localStorage.setItem('users', JSON.stringify(initialUsers));
  localStorage.setItem('userDataVersion', USER_DATA_VERSION);
  console.log('User data reset to initial state');
};
