// DashboardPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Dashboard.css'; // Import CSS file for styling

const ADMIN_PASSWORD = 'admin123'; // Replace with your admin password

function DashboardPage() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setLoggedIn(true);
            setError('');
            alert('Login successful! You can now access the dashboard.');
        } else {
            setError('Incorrect password. Please try again.');
        }
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-wrapper">
                {!loggedIn && (
                    <div className="dashboard-content">
                        <h2>Admin Login</h2>
                        <form onSubmit={handleLogin}>
                            <div>
                                <label>Password:</label>
                                <input
                                    className="dashboard-input"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button className="dashboard-button" type="submit">Login</button>
                        </form>
                        {error && <p className="dashboard-error">{error}</p>}
                    </div>
                )}

                {loggedIn && (
                    <div className="dashboard-content">
                        <h2>Dashboard</h2>
                        <button className="dashboard-button" onClick={() => navigate('/profile')}>View Profiles</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DashboardPage;
