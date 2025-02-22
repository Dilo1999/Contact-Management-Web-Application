import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { updateContact, getContactById } from '../services/contactService';

const EditContact = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const [existingImage, setExistingImage] = useState('');

    useEffect(() => {
        getContactById(id).then((res) => {
            const { name, address, email, profile_image } = res.data;
            setName(name);
            setAddress(address);
            setEmail(email);
            setExistingImage(profile_image);
        });
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('address', address);
        formData.append('email', email);
        if (profileImage) formData.append('profile_image', profileImage);

        try {
            await updateContact(id, formData, true); // Include true to indicate FormData is being sent
            alert('Contact updated successfully!');
        } catch (error) {
            alert('Failed to update contact.');
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Edit Contact</h1>
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
                    {existingImage && (
                        <img
                            src={`http://localhost:5000${existingImage}`}
                            alt="Profile"
                            className="img-thumbnail mb-2"
                            style={{ width: '150px' }}
                        />
                    )}
                    <input
                        type="file"
                        className="form-control"
                        id="profileImage"
                        onChange={(e) => setProfileImage(e.target.files[0])}
                    />
                </div>
                <button type="submit" className="btn btn-success w-100">Update Contact</button>
            </form>
        </div>
    );
};

export default EditContact;
