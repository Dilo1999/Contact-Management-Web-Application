import React, { useState } from 'react';
import axios from 'axios';

const AddContact = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [profileImage, setProfileImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('address', address);
        formData.append('email', email);
        formData.append('profile_image', profileImage);

        try {
            await axios.post('http://localhost:5000/contacts', formData);
            alert('Contact added successfully!');
            setName('');
            setAddress('');
            setEmail('');
            setProfileImage(null);
        } catch (error) {
            alert('Failed to add contact. Please try again.');
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Add Contact</h1>
            <form onSubmit={handleSubmit} className="w-50 mx-auto">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Enter address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="profileImage" className="form-label">Profile Image</label>
                    <input
                        type="file"
                        className="form-control"
                        id="profileImage"
                        onChange={(e) => setProfileImage(e.target.files[0])}
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Add Contact</button>
            </form>
        </div>
    );
};

export default AddContact;
