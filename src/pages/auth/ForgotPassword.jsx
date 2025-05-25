import React from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    navigate('/auth/forgot-password-otp');
  }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h3 className="text-center">Forgot Password</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary" onClick={handleForgotPassword}>Send Reset Link</button>
                </div>
                <div className="mt-3 text-center">
                  <p>Remember your password? <a href="/auth/login" className="text-decoration-none">Login here</a></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;