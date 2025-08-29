import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import HomePage from "./HomePage.jsx";
import Profile from "./ProfilePages/Profile.jsx";
import UserProfile from "./ProfilePages/UserProfile.jsx";
import PatientRecords from "./PatientRecords/PatientRecords.jsx";
import Appointment from "./Appointments/Appointment.jsx";
import Billing from "./Billing/Billing.jsx";
import NavBar from "./HomePageComponents/NavBar.jsx";

const Navigation = () => {
    return (

        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/home" element={<HomePage />} />
                <Route path ="/profile" element={<Profile />} />
                <Route path ="/userprofile" element={<UserProfile />} />
                <Route path = "/appointment" element={<Appointment />} />

                <Route path= "/patient" element={<PatientRecords />} />
                 <Route path= "/billing" element={<Billing />} />

            </Routes>
        </Router>
    );
};

export default Navigation;
