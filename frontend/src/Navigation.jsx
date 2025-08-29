import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import HomePage from "./HomePage.jsx";
import Profile from "./ProfilePages/Profile.jsx";
import UserProfile from "./ProfilePages/UserProfile.jsx";
import PatientRecords from "./PatientRecords/PatientRecords.jsx";
import Appointment from "./Appointments/Appointment.jsx";
import Billing from "./Billing/Billing.jsx";
import NavBar from "./HomePageComponents/NavBar.jsx";
import FeaturedDoctors from "./HomePageComponents/FeaturedDoctors.jsx";
const Navigation = () => {
  const location = useLocation();
  const path = location.pathname;
  const isAuthPage = path === "/" || path === "/register";

  if (isAuthPage) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    );
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/patient" element={<PatientRecords />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/doctors" element={<FeaturedDoctors />} />
      </Routes>
    </>
  );
};
export default Navigation;