// services/authService.js
import axios from 'axios';

const API_URL = '/api/';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}login`, { email, password });
    return response.data; // return user data or token from response
  } catch (error) {
    throw new Error('Login failed');
  }
};

export const signup = async (email, password, isAdmin) => {
  try {
    const response = await axios.post(`${API_URL}signup`, { email, password, isAdmin });
    return response.data; // return response data from signup
  } catch (error) {
    throw new Error('Signup failed');
  }
};
