import React from 'react';
import { useState } from 'react';
import NavButton from './NavButton';

function PartnerForm() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imageLink, setImageLink] = useState('');
    const [isActive, setIsActive] = useState(false);

    const data = {
        name: name,
        description: description,
        imageLink: imageLink,
        isActive: isActive
    }

    // once data is entered, cache it to the server
    const addPartner = () => {
        useEffect(() => {
            fetch('http://localhost:4000', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }, [data])
    }

    return (
        <div className="partner-tile">
            <h1>Add Partner Info</h1>

            <h3>Enter the name of the partner organization:</h3>
            <input type='text' onChange={(e) => setName(e.target.value)}></input>
            <br></br>

            <h3>Enter the organization description:</h3>
            <input type='text' onChange={(e) => setDescription(e.target.value)}></input>
            <br></br>

            <h3>Enter the image URL for the organization logo:</h3>
            <input type='text' onChange={(e) => setImageLink(e.target.value)}></input>
            <br></br>

            <h3>Is the organization active?</h3>
            <input type='checkbox' onChange={(e) => setIsActive(e.target.checked)}></input>
            <br></br>

            {/* Button to save data */}
            <NavButton destination='/' text='Save' onClick={addPartner} />
        </div>
    )
}

export default PartnerForm;