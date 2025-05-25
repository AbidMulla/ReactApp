import React, { useState } from 'react';
import DefaultProfile from '../../../assets/images/profile/defaultProfile.jpg';
import { Icon } from '@iconify/react';

function PersonalInformation() {
    const [formData, setFormData] = useState({
        username: 'abidmulla',
        email: 'abidmulla1999@gmail.com',
        dateOfBirth: '03-06-2025',
        dateJoined: '09-06-2025',
        fullName: 'Abid',
        phoneNumber: '+91 1234567890',
        companyName: 'testTech',
        gender: 'Male',
        country: 'India',
        state: 'Karnataka',
        zipCode: '560001',
        jobDesignation: 'Not specified',
        academicQualification: 'Not specified',
        address: 'BTN'
    });

    // State for edit profile modal
    const [showEditModal, setShowEditModal] = useState(false);
    const [editFormData, setEditFormData] = useState({...formData});

    // Handle opening the edit modal
    const handleEditClick = () => {
        setEditFormData({...formData});
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

    // Handle saving the edited profile data
    const handleSaveChanges = (e) => {
        e.preventDefault();
        setFormData({...editFormData});
        setShowEditModal(false);
        console.log('Profile updated:', editFormData);
        // Here you would typically send the data to your backend
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Here you would typically send the data to your backend
    };

    return (
        <div className="profile-container">
            <div className="row">
                {/* Left Column - My Profile */}
                <div className="col-md-5 mb-4">
                    <div className="profile-card">
                        <div className="profile-card-header">
                            <h5>My Profile</h5>
                        </div>
                        <div className="profile-card-body">
                            <div className="text-center mb-4 d-flex justify-content-center align-items-center flex-column">
                                <div className="profile-image-container">
                                    <img
                                        src={DefaultProfile}
                                        alt="Profile"
                                        className="rounded-circle profile-image"
                                    />
                                </div>
                                <button className="btn btn-primary">
                                    <span className="edit-button-text"> Upload Image</span>
                                    <Icon icon="mdi:cloud-upload" className="me-1" width="18" height="18" />
                                </button>

                            </div>



                            <div className="profile-field-group">
                                <label className="profile-label">Full Name</label>
                                <div className="profile-field">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="profile-field-group">
                                <label className="profile-label">Email</label>
                                <div className="profile-field">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    <div className="field-note">Email cannot be edited</div>
                                </div>
                            </div>

                            <div className="profile-field-group">
                                <label className="profile-label">Phone Number</label>
                                <div className="profile-field">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                    />
                                    <div className="field-note">Number cannot be edited</div>
                                </div>
                            </div>




                            <div className="profile-field-group">
                                <label className="profile-label">Joined Data</label>
                                <div className="profile-field">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="subscriptionDate"
                                        value={formData.dateJoined}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="field-note">Date of Joined cannot be edited</div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - More Information */}
                <div className="col-md-7">
                    <div className="profile-card">
                        <div className="profile-card-header d-flex justify-content-between align-items-center">
                            <h5>More Information</h5>
                            <button className="btn btn-primary" onClick={handleEditClick}>
                                <span className="edit-button-text">Edit</span>
                                <Icon icon="mdi:pencil-outline" className="edit-icon" width="18" height="18" />
                            </button>
                        </div>
                        <div className="profile-card-body">
                            <div className="row">

                                {/* Gender  */}
                                <div className="col-md-6 mb-3">
                                    <div className="profile-field-group">
                                        <label className="profile-label">Gender</label>
                                        <div className="profile-field">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="gender"
                                                value={formData.gender}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Date of birth  */}
                                <div className="col-md-6 mb-3">
                                    <div className="profile-field-group">
                                        <label className="profile-label">Date of Birth</label>
                                        <div className="profile-field">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="dateOfBirth"
                                                value={formData.dateOfBirth}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <div className="profile-field-group">
                                        <label className="profile-label">Country</label>
                                        <div className="profile-field">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="country"
                                                value={formData.country}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <div className="profile-field-group">
                                        <label className="profile-label">State</label>
                                        <div className="profile-field">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="state"
                                                value={formData.state}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <div className="profile-field-group">
                                        <label className="profile-label">Zip Code</label>
                                        <div className="profile-field">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="zipCode"
                                                value={formData.zipCode}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="profile-field-group">
                                        <label className="profile-label">Job Designation</label>
                                        <div className="profile-field">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="jobDesignation"
                                                value={formData.jobDesignation}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <div className="profile-field-group">
                                        <label className="profile-label">Academic Qualification</label>
                                        <div className="profile-field">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="academicQualification"
                                                value={formData.academicQualification}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 mb-3">
                                    <div className="profile-field-group">
                                        <label className="profile-label">Address</label>
                                        <div className="profile-field">
                                            <textarea
                                                className="form-control"
                                                id="address"
                                                value={formData.address}
                                                onChange={handleChange}
                                                rows="3"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Edit Profile Modal */}
            {showEditModal && (
                <div className="custom-modal-backdrop">
                    <div className="custom-modal">
                        <div className="custom-modal-header">
                            <h5 className="fw-semibold">Edit Profile Information</h5>
                            <button type="button" className="custom-modal-close" onClick={handleCloseModal}>
                                <Icon icon="mdi:close" width="20" height="20" />
                            </button>
                        </div>
                        <div className="custom-modal-body">
                            <form onSubmit={handleSaveChanges}>
                                <div className="row">
                                    {/* Full Name */}
                                    <div className="col-md-6 mb-3">
                                        <div className="profile-field-group">
                                            <label className="profile-label" htmlFor="fullName">Full Name</label>
                                            <div className="profile-field">
                                                <input 
                                                    type="text" 
                                                    id="fullName" 
                                                    value={editFormData.fullName} 
                                                    onChange={handleEditChange} 
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Phone Number */}
                                    <div className="col-md-6 mb-3">
                                        <div className="profile-field-group">
                                            <label className="profile-label" htmlFor="phoneNumber">Phone Number</label>
                                            <div className="profile-field">
                                                <input 
                                                    type="text" 
                                                    id="phoneNumber" 
                                                    value={editFormData.phoneNumber} 
                                                    onChange={handleEditChange}
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Gender */}
                                    <div className="col-md-6 mb-3">
                                        <div className="profile-field-group">
                                            <label className="profile-label">Gender</label>
                                            <div className="d-flex mt-2">
                                                <div className="form-check me-3">
                                                    <input 
                                                        type="radio" 
                                                        className="form-check-input" 
                                                        name="gender" 
                                                        id="gender-male" 
                                                        value="Male"
                                                        checked={editFormData.gender === 'Male'}
                                                        onChange={() => setEditFormData({...editFormData, gender: 'Male'})}
                                                    />
                                                    <label className="form-check-label" htmlFor="gender-male">Male</label>
                                                </div>
                                                <div className="form-check">
                                                    <input 
                                                        type="radio" 
                                                        className="form-check-input" 
                                                        name="gender" 
                                                        id="gender-female" 
                                                        value="Female"
                                                        checked={editFormData.gender === 'Female'}
                                                        onChange={() => setEditFormData({...editFormData, gender: 'Female'})}
                                                    />
                                                    <label className="form-check-label" htmlFor="gender-female">Female</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Date of Birth */}
                                    <div className="col-md-6 mb-3">
                                        <div className="profile-field-group">
                                            <label className="profile-label" htmlFor="dateOfBirth">Date of Birth</label>
                                            <div className="profile-field">
                                                <input 
                                                    type="text" 
                                                    id="dateOfBirth" 
                                                    value={editFormData.dateOfBirth} 
                                                    onChange={handleEditChange}
                                                    className="form-control"
                                                    placeholder="DD-MM-YYYY"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Country */}
                                    <div className="col-md-6 mb-3">
                                        <div className="profile-field-group">
                                            <label className="profile-label" htmlFor="country">Country</label>
                                            <div className="profile-field">
                                                <input 
                                                    type="text" 
                                                    id="country" 
                                                    value={editFormData.country} 
                                                    onChange={handleEditChange}
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* State */}
                                    <div className="col-md-6 mb-3">
                                        <div className="profile-field-group">
                                            <label className="profile-label" htmlFor="state">State</label>
                                            <div className="profile-field">
                                                <input 
                                                    type="text" 
                                                    id="state" 
                                                    value={editFormData.state} 
                                                    onChange={handleEditChange}
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Zip Code */}
                                    <div className="col-md-6 mb-3">
                                        <div className="profile-field-group">
                                            <label className="profile-label" htmlFor="zipCode">Zip Code</label>
                                            <div className="profile-field">
                                                <input 
                                                    type="text" 
                                                    id="zipCode" 
                                                    value={editFormData.zipCode} 
                                                    onChange={handleEditChange}
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Job Designation */}
                                    <div className="col-md-6 mb-3">
                                        <div className="profile-field-group">
                                            <label className="profile-label" htmlFor="jobDesignation">Job Designation</label>
                                            <div className="profile-field">
                                                <input 
                                                    type="text" 
                                                    id="jobDesignation" 
                                                    value={editFormData.jobDesignation} 
                                                    onChange={handleEditChange}
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Academic Qualification */}
                                    <div className="col-md-12 mb-3">
                                        <div className="profile-field-group">
                                            <label className="profile-label" htmlFor="academicQualification">Academic Qualification</label>
                                            <div className="profile-field">
                                                <input 
                                                    type="text" 
                                                    id="academicQualification" 
                                                    value={editFormData.academicQualification} 
                                                    onChange={handleEditChange}
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="col-md-12 mb-3">
                                        <div className="profile-field-group">
                                            <label className="profile-label" htmlFor="address">Address</label>
                                            <div className="profile-field">
                                                <textarea 
                                                    id="address" 
                                                    rows="3" 
                                                    value={editFormData.address} 
                                                    onChange={handleEditChange}
                                                    className="form-control"
                                                ></textarea>
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

export default PersonalInformation;