import React, { useState } from 'react';
import { Icon } from '@iconify/react';

function CompanyInformation() {
    const [formData, setFormData] = useState({
        employeeNo: 'EMP-2023-001',
        companyCode: 'TECH-001',
        companyDescription: 'Technology and Software Development',
        jobTitle: 'Senior Developer',
        dateJoined: '15-03-2023',
        pwmRank: 'Level 3',
        icNo: 'IC-78945612',
        finNo: 'F12345678'
    });

    // State for edit company modal
    const [showEditModal, setShowEditModal] = useState(false);
    const [editFormData, setEditFormData] = useState({ ...formData });

    // Handle opening the edit modal
    const handleEditClick = () => {
        setEditFormData({ ...formData });
        setShowEditModal(true);
    };

    // Handle closing the edit modal
    const handleCloseModal = () => {
        setShowEditModal(false);
    };

    // Handle form field changes in the edit modal
    const handleEditChange = (e) => {
        const { id, value } = e.target;
        setEditFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    // Handle saving the edited company data
    const handleSaveChanges = (e) => {
        e.preventDefault();
        setFormData({ ...editFormData });
        setShowEditModal(false);
        console.log('Company information updated:', editFormData);
        // Here you would typically send the data to your backend
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-card-header d-flex justify-content-between align-items-center">
                    <h5>Company Information</h5>
                    <button className="btn btn-primary" onClick={handleEditClick}>
                        <span className="edit-button-text">Edit</span>
                        <Icon icon="mdi:pencil-outline" className="edit-icon" width="18" height="18" />
                    </button>
                </div>
                <div className="profile-card-body">
                    <div className="row">
                        {/* Employee No */}
                        <div className="col-md-6 mb-3">
                            <div className="profile-field-group">
                                <label className="profile-label">Employee No</label>
                                <div className="profile-field">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="employeeNo"
                                        value={formData.employeeNo}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Company Code */}
                        <div className="col-md-6 mb-3">
                            <div className="profile-field-group">
                                <label className="profile-label">Company Code</label>
                                <div className="profile-field">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="companyCode"
                                        value={formData.companyCode}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Company Description */}
                        <div className="col-md-6 mb-3">
                            <div className="profile-field-group">
                                <label className="profile-label">Company Description</label>
                                <div className="profile-field">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="companyDescription"
                                        value={formData.companyDescription}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Job Title */}
                        <div className="col-md-6 mb-3">
                            <div className="profile-field-group">
                                <label className="profile-label">Job Title</label>
                                <div className="profile-field">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="jobTitle"
                                        value={formData.jobTitle}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Date Joined */}
                        <div className="col-md-6 mb-3">
                            <div className="profile-field-group">
                                <label className="profile-label">Date Joined (dd-mm-yyyy)</label>
                                <div className="profile-field">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="dateJoined"
                                        value={formData.dateJoined}
                                        onChange={handleChange}
                                    />
                                    <div className="field-note">Date joined cannot be edited</div>
                                </div>
                            </div>
                        </div>

                        {/* PWM Rank */}
                        <div className="col-md-6 mb-3">
                            <div className="profile-field-group">
                                <label className="profile-label">PWM Rank</label>
                                <div className="profile-field">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="pwmRank"
                                        value={formData.pwmRank}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* IC No */}
                        <div className="col-md-6 mb-3">
                            <div className="profile-field-group">
                                <label className="profile-label">IC No</label>
                                <div className="profile-field">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="icNo"
                                        value={formData.icNo}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* FIN No */}
                        <div className="col-md-6 mb-3">
                            <div className="profile-field-group">
                                <label className="profile-label">FIN No</label>
                                <div className="profile-field">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="finNo"
                                        value={formData.finNo}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Edit Company Information Modal */}
            {showEditModal && (
                <div className="custom-modal-backdrop">
                    <div className="custom-modal">
                        <div className="custom-modal-header">
                            <h5 className="fw-semibold">Edit Company Information</h5>
                            <button type="button" className="custom-modal-close" onClick={handleCloseModal}>
                                <Icon icon="mdi:close" width="20" height="20" />
                            </button>
                        </div>
                        <div className="custom-modal-body">
                            <form onSubmit={handleSaveChanges}>
                                <div className="row">
                                    {/* Employee No */}
                                    <div className="col-md-6 mb-3">
                                        <div className="profile-field-group">
                                            <label className="profile-label" htmlFor="employeeNo">Employee No</label>
                                            <div className="profile-field">
                                                <input
                                                    type="text"
                                                    id="employeeNo"
                                                    value={editFormData.employeeNo}
                                                    onChange={handleEditChange}
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Company Code */}
                                    <div className="col-md-6 mb-3">
                                        <div className="profile-field-group">
                                            <label className="profile-label" htmlFor="companyCode">Company Code</label>
                                            <div className="profile-field">
                                                <input
                                                    type="text"
                                                    id="companyCode"
                                                    value={editFormData.companyCode}
                                                    onChange={handleEditChange}
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Company Description */}
                                    <div className="col-md-12 mb-3">
                                        <div className="profile-field-group">
                                            <label className="profile-label" htmlFor="companyDescription">Company Description</label>
                                            <div className="profile-field">
                                                <input
                                                    type="text"
                                                    id="companyDescription"
                                                    value={editFormData.companyDescription}
                                                    onChange={handleEditChange}
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Job Title */}
                                    <div className="col-md-6 mb-3">
                                        <div className="profile-field-group">
                                            <label className="profile-label" htmlFor="jobTitle">Job Title</label>
                                            <div className="profile-field">
                                                <input
                                                    type="text"
                                                    id="jobTitle"
                                                    value={editFormData.jobTitle}
                                                    onChange={handleEditChange}
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Date Joined */}
                                    <div className="col-md-6 mb-3">
                                        <div className="profile-field-group">
                                            <label className="profile-label" htmlFor="dateJoined">Date Joined (dd-mm-yyyy)</label>
                                            <div className="profile-field">
                                                <input
                                                    type="text"
                                                    id="dateJoined"
                                                    value={editFormData.dateJoined}
                                                    onChange={handleEditChange}
                                                    className="form-control"
                                                />
                                                <div className="field-note">Date joined cannot be edited</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* PWM Rank */}
                                    <div className="col-md-6 mb-3">
                                        <div className="profile-field-group">
                                            <label className="profile-label" htmlFor="pwmRank">PWM Rank</label>
                                            <div className="profile-field">
                                                <input
                                                    type="text"
                                                    id="pwmRank"
                                                    value={editFormData.pwmRank}
                                                    onChange={handleEditChange}
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* IC No */}
                                    <div className="col-md-6 mb-3">
                                        <div className="profile-field-group">
                                            <label className="profile-label" htmlFor="icNo">IC No</label>
                                            <div className="profile-field">
                                                <input
                                                    type="text"
                                                    id="icNo"
                                                    value={editFormData.icNo}
                                                    onChange={handleEditChange}
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* FIN No */}
                                    <div className="col-md-6 mb-3">
                                        <div className="profile-field-group">
                                            <label className="profile-label" htmlFor="finNo">FIN No</label>
                                            <div className="profile-field">
                                                <input
                                                    type="text"
                                                    id="finNo"
                                                    value={editFormData.finNo}
                                                    onChange={handleEditChange}
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-end mt-3">
                                    <button type="button" className="btn btn-light me-2" onClick={handleCloseModal}>
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CompanyInformation;