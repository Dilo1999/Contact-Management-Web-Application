import axios from 'axios';

const API_URL = 'http://localhost:5000/contacts';

export const getContacts = () => axios.get(API_URL);
export const getContactById = (id) => axios.get(`${API_URL}/${id}`);
export const createContact = (data) => axios.post(API_URL, data);
export const updateContact = (id, data, isFormData = false) =>
    axios.put(`${API_URL}/${id}`, data, {
        headers: isFormData ? { 'Content-Type': 'multipart/form-data' } : {},
    });
export const deleteContact = (id) => axios.delete(`${API_URL}/${id}`);
