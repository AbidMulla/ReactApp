import React, { useState } from 'react';
import AccountInfo from './AccountInfo';
import Notification from './Notification';
import DeleteAccount from './DeleteAccount';
import './Settings.css';

function Settings() {
    const [activeTab, setActiveTab] = useState('account');

    return (
        <div className="contianer">
            <div className="row">
                <div className="col-12">
                    <div className="settings-container">
                        {/* Settings Tabs */}
                        <div className="settings-tabs-container">
                            <div className="settings-tabs">
                                <button
                                    className={`settings-tab-item ${activeTab === 'account' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('account')}
                                >
                                    Account Information
                                </button>
                                <button
                                    className={`settings-tab-item ${activeTab === 'notifications' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('notifications')}
                                >
                                    Notification Preferences
                                </button>
                                <button
                                    className={`settings-tab-item ${activeTab === 'delete' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('delete')}
                                >
                                    Delete Account
                                </button>
                            </div>
                        </div>

                        {/* Tab Content */}
                        <div className="settings-content-container">
                            {activeTab === 'account' && (
                                <div className="settings-card">
                                    <AccountInfo />
                                </div>
                            )}

                            {activeTab === 'notifications' && (
                                <div className="settings-card">
                                    <Notification />
                                </div>
                            )}

                            {activeTab === 'delete' && (
                                <div className="settings-card">
                                    <DeleteAccount />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;