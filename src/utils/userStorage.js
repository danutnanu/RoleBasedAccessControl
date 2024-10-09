const USER_DATA_VERSION = '1.1'; // Increment this when you update user data

const initialUsers = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', password: 'password123', role: 'admin' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', password: 'password456', role: 'user' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', password: 'password789', role: 'user' },
  { id: 4, name: 'Diana Ross', email: 'diana@example.com', password: 'password101', role: 'user' },
  { id: 5, name: 'Ethan Hunt', email: 'ethan@example.com', password: 'password202', role: 'user' },
  { id: 6, name: 'Frank Castle', email: 'frank@example.com', password: 'adminpass1', role: 'admin' },
  { id: 7, name: 'Grace Hopper', email: 'grace@example.com', password: 'modpass1', role: 'moderator' },
  { id: 8, name: 'Henry Ford', email: 'henry@example.com', password: 'modpass2', role: 'moderator' }
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
