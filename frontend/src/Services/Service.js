import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/hospital";

const authHeaders = () => ({
  headers: {
    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    }
});

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/register`, userData);
        return response.data;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, credentials);
        const token = response.data.accessToken;
        console.log("Received token:", token);
        localStorage.setItem("accessToken", token);
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
}

export const saveDoctorDetails = async (doctorData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/savedoctors`, doctorData, authHeaders());
        return response.data;
    } catch (error) {
        console.error("Error saving doctor details:", error);
        throw error;
    }
}

export const getDoctorDetails = () => {
    
        return axios.get(`${API_BASE_URL}/getdoctors`, authHeaders());
        
}

export const deleteDoctor = async (doctorId) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/deletedoctors/${doctorId}`, authHeaders());
        return response.data;
    } catch (error) {
        console.error("Error deleting doctor:", error);
        throw error;
    }
}