import React from 'react';
import '../CSSFolder/home.css';
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();

    const handleAppointment = () => {
        navigate("/appointment");
    };

    const handleGetStarted = () => {
        const section = document.getElementById("featured-doctors");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="Title" className="hero-section">
            <div className="container col-xxl-8 px-4 pt-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 pt-5">

                    {/* Hero Image */}
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img
                            src="https://img.freepik.com/free-vector/medical-healthcare-background-with-doctor_1017-17602.jpg"
                            className="d-block mx-lg-auto img-fluid rounded-4 shadow-lg"
                            alt="Healthcare illustration"
                            loading="lazy"
                        />
                    </div>

                    {/* Hero Content */}
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                            Your Personal Health Companion
                        </h1>
                        <p className="lead text-muted mb-4">
                            Manage appointments, track records, and connect with top doctors easily.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button
                                type="button"
                                className="btn btn-dark btn-lg px-4 me-md-2"
                                onClick={handleGetStarted}
                            >
                                Get Started
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-dark btn-lg px-4"
                                onClick={handleAppointment}
                            >
                                Book Appointment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </section>
    );
};

export default Hero;
