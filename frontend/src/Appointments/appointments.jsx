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
import { FaCalendarPlus, FaStethoscope, FaUserMd, FaClock } from "react-icons/fa";
import "../CSSFolder/appointments.css";

const appointments = () => {
    const [showSuccess, setShowSuccess] = useState(false);

    const handleBook = (e) => {
        e.preventDefault();
        setShowSuccess(true);
    };

    // Get today's date
    const today = new Date();
    const minDate = today.toISOString().split("T")[0];

    // Get 7 days ahead
    const maxDateObj = new Date();
    maxDateObj.setDate(today.getDate() + 7);
    const maxDate = maxDateObj.toISOString().split("T")[0];

    // Predefined time slots
    const timeSlots = [
        "09:00 AM",
        "09:30 AM",
        "10:00 AM",
        "10:30 AM",
        "11:00 AM",
        "11:30 AM",
        "12:00 PM",
        "02:00 PM",
        "02:30 PM",
        "03:00 PM",
        "03:30 PM",
        "04:00 PM",
        "04:30 PM",
        "05:00 PM",
    ];

    return (
        <div className="container mt-5 book-appointment-container">
            {/* Header */}
            <div className="appointment-header text-center mb-4">
                <h2 className="fw-bold text-primary">
                    <FaCalendarPlus className="me-2" />
                    Book an Appointment
                </h2>
                <p className="text-muted">Fill out the details below to schedule your appointment</p>
            </div>

            {/* Appointment Form */}
            <Card className="shadow-lg p-4 form-card border-0 rounded-4">
                <Form onSubmit={handleBook}>
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label className="fw-semibold">
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
                                <Form.Label className="fw-semibold">
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
                                <Form.Label className="fw-semibold">
                                    📅 Appointment Date
                                </Form.Label>
                                <Form.Control
                                    type="date"
                                    required
                                    min={minDate}
                                    max={maxDate}
                                    className="bright-calendar"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label className="fw-semibold">
                                    <FaClock className="me-2 text-warning" />
                                    Appointment Time
                                </Form.Label>
                                <Form.Select required>
                                    <option value="">Select a Time</option>
                                    {timeSlots.map((slot, index) => (
                                        <option key={index}>{slot}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold">Reason for Visit</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Describe your symptoms or reason for consultation"
                            required
                        />
                    </Form.Group>

                    <div className="text-center">
                        <Button type="submit" className="btn-book px-4 py-2 fw-semibold">
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
