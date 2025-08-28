import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/hospital";

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
        localStorage.setItem("acessToken", token);
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
}