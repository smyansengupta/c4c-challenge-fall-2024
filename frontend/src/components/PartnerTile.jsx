import React from 'react';

/*
  A block for a single partner, containing information for them
  along with any tools to manage said information
*/

function PartnerTile({ partnerData }) {

  return (
    <div className="partner-tile">
      <img className="partner-thumbnail" src={partnerData.imageLink} />
      <hr />
      <div className="partner-info">
        <h1>{partnerData.name}</h1>
        <h2>{partnerData.isActive ? "Active" : "Inactive"}</h2>
        <p>{partnerData.description}</p>
      </div>
    </div>
  )
}

export default PartnerTile;