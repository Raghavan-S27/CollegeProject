import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Card,
    Button,
    Table,
    Form,
    Row,
    Col,
    Modal,
} from "react-bootstrap";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import "../CSSFolder/profile.css";
import {
    deleteDoctor,
    getDoctorDetails,
    saveDoctorDetails, // for now we reuse this for both add/edit
} from "../Services/Service";

const Profile = () => {
    const [showModal, setShowModal] = useState(false);
    const [editMode, setEditMode] = useState(false); // ✅ Track Add/Edit mode

    const [doctors, setDoctors] = useState([]);
    const [doctorDetails, setDoctorDetails] = useState({
        name: "",
        specialization: "",
        email: "",
        phoneNumber: "",
        gender: "",
        experienceYears: "",
        degree: "",
    });

    const handleAddDoctor = () => {
        setEditMode(false); // ✅ Add mode
        setDoctorDetails({
            name: "",
            specialization: "",
            email: "",
            phoneNumber: "",
            gender: "",
            experienceYears: "",
            degree: "",
        });
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    const handleView = (doctor) => {
        alert(`Viewing details of ${doctor.name}`);
    };

    const handleEdit = (doctor) => {
        setEditMode(true); // ✅ Edit mode
        setDoctorDetails({
            name: doctor.name || "",
            specialization: doctor.specialization || "",
            email: doctor.email || "",
            phoneNumber: doctor.phone || "",
            gender: doctor.gender || "",
            experienceYears: doctor.experienceYears || "",
            degree: doctor.degree || "",
        });
        setShowModal(true);
    };

    const handleDelete = (doctor) => {
        if (window.confirm(`Are you sure you want to delete ${doctor.name}?`)) {
            deleteDoctor(doctor.id)
                .then((resp) => {
                    console.log("Doctor deleted:", resp);
                    fetchDoctorsData();
                })
                .catch((err) => {
                    console.error("Error deleting doctor:", err);
                    alert("Failed to delete doctor. Please try again.");
                });

            alert(`${doctor.name} deleted!`);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDoctorDetails((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // ✅ For now both Add & Edit use the same save API
        saveDoctorDetails(doctorDetails)
            .then((resp) => {
                console.log("Doctor details saved:", resp);
                alert(editMode ? "Doctor updated successfully!" : "Doctor added successfully!");
                handleClose();
                fetchDoctorsData();
            })
            .catch((err) => {
                console.error("Error saving doctor details:", err);
                alert(editMode ? "Failed to update doctor. Please try again." : "Failed to add doctor. Please try again.");
            });
    };

    const fetchDoctorsData = () => {
        getDoctorDetails()
            .then((resp) => {
                console.log(resp.data);
                setDoctors(resp.data);
            })
            .catch((err) => {
                console.error("Error fetching doctor details:", err);
            });
    };

    useEffect(() => {
        fetchDoctorsData();
    }, []);

    return (
        <div className="container mt-4 profile-container">
            {/* Stylish Header */}
            <div className="profile-header text-center">
                <h2>👨‍⚕️ Doctor Management</h2>
                <p>Organize, monitor and manage all doctors from one sleek dashboard</p>
            </div>

            {/* Add Doctor Button */}
            <div className="d-flex justify-content-end mb-4">
                <Button className="btn-add" onClick={handleAddDoctor}>
                    + Add New Doctor
                </Button>
            </div>

            {/* Search & Filter */}
            <Row className="mb-4">
                <Col md={6} className="mb-2">
                    <Form.Control
                        type="text"
                        placeholder="🔍 Search doctors by name, specialization, or email..."
                    />
                </Col>
                <Col md={6}>
                    <Form.Select>
                        <option>All Departments</option>
                        <option>Cardiology</option>
                        <option>Neurology</option>
                        <option>Pediatrics</option>
                        <option>Orthopedics</option>
                        <option>Dermatology</option>
                    </Form.Select>
                </Col>
            </Row>

            {/* Dashboard Stats */}
            <Row className="mb-4">
                <Col md={4}>
                    <Card className="stat-card">
                        <Card.Body>
                            <h6>Total Doctors</h6>
                            <h3>{doctors.length}</h3>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="stat-card">
                        <Card.Body>
                            <h6>Active Doctors</h6>
                            <h3>{doctors.filter((d) => d.status === "Active").length}</h3>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="stat-card">
                        <Card.Body>
                            <h6>Departments</h6>
                            <h3>3</h3>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Doctor List Table */}
            <Card className="shadow-sm doctor-table-card">
                <Card.Body>
                    <Table hover responsive className="doctor-table">
                        <thead>
                        <tr>
                            <th>Doctor</th>
                            <th>Specialization</th>
                            <th>Contact</th>
                            <th className="text-center">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {doctors.map((doc, index) => (
                            <tr key={index}>
                                <td>
                                    <strong>{doc.name}</strong> <br />
                                    <span className="degree">{doc.degree}</span>
                                </td>
                                <td>{doc.specialization}</td>
                                <td>
                                    {doc.email} <br /> {doc.phone}
                                </td>

                                <td className="text-center">
                                    <FaEye
                                        className="action-icon text-primary me-3"
                                        title="View"
                                        onClick={() => handleView(doc)}
                                    />
                                    <FaEdit
                                        className="action-icon text-success me-3"
                                        title="Edit"
                                        onClick={() => handleEdit(doc)}
                                    />
                                    <FaTrash
                                        className="action-icon text-danger"
                                        title="Delete"
                                        onClick={() => handleDelete(doc)}
                                    />
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

            {/* Add/Edit Doctor Modal */}
            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{editMode ? "Edit Doctor" : "Add New Doctor"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                value={doctorDetails.name}
                                type="text"
                                placeholder="Enter doctor's name"
                                onChange={handleChange}
                                name={"name"}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Select Department</Form.Label>
                            <Form.Select
                                value={doctorDetails.specialization}
                                required
                                onChange={handleChange}
                                name={"specialization"}
                            >
                                <option value="">Choose...</option>
                                <option>Cardiology</option>
                                <option>Neurology</option>
                                <option>Pediatrics</option>
                                <option>Orthopedics</option>
                                <option>Dermatology</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Degree </Form.Label>
                            <Form.Control
                                value={doctorDetails.degree}
                                type="text"
                                placeholder="e.g. MD, FACC"
                                onChange={handleChange}
                                name={"degree"}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                value={doctorDetails.email}
                                type="email"
                                placeholder="doctor@example.com"
                                onChange={handleChange}
                                name={"email"}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                value={doctorDetails.phoneNumber}
                                type="text"
                                placeholder="+1 (555) 000-0000"
                                onChange={handleChange}
                                name={"phoneNumber"}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select
                                value={doctorDetails.gender}
                                onChange={handleChange}
                                name={"gender"}
                            >
                                <option value="">Choose...</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Experience</Form.Label>
                            <Form.Control
                                value={doctorDetails.experienceYears}
                                type="number"
                                placeholder="0"
                                onChange={handleChange}
                                name={"experienceYears"}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className="btn-add" onClick={handleSubmit}>
                        {editMode ? "Update Doctor" : "Save Doctor"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Profile;
