import React from 'react';
import '../CSSFolder/home.css';

const FeaturedDoctors = () => {
    const doctors = [
        {
            name: "A",
            specialty: "Cardiologist",
            experience: "12 years",
            education: "MD, Harvard Medical School",
            img: "cardiologist"
        },
        {
            name: "B",
            specialty: "Neurologist",
            experience: "9 years",
            education: "MD, Johns Hopkins University",
            img: "neurologist"
        },
        {
            name: "C",
            specialty: "Pediatrician",
            experience: "15 years",
            education: "MD, Stanford University",
            img: "pediatrician"
        }
    ];

    return (
        <section className="doctors-section">
            <div className="container">
                <h2 className="section-title">Our Featured Doctors</h2>
                <div className="row">
                    {doctors.map((doctor, index) => (
                        <div key={index} className="col-lg-4 col-md-6 mb-4">
                            <div className="doctor-card">
                                <div className="doctor-img">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#0d6efd" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
                                    </svg>
                                </div>
                                <div className="doctor-info">
                                    <h3 className="doctor-name">{doctor.name}</h3>
                                    <p className="doctor-specialty">{doctor.specialty}</p>
                                    <p className="doctor-details">
                                        <i className="bi bi-briefcase me-2"></i>
                                        {doctor.experience} experience
                                    </p>
                                    <p className="doctor-details">
                                        <i className="bi bi-mortarboard me-2"></i>
                                        {doctor.education}
                                    </p>
                                    <div className="doctor-actions">
                                        <button className="btn-profile">View Profile</button>
                                        <button className="btn-appointment">Book Appointment</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedDoctors;