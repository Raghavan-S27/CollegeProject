import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Card,
    Button,
    Table,
    Form,
    Row,
    Col,
    Badge,
    Modal,
} from "react-bootstrap";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import "../CSSFolder/profile.css";

const Profile = () => {
    const [showModal, setShowModal] = useState(false);

    const handleAddDoctor = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleView = (doctor) => {
        alert(`Viewing details of ${doctor.name}`);
    };

    const handleEdit = (doctor) => {
        alert(`Editing ${doctor.name}`);
    };

    const handleDelete = (doctor) => {
        if (window.confirm(`Are you sure you want to delete ${doctor.name}?`)) {
            alert(`${doctor.name} deleted!`);
        }
    };

    const doctors = [
        {
            name: "Dr. Sarah Johnson",
            degree: "MD, FACC",
            specialization: "Cardiology",
            email: "sarah.johnson@hospital.com",
            phone: "+1 (555) 123-4567",
            status: "Active",
        },
        {
            name: "Dr. Michael Chen",
            degree: "MD, PhD",
            specialization: "Neurology",
            email: "michael.chen@hospital.com",
            phone: "+1 (555) 987-6543",
            status: "Active",
        },
        {
            name: "Dr. Emily Rodriguez",
            degree: "MD, FAAP",
            specialization: "Pediatrics",
            email: "emily.rodriguez@hospital.com",
            phone: "+1 (555) 456-7890",
            status: "On Leave",
        },
    ];

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
                            <th>Status</th>
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
                                <td>
                                    {doc.status === "Active" ? (
                                        <Badge bg="success">Active</Badge>
                                    ) : (
                                        <Badge bg="warning">On Leave</Badge>
                                    )}
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

            {/* Add Doctor Modal */}
            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Doctor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter doctor's name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Specialization</Form.Label>
                            <Form.Control type="text" placeholder="e.g. Cardiology" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="doctor@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="+1 (555) 000-0000" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Status</Form.Label>
                            <Form.Select>
                                <option>Active</option>
                                <option>On Leave</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className="btn-add" onClick={handleClose}>
                        Save Doctor
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Profile;
