import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

function Logout() {
  useEffect(() => {
    // Here you would typically handle logout logic such as:
    // - Clearing local storage/cookies
    // - Invalidating tokens with backend
    // - Resetting any global state
    
    // For demo purposes, let's just simulate clearing local storage
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    console.log('User logged out successfully');
  }, []);

  // Immediately redirect to login page
  return <Navigate to="/auth/login" replace />;
}

export default Logout;
