import React from 'react';
import { Routes, Route } from 'react-router-dom';

import UserLayout from '../layouts/UserLayout';
import UserDashboard from '../../src/pages/user/dashboard/UserDashboard';
import UserProfile from '../pages/user/profile/UserProfile';
import UserCourses from '../pages/user/course/UserCourses';
import CourseDetails from '../pages/user/course/CourseDetails';
import UserClassroom from '../pages/user/UserClassroom';
import UserCertificates from '../pages/user/UserCertificates';
import UserNotifications from '../pages/user/notification/UserNotifications';
import NotificationDetails from '../pages/user/notification/NotificationDetails';

import Settings from '../pages/user/settings/Settings';
import Logout from '../pages/user/Logout';

function UserRoutes() {
  return (
    <Routes>
      <Route path="/user" element={<UserLayout />}>
        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="courses" element={<UserCourses />} />
        <Route path="coursesDetails" element={<CourseDetails />} />
        <Route path="classroom" element={<UserClassroom />} />
        <Route path="certificates" element={<UserCertificates />} />
        <Route path="notifications" element={<UserNotifications />} />
        <Route path="notificationDetails" element={<NotificationDetails />} />
        <Route path="settings" element={<Settings />} />
        <Route path="logout" element={<Logout />} />
      </Route>
    </Routes>
  );
}

export default UserRoutes;