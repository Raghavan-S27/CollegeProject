import React, { useState } from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";

const Footer = () => {
    const [showContact, setShowContact] = useState(false);

    const handleClose = () => setShowContact(false);
    const handleShow = () => setShowContact(true);

    return (
        <>
            <footer
                className="pt-4 border-top"
                style={{ backgroundColor: "#0d1b2a", color: "#e0e1dd" }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left side - Company Info */}
                        <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
                            <h5 className="fw-bold" style={{ color: "#00b4d8" }}>
                                HealthCare+
                            </h5>
                            <p className="mb-0 small" style={{ color: "#adb5bd" }}>
                                © {new Date().getFullYear()} HealthCare+. All rights reserved.
                            </p>
                        </div>

                        {/* Center - Navigation Links */}
                        <div className="col-md-4 d-flex justify-content-center mb-3 mb-md-0">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a href="/home" className="nav-link px-2" style={{ color: "#e0e1dd" }}>
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link px-2" style={{ color: "#e0e1dd" }}>
                                        Appointments
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/doctors" className="nav-link px-2" style={{ color: "#e0e1dd" }}>
                                        Doctors
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <span
                                        role="button"
                                        className="nav-link px-2"
                                        style={{ color: "#e0e1dd", cursor: "pointer" }}
                                        onClick={handleShow}
                                    >
                                        Contact
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Right side - Social Icons */}
                        <div className="col-md-4 d-flex justify-content-center justify-content-md-end">
                            <a href="#" className="mx-2 fs-5" style={{ color: "#adb5bd" }}>
                                <FaLinkedinIn />
                            </a>
                            <a
                                href="https://github.com/Raghavan-S27"
                                className="mx-2 fs-5"
                                style={{ color: "#adb5bd" }}
                            >
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>
                <br />
            </footer>

            {/* Contact Modal */}
            <Modal show={showContact} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>📞 Contact Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        <FaEnvelope className="me-2 text-primary" />
                        Email: <strong>raghavan@example.com</strong>
                    </p>
                    <p>
                        <FaPhone className="me-2 text-success" />
                        Phone: <strong>+91 98765 43210</strong>
                    </p>
                    <p>
                        Address: <strong>123, HealthCare Street, Chennai, India</strong>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Footer;
