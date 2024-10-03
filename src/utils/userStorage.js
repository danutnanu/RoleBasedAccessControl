const initialUsers = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', password: 'password123', role: 'admin' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', password: 'password456', role: 'user' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', password: 'password789', role: 'user' },
  { id: 4, name: 'Diana Ross', email: 'diana@example.com', password: 'password101', role: 'user' },
  { id: 5, name: 'Ethan Hunt', email: 'ethan@example.com', password: 'password202', role: 'user' }
];

export const initializeUsers = () => {
  const existingUsers = localStorage.getItem('users');
  if (!existingUsers || JSON.parse(existingUsers).length === 0) {
    localStorage.setItem('users', JSON.stringify(initialUsers));
    console.log('Users initialized:', initialUsers);
  } else {
    console.log('Existing users found:', existingUsers);
  }
};

export const getUsers = () => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : initialUsers;
};