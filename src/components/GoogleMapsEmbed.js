import React from 'react';

function GoogleMapsEmbed({ mapUrl }) {
  return (
    <div className="map-container">
      <iframe
        title="map"
        width="100%"
        height="300"
        frameBorder="0"
        src={mapUrl}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default GoogleMapsEmbed;
