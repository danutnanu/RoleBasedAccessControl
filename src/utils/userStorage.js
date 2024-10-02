const initialUsers = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'admin' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'user' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'user' },
  { id: 4, name: 'Diana Ross', email: 'diana@example.com', role: 'user' },
  { id: 5, name: 'Ethan Hunt', email: 'ethan@example.com', role: 'user' }
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
  return users ? JSON.parse(users) : [];
};