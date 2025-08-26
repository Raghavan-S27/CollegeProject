import React from 'react';
import '../CSSFolder/home.css';

const NavBar = () => {
    return (
        <>
            {/* Main Navbar */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        {/* Brand Logo */}
                        <a className="navbar-brand fw-bold" href="#">
                            <i className="bi bi-hospital me-2"></i>
                            HealthCare System
                        </a>

                        {/* Toggle Button for Offcanvas */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar"
                            aria-controls="offcanvasNavbar"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Regular Navbar Items */}
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Appointments</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Health Records</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Doctors</a>
                                </li>
                            </ul>

                            {/* Search Bar with Improved SVG Icon */}
                            <div className="d-flex align-items-center me-3">
                                <div className="input-group" style={{ maxWidth: '220px' }}>
                                <span className="input-group-text bg-transparent border-end-0 text-light">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                    </svg>
                                </span>
                                    <input
                                        className="form-control border-start-0 ps-0"
                                        type="search"
                                        placeholder="Search..."
                                        aria-label="Search"
                                    />
                                </div>
                            </div>

                            {/* Profile Icon without Dropdown Arrow */}
                            <div className="nav-item dropdown">
                                <a className="nav-link text-white p-0 ms-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <div className="bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: '38px', height: '38px' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#0d6efd" viewBox="0 0 16 16">
                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
                                        </svg>
                                    </div>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><a className="dropdown-item" href="#">Profile</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Offcanvas Menu */}
                <div
                    className="offcanvas offcanvas-end"
                    tabIndex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title fw-bold" id="offcanvasNavbarLabel">
                            <i className="bi bi-hospital me-2"></i>
                            HealthCare Menu
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>

                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    <i className="bi bi-house me-2"></i>
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-calendar-check me-2"></i>
                                    Appointments
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-file-medical me-2"></i>
                                    Health Records
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-person-badge me-2"></i>
                                    Doctors
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
        </>
    );
};

export default NavBar;