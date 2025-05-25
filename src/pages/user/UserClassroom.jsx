import React, { useState } from 'react';
import { Icon } from '@iconify/react';

function UserClassroom() {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="user-classroom">
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header d-flex justify-content-end">
              <button className="btn btn-sm btn-outline-primary">
                <Icon icon="mdi:calendar-month" className="me-1" width="16" height="16" />
                Calendar View
              </button>
            </div>
            <div className="card-body">
              <ul className="nav nav-tabs mb-4">
                <li className="nav-item">
                  <button 
                    className={`nav-link ${activeTab === 'upcoming' ? 'active' : ''}`}
                    onClick={() => handleTabChange('upcoming')}
                  >
                    Upcoming Classes
                  </button>
                </li>
                <li className="nav-item">
                  <button 
                    className={`nav-link ${activeTab === 'recorded' ? 'active' : ''}`}
                    onClick={() => handleTabChange('recorded')}
                  >
                    Recorded Sessions
                  </button>
                </li>
                <li className="nav-item">
                  <button 
                    className={`nav-link ${activeTab === 'materials' ? 'active' : ''}`}
                    onClick={() => handleTabChange('materials')}
                  >
                    Study Materials
                  </button>
                </li>
              </ul>
              
              {activeTab === 'upcoming' && (
                <div className="upcoming-classes">
                  {[1, 2, 3].map((classItem) => (
                    <div key={classItem} className="card mb-3">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-2 col-sm-3 text-center mb-3 mb-md-0">
                            <div className="bg-light rounded py-3">
                              <h5 className="mb-0">May {25 + classItem}</h5>
                              <small>10:00 AM</small>
                            </div>
                          </div>
                          <div className="col-md-8 col-sm-9">
                            <h5>Advanced JavaScript Concepts - Session {classItem}</h5>
                            <p className="text-muted">Instructor: Sarah Johnson</p>
                            <p>Learn advanced JavaScript concepts including closures, prototypes, and async programming.</p>
                            <div className="d-flex align-items-center mb-2">
                              <span className="badge bg-success me-2">Live Session</span>
                              <span className="text-muted small">Duration: 1.5 hours</span>
                            </div>
                          </div>
                          <div className="col-md-2 d-flex flex-column justify-content-center align-items-center">
                            <button className="btn btn-primary mb-2 w-100">Join Now</button>
                            <button className="btn btn-outline-secondary w-100">Add to Calendar</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === 'recorded' && (
                <div className="recorded-sessions">
                  <div className="row">
                    {[1, 2, 3, 4, 5, 6].map((recording) => (
                      <div key={recording} className="col-md-6 col-lg-4 mb-4">
                        <div className="card h-100">
                          <div className="card-img-top position-relative">
                            <img 
                              src={`https://picsum.photos/seed/${recording + 10}/300/200`} 
                              className="w-100" 
                              alt={`Recording ${recording}`} 
                            />
                            <div className="position-absolute top-50 start-50 translate-middle">
                              <button className="btn btn-light rounded-circle">
                                <i className="bi bi-play-fill fs-4"></i>
                              </button>
                            </div>
                          </div>
                          <div className="card-body">
                            <h6 className="card-title">JavaScript Fundamentals - Lecture {recording}</h6>
                            <p className="card-text small text-muted">
                              Recorded on May {recording + 10}, 2025 • 45 minutes
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'materials' && (
                <div className="study-materials">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Type</th>
                          <th>Size</th>
                          <th>Uploaded</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { title: 'JavaScript Cheat Sheet', type: 'PDF', size: '2.3 MB' },
                          { title: 'CSS Grid Examples', type: 'ZIP', size: '5.7 MB' },
                          { title: 'React Hooks Reference', type: 'PDF', size: '1.8 MB' },
                          { title: 'Database Design Principles', type: 'PPTX', size: '4.1 MB' },
                          { title: 'UI/UX Case Studies', type: 'PDF', size: '8.2 MB' }
                        ].map((material, index) => (
                          <tr key={index}>
                            <td>{material.title}</td>
                            <td><span className="badge bg-secondary">{material.type}</span></td>
                            <td>{material.size}</td>
                            <td>May {index + 15}, 2025</td>
                            <td>
                              <button className="btn btn-sm btn-outline-primary me-2">
                                <i className="bi bi-download me-1"></i> Download
                              </button>
                              <button className="btn btn-sm btn-outline-secondary">
                                <i className="bi bi-eye me-1"></i> Preview
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserClassroom;
