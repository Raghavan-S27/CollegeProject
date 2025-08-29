import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Card,
    Form,
    Button,
    Row,
    Col,
    Table,
} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { FaFileInvoice, FaPlus, FaTrash } from "react-icons/fa";
import "../CSSFolder/billing.css";

const Billing = () => {
    const location = useLocation();
    const passedPatient = location.state?.patient || {};

    // State for patient billing
    const [patientName, setPatientName] = useState(passedPatient.name || "");
    const [age, setAge] = useState(passedPatient.age || "");
    const [contact, setContact] = useState(passedPatient.contact || "");
    const [diagnosis, setDiagnosis] = useState(passedPatient.diagnosis || "");

    // State for bill items
    const [items, setItems] = useState([{ description: "", amount: "" }]);
    const [bills, setBills] = useState([]);

    // Add new bill item row
    const handleAddItem = () => {
        setItems([...items, { description: "", amount: "" }]);
    };

    // Remove bill item row
    const handleRemoveItem = (index) => {
        const updated = [...items];
        updated.splice(index, 1);
        setItems(updated);
    };

    // Update item details
    const handleItemChange = (index, field, value) => {
        const updated = [...items];
        updated[index][field] = value;
        setItems(updated);
    };

    // Generate bill
    const handleGenerateBill = () => {
        const total = items.reduce(
            (sum, item) => sum + (parseFloat(item.amount) || 0),
            0
        );

        const newBill = {
            id: bills.length + 1,
            patientName,
            age,
            contact,
            diagnosis,
            items,
            total,
            date: new Date().toLocaleDateString(),
        };

        setBills([...bills, newBill]);

        // Reset form
        setItems([{ description: "", amount: "" }]);
    };

    return (
        <div className="container mt-5 billing-container">
            {/* Header */}
            <div className="text-center mb-4">
                <h2 className="fw-bold text-success">
                    <FaFileInvoice className="me-2" />
                    Billing System
                </h2>
                <p className="text-muted">Generate and view patient bills</p>
            </div>

            {/* Billing Form */}
            <Card className="shadow-lg p-4 border-0 rounded-4 mb-5">
                <h5 className="fw-semibold mb-3">Patient Information</h5>
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Patient Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={patientName}
                                onChange={(e) => setPatientName(e.target.value)}
                                readOnly={!!passedPatient.name} // lock if coming from Profile
                            />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group>
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                type="number"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group>
                            <Form.Label>Contact</Form.Label>
                            <Form.Control
                                type="tel"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md={12}>
                        <Form.Group>
                            <Form.Label>Diagnosis</Form.Label>
                            <Form.Control
                                type="text"
                                value={diagnosis}
                                onChange={(e) => setDiagnosis(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                {/* Bill Items */}
                <h5 className="fw-semibold mt-4 mb-3">Bill Items</h5>
                {items.map((item, index) => (
                    <Row key={index} className="mb-2">
                        <Col md={7}>
                            <Form.Control
                                type="text"
                                placeholder="Description (e.g., Consultation, Medicine)"
                                value={item.description}
                                onChange={(e) =>
                                    handleItemChange(index, "description", e.target.value)
                                }
                            />
                        </Col>
                        <Col md={3}>
                            <Form.Control
                                type="number"
                                placeholder="Amount"
                                value={item.amount}
                                onChange={(e) =>
                                    handleItemChange(index, "amount", e.target.value)
                                }
                            />
                        </Col>
                        <Col md={2} className="text-center">
                            {items.length > 1 && (
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => handleRemoveItem(index)}
                                >
                                    <FaTrash />
                                </Button>
                            )}
                        </Col>
                    </Row>
                ))}
                <Button variant="outline-success" size="sm" onClick={handleAddItem}>
                    <FaPlus className="me-1" /> Add Item
                </Button>

                <div className="text-center mt-4">
                    <Button
                        variant="success"
                        className="px-4 py-2 fw-semibold"
                        onClick={handleGenerateBill}
                    >
                        Generate Bill
                    </Button>
                </div>
            </Card>

            {/* Generated Bills Table */}
            <Card className="shadow-lg p-4 border-0 rounded-4">
                <h5 className="fw-semibold mb-3">Generated Bills</h5>
                <Table hover responsive className="align-middle text-center">
                    <thead className="table-success">
                    <tr>
                        <th>Bill ID</th>
                        <th>Patient</th>
                        <th>Diagnosis</th>
                        <th>Date</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bills.map((bill) => (
                        <tr key={bill.id}>
                            <td>{bill.id}</td>
                            <td>{bill.patientName}</td>
                            <td>{bill.diagnosis}</td>
                            <td>{bill.date}</td>
                            <td>₹{bill.total}</td>
                        </tr>
                    ))}
                    {bills.length === 0 && (
                        <tr>
                            <td colSpan={5} className="text-muted">
                                No bills generated yet.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </Card>
        </div>
    );
};

export default Billing;
