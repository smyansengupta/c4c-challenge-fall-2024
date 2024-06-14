import { useState, useEffect } from 'react';
import PartnerTile from './PartnerTile';
import NavButton from './NavButton';

/*
  The top-level component containing everything relevant to the dashboard,
  including information on each partner
*/
function Dashboard() {
  const [partners, setPartners] = useState([]);

  // Load all partners on initial page load 
  useEffect(() => {
    fetch('http://localhost:4000', {
      method: 'GET',
    })
    .then((res) => res.json())
    .then((data) => {
      setPartners(data);
    })
    .catch((error) => console.error('Error fetching partners:', error));
  }, []);

  return (
    <div id="main-content">
      <div id="main-partners-grid">
        <div className="nav-button">
          <NavButton destination='/add-partner' text='Add Partner' />
        </div>
        {partners.map((partner) => (
          <PartnerTile key={partner.name} partnerData={partner} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;