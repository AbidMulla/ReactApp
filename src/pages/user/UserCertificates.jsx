import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Modal, Button } from 'react-bootstrap';
import certificate from '../../assets/images/certificates/certificate.png';
import './UserCertificates.css';

function UserCertificates() {
  // State for modal
  const [showModal, setShowModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Certificate data
  const certificates = [
    {
      id: 1,
      title: 'Security Training Certificate',
      date: '28 Mar 7:24 am',
      type: 'Security',
      image: certificate,
      courseName: 'Security Guard Training Program',
      issuer: 'National Security Academy',
      validUntil: '28 Mar 2026',
      certificateId: 'SEC-2025-1001',
      completionDate: '28 Mar 2025',
      score: '92%'
    },
    {
      id: 2,
      title: 'First Aid Training',
      date: '15 Apr 9:30 am',
      type: 'Health & Safety',
      image: certificate,
      courseName: 'Emergency First Aid Response',
      issuer: 'Red Cross Safety Institute',
      validUntil: '15 Apr 2027',
      certificateId: 'FA-2025-1002',
      completionDate: '15 Apr 2025',
      score: '88%'
    },
    {
      id: 3,
      title: 'Fire Safety Management',
      date: '02 May 11:45 am',
      type: 'Safety',
      image: certificate,
      courseName: 'Fire Prevention & Control',
      issuer: 'National Fire Safety Board',
      validUntil: '02 May 2027',
      certificateId: 'FS-2025-1003',
      completionDate: '02 May 2025',
      score: '95%'
    },
    {
      id: 4,
      title: 'Conflict Resolution',
      date: '19 May 3:15 pm',
      type: 'Professional',
      image: certificate,
      courseName: 'Professional Conflict Management',
      issuer: 'Workplace Skills Institute',
      validUntil: '19 May 2026',
      certificateId: 'CR-2025-1004',
      completionDate: '19 May 2025',
      score: '90%'
    }
  ];

  const handleDownload = (title) => {
    // Create a link element
    const link = document.createElement('a');
    link.href = certificate;
    link.download = `${title.toLowerCase().replace(/ /g, '_')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openCertificateModal = (cert) => {
    setSelectedCertificate(cert);
    setShowModal(true);
  };

  const openCertificatePreview = (cert, e) => {
    e.stopPropagation();
    // Create a modal with the certificate image
    const modal = document.createElement('div');
    modal.className = 'certificate-preview-modal';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'certificate-preview-content';
    
    const img = document.createElement('img');
    img.src = cert.image;
    img.alt = cert.title;
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'certificate-preview-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.onclick = () => document.body.removeChild(modal);
    
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(img);
    modal.appendChild(modalContent);
    
    document.body.appendChild(modal);
    
    // Add event listener to close when clicking outside
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        document.body.removeChild(modal);
      }
    });
  };

  return (
    <>
      <div className="certificates-grid">
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-card">
           
            <div className="certificate-image">
              <img src={cert.image} alt={cert.title} />
              <div className="certificate-overlay">
                <button 
                  className="preview-btn"
                  onClick={(e) => openCertificatePreview(cert, e)}
                >
                  <Icon icon="mdi:eye-outline" width="24" height="24" />
                </button>
              </div>
            </div>
            <div className="certificate-details">
              <h3>{cert.title}</h3>
              <div className="certificate-meta">
                <span className="certificate-date">
                  <Icon icon="mdi:calendar-outline" width="16" height="16" />
                  Generated on: {cert.date}
                </span>
              </div>
              <div className="certificate-actions">
                <button 
                  className="download-btn" 
                  onClick={() => handleDownload(cert.title)}
                >
                  <Icon icon="mdi:download" width="18" height="18" />
                  <span>Download</span>
                </button>
                <button 
                  className="view-details-btn"
                  onClick={() => openCertificateModal(cert)}
                >
                  <Icon icon="mdi:information-outline" width="18" height="18" />
                <span>Details</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Details Modal */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        centered 
        className="certificate-details-modal"
        size="lg"
      >
        {selectedCertificate && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Certificate Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="certificate-form-layout">
                
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="form-label">Certificate Title</label>
                    <input type="text" className="form-control" value={selectedCertificate.title} readOnly />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Certificate ID</label>
                    <input type="text" className="form-control" value={selectedCertificate.certificateId} readOnly />
                  </div>
                </div>
                
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="form-label">Course Name</label>
                    <input type="text" className="form-control" value={selectedCertificate.courseName} readOnly />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Category</label>
                    <input type="text" className="form-control" value={selectedCertificate.type} readOnly />
                  </div>
                </div>
                
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="form-label">Issuing Organization</label>
                    <input type="text" className="form-control" value={selectedCertificate.issuer} readOnly />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Score</label>
                    <input type="text" className="form-control" value={selectedCertificate.score} readOnly />
                  </div>
                </div>
                
                <div className="row mb-3">
                  <div className="col-md-4 mb-3 mb-md-0">
                    <label className="form-label">Issue Date</label>
                    <input type="text" className="form-control" value={selectedCertificate.date} readOnly />
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                    <label className="form-label">Completion Date</label>
                    <input type="text" className="form-control" value={selectedCertificate.completionDate} readOnly />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Valid Until</label>
                    <input type="text" className="form-control" value={selectedCertificate.validUntil} readOnly />
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button 
                variant="btn btn-secondary" 
                onClick={() => setShowModal(false)}
              >
                Cancel
              </Button>
              <Button 
                variant="btn btn-primary" 
                onClick={() => handleDownload(selectedCertificate.title)}
              >
                <Icon icon="mdi:download" width="18" height="18" className="me-2" />
                Download Certificate
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </>
  );
}

export default UserCertificates;
