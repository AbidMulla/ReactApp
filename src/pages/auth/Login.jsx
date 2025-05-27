import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../../assets/images/logo/logo.png'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Check if credentials match the specified ones
    if (email === 'abid@gmail.com' && password === 'Abid@123') {
      // Show success toast
      toast.success('Login successful!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      
      // Redirect after 3 seconds
      setTimeout(() => {
        navigate('/user/dashboard');
      }, 3000);
    } else {
      // Show error toast
      toast.error('Invalid email or password!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <ToastContainer />
      <div className="login-logo">
        <img src={logo} alt="LMS Logo" width={230} />
      </div>
      
      <div className="login-card">
        <div className="login-header">
          <h2>Login to LMS</h2>
          <p>Enter your email & password to login</p>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-with-icon">
              <Icon icon="mdi:email-outline" className="input-icon" />
              <input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com" 
                required 
                className="form-input"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-with-icon">
              <Icon icon="mdi:lock-outline" className="input-icon" />
              <input 
                type={showPassword ? "text" : "password"} 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••" 
                required 
                className="form-input"
              />
              <button 
                type="button" 
                className="show-password-btn" 
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <Icon icon={showPassword ? "mdi:eye-off-outline" : "mdi:eye-outline"} />
              </button>
            </div>
          </div>
          
          <div className="forgot-password-link">
            <a href="/auth/forgot-password">Forgot Password?</a>
          </div>
          
          <button 
            type="submit" 
            className="submit-button"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Icon icon="mdi:loading" className="loading-icon" />
                Logging in...
              </>
            ) : (
              'Submit'
            )}
          </button>
          
          <div className="account-options">
            <p>Don't have an account? <a href="/auth/register">Create Account</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;