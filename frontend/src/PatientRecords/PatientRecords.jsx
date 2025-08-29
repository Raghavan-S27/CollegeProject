import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Card,
    Table,
    Button,
    Modal,
    Form,
} from "react-bootstrap";
import { FaUserInjured, FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../CSSFolder/patientRecords.css";
import { getPatientRecords, savePatientRecords } from "../Services/Service";
import { format } from "date-fns";

const PatientRecords = () => {
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [patients, setPatients] = useState([
    ]);

    const [newPatient, setNewPatient] = useState({
        name: "",
        age: "",
        contact: "",
        dob: "",
        address: "",
        diagnosis: "",
       
    });

    // Open & Close Modal
    const handleShow = () => setShowModal(true);
    const handleClose = () => {
        setShowModal(false);
        setNewPatient({
            name: "",
            age: "",
            contact: "",
            dob: "",
            address: "",
            diagnosis: "",
        });
    };

    // Add Patient
    const handleSave = () => {
        // setPatients([...patients, { id: patients.length + 1, ...newPatient }]);
        savePatientRecords(newPatient);  
        handleClose();
    };

    // Delete Patient
    const handleDelete = (id) => {
        setPatients(patients.filter((p) => p.id !== id));
    };

    // Navigate to Billing with selected patient
    const handleGenerateBill = (patient) => {
        navigate("/billing", { state: { patient } });
    };

    // Handle input changes
    const handleChangePatient = (e) => {
        const { name, value } = e.target;
        setNewPatient((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    useEffect(() => {
        getPatientRecords().then((resp) => {
            console.log("Patient records fetched:", resp.data);
            setPatients(resp.data);
        }).catch((err) => {
            console.error("Error fetching patient records:", err);
        });
    }, []);

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
                        <th>DOB</th>
                        <th>Address</th>
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
                            <td>{p.dob}</td>
                            <td>{p.address}</td>
                            <td>{p.diagnosis}</td>
                            <td>{
                                format(new Date(p.lastVisit), 'dd-MM-yyyy')
                                }</td>
                            <td>
                                <Button size="sm" variant="warning" className="me-2">
                                    <FaEdit />
                                </Button>
                                <Button
                                    size="sm"
                                    variant="danger"
                                    className="me-2"
                                    onClick={() => handleDelete(p.id)}
                                >
                                    <FaTrash />
                                </Button>
                                <Button
                                    size="sm"
                                    variant="info"
                                    onClick={() => handleGenerateBill(p)}
                                >
                                    💳 Generate Bill
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
                                name="name"
                                value={newPatient.name}
                                onChange={handleChangePatient}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                type="number"
                                name="age"
                                value={newPatient.age}
                                onChange={handleChangePatient}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Contact</Form.Label>
                            <Form.Control
                                type="tel"
                                name="contact"
                                value={newPatient.contact}
                                onChange={handleChangePatient}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control
                                type="date"
                                name="dob"
                                value={newPatient.dob}
                                onChange={handleChangePatient}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                name="address"
                                value={newPatient.address}
                                onChange={handleChangePatient}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Diagnosis</Form.Label>
                            <Form.Control
                                type="text"
                                name="diagnosis"
                                value={newPatient.diagnosis}
                                onChange={handleChangePatient}
                                required
                            />
                        </Form.Group>
                        {/* <Form.Group className="mb-2">
                            <Form.Label>Last Visit</Form.Label>
                            <Form.Control
                                type="date"
                                name="lastVisit"
                                value={newPatient.lastVisit}
                                onChange={handleChangePatient}
                                required
                            />
                        </Form.Group> */}
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
