import React from 'react';

const NavBar = () => {
    return (
        <>
            {/* Main Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    {/* Brand Logo */}
                    <a className="navbar-brand" href="#">
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

                    {/* Regular Navbar Items (visible on large screens) */}
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Appointments</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Medications</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Health Records</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Doctors</a>
                            </li>

                        </ul>
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
                {/* Offcanvas Header */}
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
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

                {/* Offcanvas Body */}
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
                                <i className="bi bi-capsule me-2"></i>
                                Medications
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
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                <i className="bi bi-person-circle me-2"></i>
                                My Account
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </li>
                    </ul>

                    {/* Search Form in Offcanvas */}
                    <form className="d-flex mt-3" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search..."
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-primary" type="submit">
                            <i className="bi bi-search"></i>
                        </button>
                    </form>

                    {/* Login Buttons in Offcanvas */}

                </div>
            </div>
        </>
    );
};

export default NavBar;