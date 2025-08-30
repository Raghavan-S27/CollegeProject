import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/hospital";

const authHeaders = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials);
    const token = response.data.accessToken;
    console.log("Received token:", token);
    localStorage.setItem("role", response.data.role);
    console.log("Received role:", response.data.role);
    localStorage.setItem("accessToken", token);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const saveDoctorDetails = async (doctorData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/savedoctors`,
      doctorData,
      authHeaders()
    );
    return response.data;
  } catch (error) {
    console.error("Error saving doctor details:", error);
    throw error;
  }
};

export const getDoctorDetails = () => {
  return axios.get(`${API_BASE_URL}/getdoctors`, authHeaders());
};

export const deleteDoctor = async (doctorId) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/deletedoctors/${doctorId}`,
      authHeaders()
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting doctor:", error);
    throw error;
  }
};

export const savePatientRecords = async (patientData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/savepatientdetails`,
      patientData,
      authHeaders()
    );
    return response.data;
  } catch (error) {
    console.error("Error saving patient records:", error);
    throw error;
  }
};

export const getPatientRecords = () => {
  return axios.get(`${API_BASE_URL}/getpatientdetails`, authHeaders());
};

export const fetchDoctorsBySpecialization = (specialization) => {
  return axios.post(
    `${API_BASE_URL}/doctorbyspecialization/${specialization}`,
    {},
    authHeaders()
  );
};

export const searchDoctors = (keyword) => {
  return axios.post(
    `${API_BASE_URL}/searchdoctors/${keyword}`,
    {},
    authHeaders()
  );
};

export const deletePatient = async (patientId) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/deletepatient/${patientId}`,
      authHeaders()
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting patient:", error);
    throw error;
  }
};

export const userProfile = (profileDetails) => {
  return axios.post(
    `${API_BASE_URL}/userprofiledetails`,
    profileDetails,
    authHeaders()
  );
};

export const saveUserProfile = async (profileData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/updateuserprofile`,
      profileData,
      authHeaders()
    );
    return response.data;
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
};

export const getUserProfile = () => {
  return axios.get(`${API_BASE_URL}/getuserprofile`, authHeaders());
};

export const saveAppointment = async (appointmentData,doctorname) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/saveappointments/${doctorname}`,
      appointmentData,
      authHeaders()
    );
    return response.data;
  } catch (error) {
    console.error("Error saving appointment:", error);
    throw error;
  }
};
export const getAppointmentDetails = async (appointmentData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/fetchappointments`,
      appointmentData,
      authHeaders()
    );
    return response.data;
  } catch (error) {
    console.error("Error saving appointment:", error);
    throw error;
  }
};
