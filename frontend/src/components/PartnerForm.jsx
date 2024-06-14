import React from 'react';
import { useState } from 'react';
import NavButton from './NavButton';

function PartnerForm() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imageLink, setImageLink] = useState('');
    const [isActive, setIsActive] = useState(false);

    // once data is entered, cache it to the server
    const addPartner = () => {
        const data = {
            name: name,
            description: description,
            imageLink: imageLink,
            isActive: isActive
        };

        fetch('http://localhost:4000', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="partner-tile">
            <h1>Add Partner Info</h1>

            <h3>Enter the name of the partner organization:</h3>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
            <br></br>

            <h3>Enter the organization description:</h3>
            <input type='text' value={description} onChange={(e) => setDescription(e.target.value)}></input>
            <br></br>

            <h3>Enter the image URL for the logo:</h3>
            <input type='text' value={imageLink} onChange={(e) => setImageLink(e.target.value)}></input>
            <br></br>

            <h3>Is the organization active?</h3>
            <input type='checkbox' checked={isActive} onChange={(e) => setIsActive(e.target.checked)}></input>
            <br></br>

            {/* Button to save data */}
            <div className="nav-button">
                <NavButton destination='/' text='Cancel' />
                <NavButton destination='/' text='Save' onClick={addPartner} />
            </div>
        </div>
    );
}

export default PartnerForm;