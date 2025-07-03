import axios from 'axios';

const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

const api = axios.create({
  baseURL: `${BACKEND_BASE_URL}/api`,
  headers: { 'Content-Type': 'application/json' }
});

export const submitContactForm = (formData) => api.post('/contact', formData);