import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
    const location = useLocation();
    const prefilledDoctor = location.state?.doctor;

    const [showSuccess, setShowSuccess] = useState(false);
    const [availableSlots, setAvailableSlots] = useState([]); // slots for selected date
    const [bookedSlots, setBookedSlots] = useState({}); // store booked slots by date

    const [details, setDetails] = useState({
        department: "",
        doctor: "",
        date: "",
        reason: "",
        timeSlot: "",
    });

    // Prefill if doctor was passed
    useEffect(() => {
        if (prefilledDoctor) {
            setDetails((prev) => ({
                ...prev,
                department: prefilledDoctor.specialty || "",
                doctor: prefilledDoctor.name || "",
            }));
        }
    }, [prefilledDoctor]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Generate slots 9:00–16:30, 30 min each
    const generateSlots = () => {
        const slots = [];
        let start = new Date();
        start.setHours(9, 0, 0, 0);

        const end = new Date();
        end.setHours(16, 30, 0, 0);

        let id = 1;
        while (start < end) {
            const next = new Date(start.getTime() + 30 * 60000);
            slots.push({
                id: id++,
                startTime: start.toTimeString().slice(0, 5),
                endTime: next.toTimeString().slice(0, 5),
            });
            start = next;
        }
        return slots;
    };

    // Check availability (frontend only)
    const handleCheckAvailability = () => {
        if (!details.doctor || !details.department || !details.date) {
            alert("Please select doctor, department, and date first.");
            return;
        }

        const allSlots = generateSlots();
        const bookedForDate = bookedSlots[details.date] || [];

        // Filter out already booked slots
        const freeSlots = allSlots.filter(
            (slot) =>
                !bookedForDate.some(
                    (b) => b.startTime === slot.startTime && b.endTime === slot.endTime
                )
        );

        setAvailableSlots(freeSlots);
    };

    const handleBook = (e) => {
        e.preventDefault();
        if (!details.timeSlot) {
            alert("Please select a time slot before booking.");
            return;
        }

        // Save booked slot under the selected date
        const [startTime, endTime] = details.timeSlot.split(" - ");
        setBookedSlots((prev) => {
            const existing = prev[details.date] || [];
            return {
                ...prev,
                [details.date]: [...existing, { startTime, endTime }],
            };
        });

        setShowSuccess(true);

        // Reset form
        setDetails({
            department: "",
            doctor: "",
            date: "",
            reason: "",
            timeSlot: "",
        });
        setAvailableSlots([]);
    };

    const today = new Date();
    const minDate = today.toISOString().split("T")[0];
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
                                type="button"
                                onClick={handleCheckAvailability}
                            >
                                Check Availability
                            </Button>
                        </Col>
                    </Row>

                    {/* Available Slots */}
                    {availableSlots.length > 0 && (
                        <div className="mb-3">
                            <Form.Label className="fw-semibold">🕒 Select Time Slot</Form.Label>
                            <div className="d-flex flex-wrap gap-3">
                                {availableSlots.map((slot) => {
                                    const slotValue = `${slot.startTime} - ${slot.endTime}`;
                                    return (
                                        <Form.Check
                                            key={slot.id}
                                            type="radio"
                                            id={`slot-${slot.id}`}
                                            label={slotValue}
                                            name="timeSlot"
                                            value={slotValue}
                                            checked={details.timeSlot === slotValue}
                                            onChange={handleChange}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    )}

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