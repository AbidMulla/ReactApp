import React, { useState } from 'react';
import CourseTab from './CourseTab';
import MyCourseTab from './MyCourseTab';

function UserCourses() {
  const [activeTab, setActiveTab] = useState('courses');

  return (
    <div className="user-courses">
      {/* Course Tabs - Similar to Profile Tabs */}
      <div className="profile-tabs-container">
        <div className="profile-tabs">
          <button
            className={`profile-tab-item ${activeTab === 'courses' ? 'active' : ''}`}
            onClick={() => setActiveTab('courses')}
          >
            Courses
          </button>
          <button
            className={`profile-tab-item ${activeTab === 'my-courses' ? 'active' : ''}`}
            onClick={() => setActiveTab('my-courses')}
          >
            My Courses
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content-container mt-1">
        {activeTab === 'courses' && (
          <div className="card">
            <div className="card-body">
              <CourseTab />
            </div>
          </div>
        )}

        {activeTab === 'my-courses' && (
          <div className="card">
            <div className="card-body">
              <MyCourseTab />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserCourses;
