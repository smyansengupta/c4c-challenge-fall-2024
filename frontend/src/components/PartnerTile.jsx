import React from 'react';

/*
  A block for a single partner, containing information for them
  along with any tools to manage said information
*/

function PartnerTile({ partnerData }) {
  return (
    <div className="partner-tile">
      <img className="partner-thumbnail" src={partnerData.imageLink} alt={`${partnerData.name} logo`} />
      <hr />
      <div className="partner-info">
        <h2>{partnerData.name}</h2>
        <h4>{partnerData.isActive ? "Active" : "Inactive"}</h4>
        <p>{partnerData.description}</p>
      </div>
    </div>
  )
}

export default PartnerTile;