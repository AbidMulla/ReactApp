import React from 'react';
import { Icon } from '@iconify/react';
import Activity from '../../../components/common/Activity';
import UserStatistics from './UserStatistics';
import Announcement from './Announcement'

function UserDashboard() {
  return (
    <div>
      {/* Main Dashboard Content */}
      <div className="row mb-4">
        {/* Left Column - Stats Cards */}
        <div className="col-md-8 mb-3">
          <div className="row mb-3">
            {/* Classrooms Card */}
            <div className="col-md-4 mb-3">
              <div className="card h-100 jump" style={{ backgroundColor: '#f8e5ff' }}>
                <div className="card-body d-flex align-items-center">
                  <div className="rounded-circle bg-white p-3 me-3">
                    <Icon icon="fluent:home-24-regular" width="24" height="24" style={{ color: '#9c27b0' }} />
                  </div>
                  <div>
                    <h6 className="card-title text-muted mb-1">Classrooms</h6>
                    <h3 className="mb-0 fw-bold">1</h3>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Certificates Card */}
            <div className="col-md-4 mb-3">
              <div className="card h-100 jump" style={{ backgroundColor: '#e3f2fd' }}>
                <div className="card-body d-flex align-items-center">
                  <div className="rounded-circle bg-white p-3 me-3">
                    <Icon icon="fluent:document-24-regular" width="24" height="24" style={{ color: '#2196f3' }} />
                  </div>
                  <div>
                    <h6 className="card-title text-muted mb-1">Certificates</h6>
                    <h3 className="mb-0 fw-bold">0</h3>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Courses Card */}
            <div className="col-md-4 mb-3">
              <div className="card h-100 jump" style={{ backgroundColor: '#e0f2f1' }}>
                <div className="card-body d-flex align-items-center">
                  <div className="rounded-circle bg-white p-3 me-3">
                    <Icon icon="fluent:book-24-regular" width="24" height="24" style={{ color: '#009688' }} />
                  </div>
                  <div>
                    <h6 className="card-title text-muted mb-1">Courses</h6>
                    <h3 className="mb-0 fw-bold">6</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Second Row - Additional Stats */}
          <div className="row">
            {/* Rank Card */}
            <div className="col-md-4 mb-3">
              <div className="card h-100 jump" style={{ backgroundColor: '#fff8e1' }}>
                <div className="card-body d-flex align-items-center">
                  <div className="rounded-circle bg-white p-3 me-3">
                    <Icon icon="fluent:trophy-24-regular" width="24" height="24" style={{ color: '#ffc107' }} />
                  </div>
                  <div>
                    <h6 className="card-title text-muted mb-1">Rank</h6>
                    <h3 className="mb-0 fw-bold">5</h3>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Points Card */}
            <div className="col-md-4 mb-3">
              <div className="card h-100 jump" style={{ backgroundColor: '#f1f8e9' }}>
                <div className="card-body d-flex align-items-center">
                  <div className="rounded-circle bg-white p-3 me-3">
                    <Icon icon="fluent:star-24-regular" width="24" height="24" style={{ color: '#8bc34a' }} />
                  </div>
                  <div>
                    <h6 className="card-title text-muted mb-1">Points</h6>
                    <h3 className="mb-0 fw-bold">1,250</h3>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Assessment Card */}
            <div className="col-md-4 mb-3">
              <div className="card h-100 jump" style={{ backgroundColor: '#ffebee' }}>
                <div className="card-body d-flex align-items-center">
                  <div className="rounded-circle bg-white p-3 me-3">
                    <Icon icon="fluent:clipboard-task-24-regular" width="24" height="24" style={{ color: '#f44336' }} />
                  </div>
                  <div>
                    <h6 className="card-title text-muted mb-1">Assessment</h6>
                    <h3 className="mb-0 fw-bold">8</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Graph  */}
          <div className="row">
            <div className="col-12">
              <UserStatistics />  
            </div>
          </div>
          
        </div>
        
        {/* Right Column - Activity Card */}
        <div className="col-md-4 mb-3">
          <div className="row">
          <Activity />

          </div>
          <div className="row mt-3">
            <Announcement />
          </div>

        </div>
      </div>
    </div>
  );  
}

export default UserDashboard;