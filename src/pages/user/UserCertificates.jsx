import React from 'react';

function UserCertificates() {
  return (
    <div className="user-certificates">
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header d-flex justify-content-end">
              <div className="dropdown">
                <button className="btn btn-sm btn-outline-primary dropdown-toggle" type="button" id="exportDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  Export
                </button>
                <ul className="dropdown-menu" aria-labelledby="exportDropdown">
                  <li><a className="dropdown-item" href="#">PDF</a></li>
                  <li><a className="dropdown-item" href="#">Image</a></li>
                </ul>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                {[1, 2, 3, 4].map((cert) => (
                  <div key={cert} className="col-12 col-md-6 col-lg-4 mb-4">
                    <div className="card h-100 certificate-card">
                      <div className="card-body text-center">
                        <div className="certificate-icon mb-3">
                          <i className="bi bi-award fs-1 text-primary"></i>
                        </div>
                        <h5 className="card-title">Certificate of Completion</h5>
                        <h6 className="text-muted">Web Development Masterclass {cert}</h6>
                        <p className="card-text mt-3">
                          <small className="text-muted">Issued on: May {cert + 10}, 2025</small>
                        </p>
                        <div className="certificate-actions mt-3">
                          <button className="btn btn-sm btn-primary me-2">
                            <i className="bi bi-download me-1"></i> Download
                          </button>
                          <button className="btn btn-sm btn-outline-secondary">
                            <i className="bi bi-share me-1"></i> Share
                          </button>
                        </div>
                      </div>
                      <div className="card-footer text-center bg-light">
                        <small className="text-muted">Certificate ID: CERT-{new Date().getFullYear()}-{1000 + cert}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4">
                <h6 className="mb-3">Upcoming Certificates</h6>
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead className="table-light">
                      <tr>
                        <th>Course Name</th>
                        <th>Progress</th>
                        <th>Estimated Completion</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: 'Advanced JavaScript', progress: 75, date: 'June 10, 2025' },
                        { name: 'React & Redux', progress: 45, date: 'July 15, 2025' },
                        { name: 'Node.js Backend Development', progress: 30, date: 'August 20, 2025' }
                      ].map((course, index) => (
                        <tr key={index}>
                          <td>{course.name}</td>
                          <td>
                            <div className="progress" style={{ height: '8px' }}>
                              <div 
                                className="progress-bar" 
                                role="progressbar" 
                                style={{ width: `${course.progress}%` }}
                                aria-valuenow={course.progress} 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <small className="text-muted">{course.progress}% complete</small>
                          </td>
                          <td>{course.date}</td>
                          <td>
                            <span className="badge bg-warning text-dark">In Progress</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCertificates;
