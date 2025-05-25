import React, { useState } from 'react';

function Settings() {
  const [activeTab, setActiveTab] = useState('account');
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="settings">
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header d-flex justify-content-end">
              <button className="btn btn-sm btn-outline-secondary">
                <i className="bi bi-gear me-1"></i> System Preferences
              </button>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-3 mb-4 mb-md-0">
                  <div className="nav flex-column nav-pills">
                    <button 
                      className={`nav-link text-start ${activeTab === 'account' ? 'active' : ''}`}
                      onClick={() => handleTabChange('account')}
                    >
                      <i className="bi bi-person me-2"></i> Account
                    </button>
                    <button 
                      className={`nav-link text-start ${activeTab === 'security' ? 'active' : ''}`}
                      onClick={() => handleTabChange('security')}
                    >
                      <i className="bi bi-shield-lock me-2"></i> Security
                    </button>
                    <button 
                      className={`nav-link text-start ${activeTab === 'notifications' ? 'active' : ''}`}
                      onClick={() => handleTabChange('notifications')}
                    >
                      <i className="bi bi-bell me-2"></i> Notifications
                    </button>
                    <button 
                      className={`nav-link text-start ${activeTab === 'billing' ? 'active' : ''}`}
                      onClick={() => handleTabChange('billing')}
                    >
                      <i className="bi bi-credit-card me-2"></i> Billing
                    </button>
                    <button 
                      className={`nav-link text-start ${activeTab === 'privacy' ? 'active' : ''}`}
                      onClick={() => handleTabChange('privacy')}
                    >
                      <i className="bi bi-eye-slash me-2"></i> Privacy
                    </button>
                  </div>
                </div>
                <div className="col-md-9">
                  {activeTab === 'account' && (
                    <div className="account-settings">
                      <h5 className="mb-4">Account Settings</h5>
                      <form>
                        <div className="mb-3">
                          <label htmlFor="profilePicture" className="form-label">Profile Picture</label>
                          <div className="d-flex align-items-center mb-3">
                            <img src="https://via.placeholder.com/100" className="rounded-circle me-3" alt="Profile" width="100" height="100" />
                            <div>
                              <button type="button" className="btn btn-sm btn-primary me-2">Change Picture</button>
                              <button type="button" className="btn btn-sm btn-outline-danger">Remove</button>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="firstName" defaultValue="John" />
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="lastName" defaultValue="Doe" />
                          </div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">Email Address</label>
                          <input type="email" className="form-control" id="email" defaultValue="john.doe@example.com" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="phone" className="form-label">Phone Number</label>
                          <input type="tel" className="form-control" id="phone" defaultValue="+1 (555) 123-4567" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="bio" className="form-label">Bio</label>
                          <textarea className="form-control" id="bio" rows="3" defaultValue="Web developer with 5 years of experience specializing in frontend technologies."></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Save Changes</button>
                      </form>
                    </div>
                  )}

                  {activeTab === 'security' && (
                    <div className="security-settings">
                      <h5 className="mb-4">Security Settings</h5>
                      <div className="mb-4">
                        <h6>Change Password</h6>
                        <form>
                          <div className="mb-3">
                            <label htmlFor="currentPassword" className="form-label">Current Password</label>
                            <input type="password" className="form-control" id="currentPassword" />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="newPassword" className="form-label">New Password</label>
                            <input type="password" className="form-control" id="newPassword" />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                            <input type="password" className="form-control" id="confirmPassword" />
                          </div>
                          <button type="submit" className="btn btn-primary">Update Password</button>
                        </form>
                      </div>
                      <hr />
                      <div className="mb-4">
                        <h6>Two-Factor Authentication</h6>
                        <p className="text-muted">Add an extra layer of security to your account</p>
                        <div className="form-check form-switch mb-3">
                          <input className="form-check-input" type="checkbox" id="twoFactorToggle" />
                          <label className="form-check-label" htmlFor="twoFactorToggle">Enable Two-Factor Authentication</label>
                        </div>
                        <button className="btn btn-outline-primary" disabled>Set Up Two-Factor Authentication</button>
                      </div>
                      <hr />
                      <div>
                        <h6>Active Sessions</h6>
                        <p className="text-muted">These are devices that have logged into your account</p>
                        <div className="list-group">
                          <div className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                              <h6 className="mb-0">Chrome on Windows</h6>
                              <small className="text-muted">Current session • Active now</small>
                            </div>
                            <span className="badge bg-success">Current</span>
                          </div>
                          <div className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                              <h6 className="mb-0">Safari on iPhone</h6>
                              <small className="text-muted">Last active: Yesterday</small>
                            </div>
                            <button className="btn btn-sm btn-outline-danger">Log Out</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'notifications' && (
                    <div className="notification-settings">
                      <h5 className="mb-4">Notification Settings</h5>
                      <div className="mb-4">
                        <h6>Email Notifications</h6>
                        <div className="form-check mb-2">
                          <input className="form-check-input" type="checkbox" id="emailCourseUpdates" defaultChecked />
                          <label className="form-check-label" htmlFor="emailCourseUpdates">
                            Course updates and announcements
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input className="form-check-input" type="checkbox" id="emailNewCourses" defaultChecked />
                          <label className="form-check-label" htmlFor="emailNewCourses">
                            New course recommendations
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input className="form-check-input" type="checkbox" id="emailAssignments" defaultChecked />
                          <label className="form-check-label" htmlFor="emailAssignments">
                            Assignment reminders and grades
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input className="form-check-input" type="checkbox" id="emailPromotion" />
                          <label className="form-check-label" htmlFor="emailPromotion">
                            Promotional emails and special offers
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div className="mb-4">
                        <h6>Push Notifications</h6>
                        <div className="form-check mb-2">
                          <input className="form-check-input" type="checkbox" id="pushLiveClass" defaultChecked />
                          <label className="form-check-label" htmlFor="pushLiveClass">
                            Upcoming live class reminders
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input className="form-check-input" type="checkbox" id="pushMessages" defaultChecked />
                          <label className="form-check-label" htmlFor="pushMessages">
                            New messages from instructors
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input className="form-check-input" type="checkbox" id="pushForum" />
                          <label className="form-check-label" htmlFor="pushForum">
                            Forum activity and replies
                          </label>
                        </div>
                      </div>
                      <button type="button" className="btn btn-primary">Save Preferences</button>
                    </div>
                  )}

                  {activeTab === 'billing' && (
                    <div className="billing-settings">
                      <h5 className="mb-4">Billing Information</h5>
                      <div className="card mb-4">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <h6 className="mb-0">Current Plan</h6>
                            <span className="badge bg-primary">Premium</span>
                          </div>
                          <p className="text-muted">Your plan renews on June 15, 2025</p>
                          <div className="d-flex gap-2">
                            <button className="btn btn-outline-primary">Upgrade Plan</button>
                            <button className="btn btn-outline-secondary">Cancel Subscription</button>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h6>Payment Methods</h6>
                        <div className="card mb-3">
                          <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="d-flex align-items-center">
                                <i className="bi bi-credit-card fs-4 me-3"></i>
                                <div>
                                  <h6 className="mb-0">Visa ending in 4242</h6>
                                  <small className="text-muted">Expires 09/2026</small>
                                </div>
                              </div>
                              <div>
                                <span className="badge bg-success me-2">Default</span>
                                <button className="btn btn-sm btn-outline-danger">Remove</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="btn btn-outline-primary">Add Payment Method</button>
                      </div>

                      <div>
                        <h6>Billing History</h6>
                        <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Invoice</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>May 15, 2025</td>
                                <td>Premium Plan - Monthly</td>
                                <td>$19.99</td>
                                <td><span className="badge bg-success">Paid</span></td>
                                <td><button className="btn btn-sm btn-outline-secondary">Download</button></td>
                              </tr>
                              <tr>
                                <td>Apr 15, 2025</td>
                                <td>Premium Plan - Monthly</td>
                                <td>$19.99</td>
                                <td><span className="badge bg-success">Paid</span></td>
                                <td><button className="btn btn-sm btn-outline-secondary">Download</button></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'privacy' && (
                    <div className="privacy-settings">
                      <h5 className="mb-4">Privacy Settings</h5>
                      
                      <div className="mb-4">
                        <h6>Profile Visibility</h6>
                        <p className="text-muted">Control who can see your profile information</p>
                        <div className="mb-3">
                          <label htmlFor="profileVisibility" className="form-label">Who can see my profile</label>
                          <select className="form-select" id="profileVisibility">
                            <option value="public">Everyone (Public)</option>
                            <option value="students">Course Members Only</option>
                            <option value="private" selected>Only Me (Private)</option>
                          </select>
                        </div>
                      </div>
                      
                      <hr />
                      
                      <div className="mb-4">
                        <h6>Data Privacy</h6>
                        <div className="form-check mb-2">
                          <input className="form-check-input" type="checkbox" id="dataAnalytics" defaultChecked />
                          <label className="form-check-label" htmlFor="dataAnalytics">
                            Allow usage data collection to improve learning experience
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input className="form-check-input" type="checkbox" id="dataCookies" defaultChecked />
                          <label className="form-check-label" htmlFor="dataCookies">
                            Accept cookies for personalized content
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input className="form-check-input" type="checkbox" id="dataMarketing" />
                          <label className="form-check-label" htmlFor="dataMarketing">
                            Share my data with marketing partners
                          </label>
                        </div>
                      </div>
                      
                      <hr />
                      
                      <div>
                        <h6>Account Data</h6>
                        <p className="text-muted">Manage your personal data</p>
                        <button className="btn btn-outline-primary me-2">Download My Data</button>
                        <button className="btn btn-outline-danger">Delete Account</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
