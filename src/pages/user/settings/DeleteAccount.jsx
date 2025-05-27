import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Modal, Button } from 'react-bootstrap';
import './DeleteAccount.css';

function DeleteAccount() {
  const [showModal, setShowModal] = useState(false);
  const [confirmText, setConfirmText] = useState('');
  const [reason, setReason] = useState('');
  
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setConfirmText('');
    setReason('');
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleConfirmTextChange = (e) => {
    setConfirmText(e.target.value);
  };

  const handleDeleteAccount = () => {
    // Here you would typically send a request to delete the account
    alert('Account deletion request submitted. You will receive a confirmation email.');
    handleCloseModal();
  };

  const isDeleteButtonDisabled = confirmText !== 'DELETE';

  return (
    <div className="delete-account-container">
      <div className="section-header">
        <h3>Delete Account</h3>
        <p>Permanently delete your account and all associated data</p>
      </div>

      <div className="warning-card mb-4">
        <div className="warning-icon">
          <Icon icon="mdi:alert-circle-outline" width="24" height="24" />
        </div>
        <div className="warning-content">
          <h4>Warning: This action cannot be undone</h4>
          <p>
            Deleting your account will permanently remove all your data, including:
          </p>
          <ul>
            <li>Course progress and completion records</li>
            <li>Certificates and achievements</li>
            <li>Personal information and profile data</li>
            <li>Payment history and subscription details</li>
          </ul>
          <p>
            If you're experiencing issues with the platform, please consider
            <a href="#" className="ms-1">contacting support</a> before deleting your account.
          </p>
        </div>
      </div>

      <div className="delete-account-action">
        <button 
          className="btn btn-danger" 
          onClick={handleOpenModal}
        >
          <Icon icon="mdi:delete-outline" width="18" height="18" className="me-2" />
          Delete My Account
        </button>
      </div>

      {/* Confirmation Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">
            <Icon icon="mdi:alert-circle-outline" width="24" height="24" className="me-2" />
            Confirm Account Deletion
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-4">
            We're sorry to see you go. Before you proceed, please help us understand why you're leaving:
          </p>
          
          <div className="mb-3">
            <label className="form-label">Reason for leaving (optional)</label>
            <select 
              className="form-select" 
              value={reason} 
              onChange={handleReasonChange}
            >
              <option value="">Select a reason</option>
              <option value="not_useful">I don't find the platform useful</option>
              <option value="too_expensive">The service is too expensive</option>
              <option value="difficult_to_use">The platform is difficult to use</option>
              <option value="found_alternative">I found a better alternative</option>
              <option value="privacy_concerns">I have privacy concerns</option>
              <option value="other">Other reason</option>
            </select>
          </div>
          
          <div className="alert alert-danger">
            <p className="mb-2"><strong>This action cannot be undone.</strong></p>
            <p className="mb-0">All your data will be permanently deleted and cannot be recovered.</p>
          </div>
          
          <div className="mb-3">
            <label className="form-label">Type DELETE to confirm</label>
            <input 
              type="text" 
              className="form-control" 
              value={confirmText}
              onChange={handleConfirmTextChange}
              placeholder="DELETE"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button 
            variant="danger" 
            onClick={handleDeleteAccount}
            disabled={isDeleteButtonDisabled}
          >
            Permanently Delete Account
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DeleteAccount;