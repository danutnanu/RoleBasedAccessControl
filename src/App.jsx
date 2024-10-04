import React, { useEffect } from 'react';
import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import ManageUsers from './components/pages/ManageUsers'
import Profile from './components/pages/Profile'
import Register from './components/pages/Register'
import Message from './components/Message'
import { initializeUsers } from './utils/userStorage';
import { MessageProvider } from './context/MessageContext';

function App() {
  useEffect(() => {
    initializeUsers();
  }, []);

  return (
    <MessageProvider>
      <Router>
        <Navbar />
        <Message />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/manageusers' element={<ManageUsers />} />
        </Routes>
      </Router>
    </MessageProvider>
  );
};

export default App;
