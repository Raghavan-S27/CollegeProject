import React, { useEffect, useState } from "react";
import axios from "axios";
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
import { getUserProfile, saveUserProfile } from "../Services/Service";

const UserProfile = () => {
    const [showEdit, setShowEdit] = useState(false);
    const [user, setUser] = useState({
        id: 1,
        name: "Raghavan",
        email: "raghavan@example.com",
        phone: "1111",
        age: 18,
        gender: "Male",
        bloodGroup: "O+",
        
    });

    const [formData, setFormData] = useState(user);

    const handleEditProfile = () => {
        setFormData(user); // reset form with latest user data
        setShowEdit(true);
    };
    const handleClose = () => setShowEdit(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        saveUserProfile(formData)
            .then((res) => {
                console.log("Profile updated:", res);
                setShowEdit(false);
            })
            .catch((err) => {
                console.error("Error updating profile:", err);
                alert("Failed to update profile. Please try again.");
            });
    };

    const appointments = [
        { date: "2025-09-01", doctor: "Dr. Sarah Johnson", dept: "Cardiology", status: "Upcoming" },
        { date: "2025-08-15", doctor: "Dr. Michael Chen", dept: "Neurology", status: "Completed" },
    ];

   const fetchUserProfile = () => {
        getUserProfile()
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => {
                console.error("Error fetching user profile:", err);
            });
    }
    useEffect(() => {
        fetchUserProfile();
}, []);
    return (
        <div className="container mt-4 user-profile-container">
            <div className="profile-header text-center">
                <h2>👤 User Profile</h2>
                <p>Manage your personal information and health records</p>
            </div>

            <Row className="g-4">
                <Col md={6}>
                    <Card className="info-card">
                        <Card.Body>
                            <h5 className="section-title">
                                <FaEdit className="me-2" /> Personal Info
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

                <Col md={6}>
                    <Card className="info-card">
                        <Card.Body>
                            <h5 className="section-title">
                                <FaHeartbeat className="me-2" /> Medical Info
                            </h5>
                            <p><strong>Allergies:</strong> {user.allergies}</p>
                            <p><strong>Conditions:</strong> {user.conditions}</p>
                            <p><strong>Medications:</strong> {user.medications}</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Card className="mt-4 shadow-sm">
                <Card.Body>
                    <h5 className="section-title">
                        <FaCalendarAlt className="me-2" /> My Appointments
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
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                            >
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
                    <Button className="btn-edit" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default UserProfile;
