import React, { useState } from 'react';
import GoogleMapsEmbed from './GoogleMapsEmbed';
import '../css/ProfileCard.css';

function ProfileCard({ profile, index }) {
  const [showMap, setShowMap] = useState(false);
  const cardColor = index % 2 === 0 ? '#add8e6' : '#fce4ec'; // Alternate between light blue and very light pink
  const buttonStyle = {
    backgroundColor: '#ff007f', // Rose pink color
    color: '#fff', // White font color
  };

  const handleViewMapClick = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="profile-card" style={{ backgroundColor: cardColor }}>
      <div className="profile-photo-container">
        <img src={profile.photo} alt={profile.name} className="profile-photo" />
      </div>
      <div className="profile-details">
        <h3>{profile.name}</h3>
        <p><strong>Job Title:</strong> {profile.jobTitle}</p>
        <p><strong>Domain:</strong> {profile.domain}</p>
        <p><strong>Contact Number:</strong> {profile.contactNumber}</p>
        <button onClick={handleViewMapClick} style={buttonStyle}>View Map</button>
        {showMap && <GoogleMapsEmbed mapUrl={profile.mapUrl} />}
      </div>
    </div>
  );
}

export default ProfileCard;
