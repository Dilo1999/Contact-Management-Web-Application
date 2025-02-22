import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getContacts, deleteContact } from '../services/contactService';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        getContacts()
            .then((res) => {
                if (Array.isArray(res.data)) {
                    setContacts(res.data);
                } else {
                    console.error("Invalid data format received.");
                }
            })
            .catch((error) => {
                console.error("Failed to fetch contacts:", error);
            });
    }, []);

    const handleDelete = async (id) => {
        // Basic verification to ensure the ID is valid
        if (!id || typeof id !== 'number') {
            alert('Invalid contact ID.');
            return;
        }

        const userConfirmed = window.confirm("Are you sure you want to delete this contact?");
        if (!userConfirmed) {
            return;
        }

        try {
            await deleteContact(id);
            setContacts(contacts.filter((contact) => contact.id !== id));
            alert('Contact deleted successfully!');
        } catch (error) {
            console.error("Error deleting contact:", error);
            alert('Failed to delete contact.');
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Contact List</h1>
            <div className="d-flex justify-content-end mb-3">
                <Link to="/add" className="btn btn-primary">Add Contact</Link>
            </div>
            <div className="row">
                {contacts.map((contact) => (
                    <div className="col-md-4 mb-4" key={contact.id}>
                        <div className="card h-100">
                            <img 
                                src={`http://localhost:5000${contact.profile_image}`} 
                                alt={contact.name} 
                                className="card-img-top" 
                                style={{ height: '200px', objectFit: 'cover' }} 
                            />
                            <div className="card-body">
                                <h5 className="card-title">{contact.name}</h5>
                                <p className="card-text"><strong>Address:</strong> {contact.address}</p>
                                <p className="card-text"><strong>Email:</strong> {contact.email}</p>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <button 
                                    onClick={() => handleDelete(contact.id)} 
                                    className="btn btn-danger btn-sm">
                                    Delete
                                </button>
                                <Link to={`/edit/${contact.id}`} className="btn btn-secondary btn-sm">
                                    Edit
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactList;
