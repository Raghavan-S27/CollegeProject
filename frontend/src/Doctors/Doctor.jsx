import { useNavigate } from "react-router-dom";
import '../CSSFolder/home.css';
import { getDoctorDetails } from '../Services/Service';
import {useEffect, useState} from "react";

const Doctor = () => {
    const [doctors, setDoctors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getDoctorDetails()
            .then((resp) => {
                setDoctors(resp.data);
                console.log(resp.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleBookAppointment = (doctor) => {
        navigate("/appointment", { state: { doctor } });
    };

    return (
        <section id="featured-doctors" className="doctors-section py-5">
            <div className="container">
                <h2 className="section-title text-center mb-5">Our Proud Collection Of Doctors</h2>
                <div className="row">
                    {doctors.map((doctor, index) => (
                        <div key={index} className="col-lg-4 col-md-6 mb-4">
                            <div className="doctor-card p-4 shadow-lg rounded-4 h-100 text-center">
                                <div className="doctor-img mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#0d6efd" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
                                    </svg>
                                </div>

                                <h3 className="doctor-name fw-bold text-dark">{doctor.name}</h3>
                                <p className="doctor-specialty text-uppercase fw-semibold text-primary mb-1">
                                    {doctor.specialization}
                                </p>
                                <p className="doctor-details">
                                    <i className="bi bi-briefcase me-2 text-secondary"></i>
                                    <span className="fw-bold">{doctor.experienceYears} Years</span> Of Experience
                                </p>
                                <p className="doctor-details">
                                    <i className="bi bi-mortarboard me-2 text-secondary"></i>
                                    <span className="fw-bold">{doctor.degree}</span>
                                </p>


                                <div className="doctor-actions mt-3">
                                    <button
                                        className="btn btn-primary w-100"
                                        onClick={() => handleBookAppointment(doctor)}
                                    >
                                        Book Appointment
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Doctor;
