import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import { MessageProvider } from './components/Message'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import ManageUsers from './components/pages/ManageUsers'
import Profile from './components/pages/Profile'
import Register from './components/pages/Register'
import { initializeUsers } from './utils/userStorage';
import { AuthProvider } from './AuthContext';

// Create a new UserContext
export const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    initializeUsers();
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    console.log('Current user in App:', user);
  }, [user]);

  return (
    <AuthProvider>
      <UserContext.Provider value={{ user, setUser }}>
        <MessageProvider>
          <Router>
            <div className="d-flex flex-column min-vh-100">
              <Navbar />
              <main className="flex-grow-1 container-fluid mt-3">
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/register' element={<Register />} />
                  <Route path='/profile' element={<Profile />} />
                  <Route path='/manageusers' element={<ManageUsers />} />
                </Routes>
              </main>
            </div>
          </Router>
        </MessageProvider>
      </UserContext.Provider>
    </AuthProvider>
  );
}

export default App;
