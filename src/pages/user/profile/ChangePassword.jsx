import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

function ChangePassword() {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [passwordVisible, setPasswordVisible] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false
  });

  const [passwordCriteria, setPasswordCriteria] = useState({
    hasEightChars: false,
    hasLetter: false,
    hasNumber: false,
    hasSpecial: false
  });

  // Check password criteria whenever newPassword changes
  useEffect(() => {
    const password = formData.newPassword;
    setPasswordCriteria({
      hasEightChars: password.length >= 8,
      hasLetter: /[a-zA-Z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    });
  }, [formData.newPassword]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const togglePasswordVisibility = (field) => {
    setPasswordVisible(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert('New password and confirm password do not match!');
      return;
    }
    console.log('Password change submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-card-header">
          <h5>Change Password</h5>
        </div>
        <div className="profile-card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                              {/* Current Password */}
              <div className="col-md-12 mb-2">
                <div className="profile-field-group">
                  <label className="profile-label">Current Password</label>
                  <div className="profile-field position-relative">
                    <input 
                      type={passwordVisible.currentPassword ? "text" : "password"} 
                      className="form-control" 
                      id="currentPassword" 
                      value={formData.currentPassword} 
                      onChange={handleChange}
                      required
                    />
                    <button 
                      type="button" 
                      className="btn btn-link position-absolute end-0 top-50 translate-middle-y text-muted" 
                      style={{ zIndex: 10 }}
                      onClick={() => togglePasswordVisibility('currentPassword')}
                    >
                      <Icon 
                        icon={passwordVisible.currentPassword ? "mdi:eye-off" : "mdi:eye"} 
                        width="18" 
                        height="18" 
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* New Password */}
              <div className="col-md-12 mb-2">
                <div className="profile-field-group">
                  <label className="profile-label">New Password</label>
                  <div className="profile-field position-relative">
                    <input 
                      type={passwordVisible.newPassword ? "text" : "password"} 
                      className="form-control" 
                      id="newPassword" 
                      value={formData.newPassword} 
                      onChange={handleChange}
                      required
                      minLength="8"
                    />
                    <button 
                      type="button" 
                      className="btn btn-link position-absolute end-0 top-50 translate-middle-y text-muted" 
                      style={{ zIndex: 10 }}
                      onClick={() => togglePasswordVisibility('newPassword')}
                    >
                      <Icon 
                        icon={passwordVisible.newPassword ? "mdi:eye-off" : "mdi:eye"} 
                        width="18" 
                        height="18" 
                      />
                    </button>
                  </div>
                  
                  {/* Password Criteria Badges */}
                  <div className="password-criteria-container mt-2">
                    <span className={`password-criteria-badge ${passwordCriteria.hasEightChars ? 'criteria-met' : ''}`}>
                      8 characters
                    </span>
                    <span className={`password-criteria-badge ${passwordCriteria.hasLetter ? 'criteria-met' : ''}`}>
                      1 letter
                    </span>
                    <span className={`password-criteria-badge ${passwordCriteria.hasNumber ? 'criteria-met' : ''}`}>
                      1 number
                    </span>
                    <span className={`password-criteria-badge ${passwordCriteria.hasSpecial ? 'criteria-met' : ''}`}>
                      @ $ ! % * # ? &
                    </span>
                  </div>
                </div>
              </div>

              {/* Confirm New Password */}
              <div className="col-md-12 mb-2">
                <div className="profile-field-group">
                  <label className="profile-label">Confirm New Password</label>
                  <div className="profile-field position-relative">
                    <input 
                      type={passwordVisible.confirmPassword ? "text" : "password"} 
                      className="form-control" 
                      id="confirmPassword" 
                      value={formData.confirmPassword} 
                      onChange={handleChange}
                      required
                      minLength="8"
                    />
                    <button 
                      type="button" 
                      className="btn btn-link position-absolute end-0 top-50 translate-middle-y text-muted" 
                      style={{ zIndex: 10 }}
                      onClick={() => togglePasswordVisibility('confirmPassword')}
                    >
                      <Icon 
                        icon={passwordVisible.confirmPassword ? "mdi:eye-off" : "mdi:eye"} 
                        width="18" 
                        height="18" 
                      />
                    </button>
                  </div>
                </div>
              </div>
              </div>
              

              <div className="col-12 mt-2">
                <button type="submit" className="btn btn-primary">
                  Change Password
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;