import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Message, { MessageProvider } from './components/Message'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import ManageUsers from './components/pages/ManageUsers'
import Profile from './components/pages/Profile'
import Register from './components/pages/Register'
import { initializeUsers } from './utils/userStorage';


function App() {
  useEffect(() => {
    initializeUsers();
  }, []);

  return (
    <MessageProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          <div className="container-fluid mt-3">
            <Message />
          </div>
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
  );
}

export default App;
