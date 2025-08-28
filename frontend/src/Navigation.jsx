import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import HomePage from "./HomePage.jsx";
import Profile from "./Profile.jsx";

const Navigation = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/home" element={<HomePage />} />
                <Route path ="/profile" element={<Profile />} />

            </Routes>
        </Router>
    );
};

export default Navigation;
