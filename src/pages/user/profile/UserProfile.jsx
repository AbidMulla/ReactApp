import React, { useState } from 'react';
import DefaultProfile from '../../../assets/images/profile/defaultProfile.jpg'
import PersonalInformation from './PersonalInformation'
import ChangePassword from './ChangePassword'
import CompanyInformation from './CompanyInformation'


function UserProfile() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div>
      {/* Profile Tabs - New Design */}
      <div className="profile-tabs-container">
        <div className="profile-tabs">
          <button
            className={`profile-tab-item ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            My Information
          </button>
          <button
            className={`profile-tab-item ${activeTab === 'password' ? 'active' : ''}`}
            onClick={() => setActiveTab('password')}
          >
            Company Information
          </button>
          <button
            className={`profile-tab-item ${activeTab === 'address' ? 'active' : ''}`}
            onClick={() => setActiveTab('address')}
          >
            Password
          </button>

        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content-container mt-4">
        {/* Profile Information */}
        {activeTab === 'profile' && (
          <div className="card">
            <div className="card-body">
              <PersonalInformation />
            </div>
          </div>
        )}

        {/* Recent Transactions */}
        {activeTab === 'password' && (
          <div className="card">
            <div className="card-body">
              <CompanyInformation />
            </div>
          </div>
        )}

        {/* Checkbook */}
        {activeTab === 'address' && (
          <div className="card">
            <div className="card-body">
              <ChangePassword />
            </div>
          </div>
        )}


      </div>
    </div>
  );
}

export default UserProfile;