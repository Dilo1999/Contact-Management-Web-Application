import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
            <h1 className="mb-4 text-primary">Welcome to the Contact Application</h1>
            <p className="text-secondary mb-4">Manage your contacts efficiently and effortlessly!</p>
            <button onClick={() => navigate('/contacts')} className="btn btn-lg btn-primary">
                Go to Contacts
            </button>
        </div>
    );
};

export default Welcome;
