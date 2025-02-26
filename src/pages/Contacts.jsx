import React, { useContext } from "react";
import { ContactContext } from "../store/appContext";
import ContactCard from "../components/contactCard";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const { contacts } = useContext(ContactContext);
  const navigate = useNavigate();
  
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Contact List</h2>
        <button className="btn btn-success" onClick={() => navigate("/add-contact")}>
          <i className="fas fa-plus"></i> Add Contact
        </button>
      </div>
      
      {contacts.length === 0 ? (
        <p>No contacts available.</p>
      ) : (
        contacts.map((contact) => <ContactCard key={contact.id} contact={contact} />)
      )}
    </div>
  );
};

export default Contacts;
