import React, { useContext } from "react";
import { ContactContext } from "../store/appContext";
import ContactCard from "../components/contactCard";

const Contacts = () => {
  const { contacts } = useContext(ContactContext);

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
