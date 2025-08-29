import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Card,
    Form,
    Button,
    Row,
    Col,
    Modal,
} from "react-bootstrap";
import { FaCalendarPlus, FaStethoscope, FaUserMd } from "react-icons/fa";
import "../CSSFolder/appointments.css";

const appointments = () => {
    const [showSuccess, setShowSuccess] = useState(false);

    const handleBook = (e) => {
        e.preventDefault();
        setShowSuccess(true);
    };

    return (
        <div className="container mt-5 book-appointment-container">
            {/* Header */}
            <div className="appointment-header text-center">
                <h2>
                    <FaCalendarPlus className="me-2" />
                    Book an Appointment
                </h2>
                <p>Fill out the details below to schedule your appointment</p>
            </div>

            {/* Appointment Form */}
            <Card className="shadow-sm p-4 form-card">
                <Form onSubmit={handleBook}>
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>
                                    <FaStethoscope className="me-2 text-primary" />
                                    Select Department
                                </Form.Label>
                                <Form.Select required>
                                    <option value="">Choose...</option>
                                    <option>Cardiology</option>
                                    <option>Neurology</option>
                                    <option>Pediatrics</option>
                                    <option>Orthopedics</option>
                                    <option>Dermatology</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>
                                    <FaUserMd className="me-2 text-success" />
                                    Choose Doctor
                                </Form.Label>
                                <Form.Select required>
                                    <option value="">Choose...</option>
                                    <option>Dr. Sarah Johnson</option>
                                    <option>Dr. Michael Chen</option>
                                    <option>Dr. Emily Rodriguez</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Appointment Date</Form.Label>
                                <Form.Control type="date" required />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Appointment Time</Form.Label>
                                <Form.Control type="time" required />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3">
                        <Form.Label>Reason for Visit</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Describe your symptoms or reason for consultation"
                            required
                        />
                    </Form.Group>

                    <div className="text-center">
                        <Button type="submit" className="btn-book">
                            Confirm Appointment
                        </Button>
                    </div>
                </Form>
            </Card>

            {/* Success Modal */}
            <Modal show={showSuccess} onHide={() => setShowSuccess(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>✅ Appointment Booked</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Your appointment has been successfully scheduled.
                    You will receive a confirmation email shortly.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => setShowSuccess(false)}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default appointments;
