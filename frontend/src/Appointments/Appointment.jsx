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

const Appointment = () => {
    const [showSuccess, setShowSuccess] = useState(false);

    const [details, setDetails] = useState({
        department: "",
        doctor: "",
        date: "",
        reason: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleBook = (e) => {
        e.preventDefault();
        setShowSuccess(true);

        // reset after booking
        setDetails({
            department: "",
            doctor: "",
            date: "",
            reason: "",
        });
    };

    // Get today's date
    const today = new Date();
    const minDate = today.toISOString().split("T")[0];

    // Get 7 days ahead
    const maxDateObj = new Date();
    maxDateObj.setDate(today.getDate() + 7);
    const maxDate = maxDateObj.toISOString().split("T")[0];

    return (
        <div className="container mt-5 book-appointment-container">
            {/* Header */}
            <div className="appointment-header text-center mb-4">
                <h2 className="fw-bold text-primary">
                    <FaCalendarPlus className="me-2" />
                    Book an Appointment
                </h2>
                <p className="text-muted">
                    Fill out the details below to schedule your appointment
                </p>
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
                                <Form.Select
                                    required
                                    onChange={handleChange}
                                    name="department"
                                    value={details.department}
                                >
                                    <option value="">Choose...</option>
                                    <option value="Cardiology">Cardiology</option>
                                    <option value="Neurology">Neurology</option>
                                    <option value="Pediatrics">Pediatrics</option>
                                    <option value="Orthopedics">Orthopedics</option>
                                    <option value="Dermatology">Dermatology</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label className="fw-semibold">
                                    <FaUserMd className="me-2 text-success" />
                                    Choose Doctor
                                </Form.Label>
                                <Form.Select
                                    required
                                    onChange={handleChange}
                                    name="doctor"
                                    value={details.doctor}
                                >
                                    <option value="">Choose...</option>
                                    <option value="Dr. Sarah Johnson">Dr. Sarah Johnson</option>
                                    <option value="Dr. Michael Chen">Dr. Michael Chen</option>
                                    <option value="Dr. Emily Rodriguez">Dr. Emily Rodriguez</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Label className="fw-semibold">📅 Appointment Date</Form.Label>
                            <div className="input-group">
                                <Form.Control
                                    type="date"
                                    required
                                    min={minDate}
                                    max={maxDate}
                                    className="bright-calendar"
                                    onChange={handleChange}
                                    name="date"
                                    value={details.date}
                                />

                            </div>
                        </Col>

                        <Col md={6} className="d-flex align-items-end">
                            <Button
                                variant="info"
                                className="w-100"
                                onClick={() => alert("Checking availability...")}
                            >
                                Check Availability
                            </Button>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold">Reason for Visit</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Describe your symptoms or reason for consultation"
                            required
                            onChange={handleChange}
                            name="reason"
                            value={details.reason}
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

export default Appointment;
