// src/utils/api.js

import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginRequest from '../models/LoginRequest';
import RegisterRequest from '../models/RegisterRequest';

const BASE_URL = 'http://localhost:8080/api/v1/auth';

const handleResponse = async (response) => {
    const responseJson = await response.json();
    if (response.ok) {
        if(responseJson.access_token && responseJson.refresh_token){
            await setTokens(responseJson.access_token, responseJson.refresh_token)
        }
        return responseJson;
    } else {
        throw responseJson;
    }
};

const setTokens = async (accessToken, refreshToken) => {
    try {
        await AsyncStorage.setItem('access_token', accessToken);
        await AsyncStorage.setItem('refresh_token', refreshToken);
    } catch (error) {
        console.error('Error saving tokens:', error);
    }
};

const getAuthHeader = async () => {
    try {
        const accessToken = await AsyncStorage.getItem('access_token');
        if (accessToken) {
            return {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            };
        }
    } catch (error) {
        console.error('Error getting access token:', error);
    }
    return {};
};

const api = {
    register: async (registerRequest) => {
        try {
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
        try {
            const authHeader = await getAuthHeader();
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
