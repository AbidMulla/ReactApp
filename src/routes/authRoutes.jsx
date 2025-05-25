import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import auth pages
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import ForgotPassword from '../pages/auth/ForgotPassword';
import ForgotPasswordOTP from '../pages/auth/ForgotPasswordOTP';
import RegisterOTP from '../pages/auth/RegisterOTP';
import ResetPassword from '../pages/auth/ResetPassword';

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/forgot-password" element={<ForgotPassword />} />
      <Route path="/auth/forgot-password-otp" element={<ForgotPasswordOTP />} />
      <Route path="/auth/register-otp" element={<RegisterOTP />} />
      <Route path="/auth/reset-password" element={<ResetPassword />} />
    </Routes>
  );
}

export default AuthRoutes;