// src/utils/api.js

import RegisterRequest from '../models/RegisterRequest';
import LoginRequest from '../models/LoginRequest';
import AuthResponse from '../models/AuthResponse';

const BASE_URL = 'http://localhost:8080/api/v1/auth'; // Spring Boot backend adresinizi buraya yazın

const handleResponse = async (response) => {
  const responseJson = await response.json();
  if (response.ok) {
      return responseJson;
  } else {
      throw responseJson
  }
}

const api = {
  register: async (registerRequest) => {
    try{
      const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerRequest),
      });
      return handleResponse(response)
    } catch(error){
      throw error;
    }
  },

  login: async (loginRequest) => {
    try{
      const response = await fetch(`${BASE_URL}/authenticate`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginRequest),
      });
      return handleResponse(response)
    }catch(error){
      throw error;
    }
  },
};

export default api;
