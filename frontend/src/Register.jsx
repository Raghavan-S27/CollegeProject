import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "./Services/Service";

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            registerUser(formData);
            console.log("Register form submitted:", formData);
            alert("Successfully Registered :)!");
            navigate("/");
        }
    };

    const validateForm = () => {
        if (!formData.username || !formData.email || !formData.password || !formData.role) {
            alert("All fields are required!");
            return false;
        }
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return false;
        }
        return true;
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <form className="form-signin" onSubmit={handleSubmit}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="72"
                            height="72"
                            fill="currentColor"
                            className="bi bi-hospital mb-4 mx-auto d-block"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1zM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z" />
                            <path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm2 14h2v-3H7zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm0-14H6v1h4zm2 7v7h3V8zm-8 7V8H1v7z" />
                        </svg>

                        <h1 className="h3 mb-3 fw-normal text-center">Register</h1>

                        {/* Full Name */}
                        <div className="form-floating mb-3">
                            <input
                                onChange={handleChange}
                                value={formData.username}
                                name="username"
                                type="text"
                                className="form-control"
                                id="fullName"
                                placeholder="John Doe"
                            />
                            <label htmlFor="fullName">Username</label>
                        </div>

                        {/* Email */}
                        <div className="form-floating mb-3">
                            <input
                                onChange={handleChange}
                                value={formData.email}
                                name="email"
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="email">Email Address</label>
                        </div>

                        {/* Password */}
                        <div className="form-floating mb-3">
                            <input
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                            />
                            <label htmlFor="password">Password</label>
                        </div>

                        {/* Confirm Password */}
                        <div className="form-floating mb-3">
                            <input
                                name="confirmPassword"
                                onChange={handleChange}
                                value={formData.confirmPassword}
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                placeholder="Confirm Password"
                            />
                            <label htmlFor="confirmPassword">Confirm Password</label>
                        </div>

                        {/* Role Dropdown */}
                        <div className="form-floating mb-3">
                            <select
                                name="role"
                                className="form-select"
                                value={formData.role}
                                onChange={handleChange}
                                id="role"
                                required
                            >
                                <option value="">Select Role</option>
                                <option value="patient">Patient</option>
                                <option value="admin">Admin</option>
                            </select>
                            <label htmlFor="role">Register as</label>
                        </div>

                        {/* Checkbox */}
                        <div className="form-check text-start my-3">
                            <input className="form-check-input" type="checkbox" value="remember-me" id="checkDefault" />
                            <label className="form-check-label" htmlFor="checkDefault">
                                Remember me
                            </label>
                        </div>

                        {/* Buttons */}
                        <button className="btn btn-primary w-100 py-2 mb-2">
                            Register
                        </button>

                        <button
                            className="btn btn-outline-secondary w-100 py-2"
                            type="button"
                            onClick={() => navigate('/')}
                        >
                            Already have an account? Login
                        </button>
                        <br />
                        <br />
                        <br />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
