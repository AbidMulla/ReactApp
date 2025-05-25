import React from 'react';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
  const navigate = useNavigate();

  const handleResetPassword = () => {
    navigate('/auth/login');
  }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h3 className="text-center">Reset Password</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">New Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter new password" />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                  <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm new password" />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary" onClick={handleResetPassword}>Reset Password</button>
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

export default ResetPassword;