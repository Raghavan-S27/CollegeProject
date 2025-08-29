import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
    Card,
    Table,
    Button,
    Modal,
    Form,
} from "react-bootstrap";
import { FaUserInjured, FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import "../CSSFolder/patientRecords.css"

const PatientRecords = () => {
    const [showModal, setShowModal] = useState(false);
    const [patients, setPatients] = useState([
        { id: 1, name: "John Doe", age: 32, contact: "9876543210", diagnosis: "Flu", lastVisit: "2025-08-21" },
        { id: 2, name: "Emma Watson", age: 45, contact: "8765432109", diagnosis: "Diabetes", lastVisit: "2025-08-20" },
    ]);
    const [newPatient, setNewPatient] = useState({
        name: "",
        age: "",
        contact: "",
        diagnosis: "",
        lastVisit: "",
    });

    // Open modal
    const handleShow = () => setShowModal(true);
    const handleClose = () => {
        setShowModal(false);
        setNewPatient({ name: "", age: "", contact: "", diagnosis: "", lastVisit: "" });
    };

    // Add Patient
    const handleSave = () => {
        setPatients([
            ...patients,
            { id: patients.length + 1, ...newPatient },
        ]);
        handleClose();
    };

    // Delete Patient
    const handleDelete = (id) => {
        setPatients(patients.filter((p) => p.id !== id));
    };

    return (
        <div className="container mt-5 patient-records-container">
            {/* Header */}
            <div className="text-center mb-4">
                <h2 className="fw-bold text-primary">
                    <FaUserInjured className="me-2" />
                    Patient Records
                </h2>
                <p className="text-muted">Manage patient details and history</p>
            </div>

            {/* Records Table */}
            <Card className="shadow-lg border-0 rounded-4 p-3">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="fw-semibold">Patients List</h5>
                    <Button variant="primary" className="rounded-pill px-3" onClick={handleShow}>
                        <FaPlus className="me-2" /> Add Patient
                    </Button>
                </div>

                <Table hover responsive className="align-middle text-center">
                    <thead className="table-primary">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Contact</th>
                        <th>Diagnosis</th>
                        <th>Last Visit</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {patients.map((p) => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.age}</td>
                            <td>{p.contact}</td>
                            <td>{p.diagnosis}</td>
                            <td>{p.lastVisit}</td>
                            <td>
                                <Button size="sm" variant="warning" className="me-2">
                                    <FaEdit />
                                </Button>
                                <Button size="sm" variant="danger" onClick={() => handleDelete(p.id)}>
                                    <FaTrash />
                                </Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Card>

            {/* Add Patient Modal */}
            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>➕ Add New Patient</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-2">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={newPatient.name}
                                onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                type="number"
                                value={newPatient.age}
                                onChange={(e) => setNewPatient({ ...newPatient, age: e.target.value })}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Contact</Form.Label>
                            <Form.Control
                                type="tel"
                                value={newPatient.contact}
                                onChange={(e) => setNewPatient({ ...newPatient, contact: e.target.value })}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Diagnosis</Form.Label>
                            <Form.Control
                                type="text"
                                value={newPatient.diagnosis}
                                onChange={(e) => setNewPatient({ ...newPatient, diagnosis: e.target.value })}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Last Visit</Form.Label>
                            <Form.Control
                                type="date"
                                value={newPatient.lastVisit}
                                onChange={(e) => setNewPatient({ ...newPatient, lastVisit: e.target.value })}
                                required
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="primary" onClick={handleSave}>Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default PatientRecords;
