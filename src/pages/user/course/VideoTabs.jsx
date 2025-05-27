import React, { useState } from 'react';
import CourseOverview from './CourseOverview';
import CourseComment from './CourseComment';
import CourseRating from './CourseRating';
import CourseNotes from './CourseNotes';

function VideoTabs() {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="video-tabs">
            {/* Video Tabs - Similar to Course Tabs */}
            <div className="profile-tabs-container">
                <div className="profile-tabs">
                    <button
                        className={`profile-tab-item ${activeTab === 'overview' ? 'active' : ''}`}
                        onClick={() => setActiveTab('overview')}
                    >
                        Overview
                    </button>
                    <button
                        className={`profile-tab-item ${activeTab === 'notes' ? 'active' : ''}`}
                        onClick={() => setActiveTab('notes')}
                    >
                        Notes
                    </button>
                    <button
                        className={`profile-tab-item ${activeTab === 'comments' ? 'active' : ''}`}
                        onClick={() => setActiveTab('comments')}
                    >
                        Comments
                    </button>
                    <button
                        className={`profile-tab-item ${activeTab === 'ratings' ? 'active' : ''}`}
                        onClick={() => setActiveTab('ratings')}
                    >
                        Ratings
                    </button>
                </div>
            </div>

            {/* Tab Content */}
            <div className="tab-content-container mt-1">
                {activeTab === 'overview' && (
                    <div className="card">
                        <div className="card-body">
                            <CourseOverview />
                        </div>
                    </div>
                )}

                {activeTab === 'notes' && (
                    <div className="card">
                        <div className="card-body">
                            <CourseNotes />
                        </div>
                    </div>
                )}

                {activeTab === 'comments' && (
                    <div className="card">
                        <div className="card-body">
                            <CourseComment />
                        </div>
                    </div>
                )}

                {activeTab === 'ratings' && (
                    <div className="card">
                        <div className="card-body">
                            <CourseRating />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default VideoTabs