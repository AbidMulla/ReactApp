import React from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterOTP() {
  const navigate = useNavigate();

  const handleRegisterOTP = () => {
    navigate('/auth/login');
  }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h3 className="text-center">Verify Registration</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3 text-center">
                  <p>We have sent an OTP to your email. Please enter it below to complete your registration.</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="otp" className="form-label">One-Time Password</label>
                  <input type="text" className="form-control" id="otp" placeholder="Enter OTP" />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary" onClick={handleRegisterOTP}>Verify & Complete Registration</button>
                </div>
                <div className="mt-3 text-center">
                  <p>Didn't receive the code? <a href="#" className="text-decoration-none">Resend OTP</a></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterOTP;