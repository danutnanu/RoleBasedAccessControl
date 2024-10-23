import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      // Authenticate the user...
      // For now, just set the user to a dummy object
      const user = { email, name: 'John Doe' };
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      setError(null);
    } catch (error) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const register = async (email, password) => {
    setLoading(true);
    try {
      // Register the user...
      // For now, just set the user to a dummy object
      const user = { email, name: 'John Doe' };
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      setError(null);
    } catch (error) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  const forgotPassword = async (email) => {
    setLoading(true);
    try {
      // Send a password reset email...
      // For now, just log a message
      console.log(`Password reset email sent to ${email}`);
      setError(null);
    } catch (error) {
      setError('Invalid email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, forgotPassword, error, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
