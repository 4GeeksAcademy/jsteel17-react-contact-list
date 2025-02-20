import React, { useState } from "react";
import { useContacts } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import contactpic from "../assets/img/contactpic.jpg";


const ContactCard = ({ contact }) => {
  const { deleteContact } = useContacts();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    deleteContact(contact.id);
    setShowModal(false);
  };

  return (
    <div className="card mb-3 shadow-sm p-3">
      <div className="d-flex align-items-center">
        <img
          src={contactpic}
          alt="Profile"
          className="rounded-circle me-3"
        />

        <div className="flex-grow-1">
          <h5 className="mb-1">{contact.name}</h5>
          <p className="mb-1">
            <i className="fas fa-map-marker-alt text-secondary me-2"></i>
            {contact.address}
          </p>
          <p className="mb-1">
            <i className="fas fa-phone text-secondary me-2"></i>
            {contact.phone}
          </p>
          <p className="mb-0">
            <i className="fas fa-envelope text-secondary me-2"></i>
            {contact.email}
          </p>
        </div>

        <div>
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => navigate("/add-contact", { state: { contact } })}
          >
            <i className="fas fa-pencil-alt"></i>
          </button>

          <button className="btn btn-outline-danger" onClick={() => setShowModal(true)}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete <strong>{contact.full_name}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ContactCard;