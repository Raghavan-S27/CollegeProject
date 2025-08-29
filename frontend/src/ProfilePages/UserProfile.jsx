import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Card,
    Button,
    Row,
    Col,
    Badge,
    Table,
    Modal,
    Form,
} from "react-bootstrap";
import { FaEdit, FaCalendarAlt, FaHeartbeat } from "react-icons/fa";
import "../CSSFolder/userprofile.css";

const UserProfile = () => {
    const [showEdit, setShowEdit] = useState(false);

    const handleEditProfile = () => setShowEdit(true);
    const handleClose = () => setShowEdit(false);

    const user = {
        name: "Raghavan",
        email: "raghavan@example.com",
        phone: "1111",
        age: 18,
        gender: "Male",
        bloodGroup: "O+",
        allergies: "no",
        conditions: "jojo",
        medications: "[olpo",
    };

    const appointments = [
        {
            date: "2025-09-01",
            doctor: "Dr. Sarah Johnson",
            dept: "Cardiology",
            status: "Upcoming",
        },
        {
            date: "2025-08-15",
            doctor: "Dr. Michael Chen",
            dept: "Neurology",
            status: "Completed",
        },
    ];

    return (
        <div className="container mt-4 user-profile-container">
            {/* Stylish Header */}
            <div className="profile-header text-center">
                <h2>👤 User Profile</h2>
                <p>Manage your personal information and health records</p>
            </div>

            <Row className="g-4">
                {/* Personal Info */}
                <Col md={6}>
                    <Card className="info-card">
                        <Card.Body>
                            <h5 className="section-title">
                                <FaEdit className="me-2" />
                                Personal Info
                            </h5>
                            <p><strong>Name:</strong> {user.name}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Phone:</strong> {user.phone}</p>
                            <p><strong>Age:</strong> {user.age}</p>
                            <p><strong>Gender:</strong> {user.gender}</p>
                            <p><strong>Blood Group:</strong> {user.bloodGroup}</p>
                            <Button className="btn-edit mt-2" onClick={handleEditProfile}>
                                Edit Profile
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Medical Info */}
                <Col md={6}>
                    <Card className="info-card">
                        <Card.Body>
                            <h5 className="section-title">
                                <FaHeartbeat className="me-2" />
                                Medical Info
                            </h5>
                            <p><strong>Allergies:</strong> {user.allergies}</p>
                            <p><strong>Conditions:</strong> {user.conditions}</p>
                            <p><strong>Medications:</strong> {user.medications}</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Appointments */}
            <Card className="mt-4 shadow-sm">
                <Card.Body>
                    <h5 className="section-title">
                        <FaCalendarAlt className="me-2" />
                        My Appointments
                    </h5>
                    <Table hover responsive className="appointment-table">
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Doctor</th>
                            <th>Department</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {appointments.map((appt, i) => (
                            <tr key={i}>
                                <td>{appt.date}</td>
                                <td>{appt.doctor}</td>
                                <td>{appt.dept}</td>
                                <td>
                                    {appt.status === "Upcoming" ? (
                                        <Badge bg="primary">Upcoming</Badge>
                                    ) : (
                                        <Badge bg="success">Completed</Badge>
                                    )}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

            {/* Edit Profile Modal */}
            <Modal show={showEdit} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" defaultValue={user.name} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" defaultValue={user.email} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" defaultValue={user.phone} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number" defaultValue={user.age} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select defaultValue={user.gender}>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className="btn-edit" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default UserProfile;
