import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import HomePage from "./HomePage.jsx";
import Profile from "./ProfilePages/Profile.jsx";
import UserProfile from "./ProfilePages/UserProfile.jsx";
import Appointments from "./Appointments/appointments.jsx";
import PatientRecords from "./PatientRecords/PatientRecords.jsx";

const Navigation = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/home" element={<HomePage />} />
                <Route path ="/profile" element={<Profile />} />
                <Route path ="/userprofile" element={<UserProfile />} />
                <Route path = "/appointments" element={<Appointments />} />

                <Route path= "/patientRecords" element={<PatientRecords />} />

            </Routes>
        </Router>
    );
};

export default Navigation;
