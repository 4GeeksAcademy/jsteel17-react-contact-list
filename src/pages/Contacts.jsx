import React from "react";
import { useContacts } from "../store/appContext";
import ContactCard from "../components/contactCard";

const Contacts = () => {
  const { contacts } = useContacts();

  return (
    <div>
      <h2>Contact List</h2>
      {contacts.length > 0 ? (
        contacts.map((contact) => <ContactCard key={contact.id} contact={contact} />)
      ) : (
        <p>No contacts available.</p>
      )}
    </div>
  );
};

export default Contacts;
