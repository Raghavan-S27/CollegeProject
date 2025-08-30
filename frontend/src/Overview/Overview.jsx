// src/Pages/Overview.js
import React from "react";
import { FaUserInjured, FaCalendarAlt, FaFileMedical, FaMoneyCheckAlt } from "react-icons/fa";
import "../CSSFolder/overview.css"; // custom CSS

const Overview = () => {
    return (
        <div className="overview-container">
            <div className="overview-header text-center">
                <h1 className="text-primary fw-bold mb-3">Welcome to HealthCare+</h1>
                <p className="text-muted lead mx-auto overview-subtitle">
                    HealthCare+ is a modern Health Management System designed to simplify
                    patient care, appointments, and medical record management.
                </p>
            </div>

            <div className="container mt-5">
                <div className="row g-4">
                    <div className="col-md-6 col-lg-3">
                        <div className="feature-card shadow-lg p-4 rounded-4 text-center">
                            <FaUserInjured className="feature-icon text-primary mb-3" />
                            <h5 className="fw-bold">Patient Management</h5>
                            <p>Keep track of patient records efficiently with ease.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="feature-card shadow-lg p-4 rounded-4 text-center">
                            <FaCalendarAlt className="feature-icon text-success mb-3" />
                            <h5 className="fw-bold">Appointment Booking</h5>
                            <p>Book appointments with available doctors and slots seamlessly.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="feature-card shadow-lg p-4 rounded-4 text-center">
                            <FaFileMedical className="feature-icon text-warning mb-3" />
                            <h5 className="fw-bold">Medical Records</h5>
                            <p>Maintain diagnosis, prescriptions, and treatment history securely.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="feature-card shadow-lg p-4 rounded-4 text-center">
                            <FaMoneyCheckAlt className="feature-icon text-danger mb-3" />
                            <h5 className="fw-bold">Billing</h5>
                            <p>Generate bills easily and track payments accurately.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
