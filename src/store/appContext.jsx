import { createContext, useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const ContactContext = createContext();

const URL = "https://playground.4geeks.com/contact/agendas";

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const response = await fetch(`${URL}/claudio/contacts`);
      const data = await response.json();
      setContacts(data.contacts);
      console.log(data)
    } catch (error) {
      console.error("Error fetching contacts:", error);
      }
  };
  

  const addContact = async (contact) => {
    try {
      const response = await fetch(`${URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...contact, agenda_slug: "my_agenda" }),
      });
      if (response.ok) fetchContacts();
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  const updateContact = async (id, updatedContact) => {
    try {
      const response = await fetch(`${URL}${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedContact),
      });
      if (response.ok) fetchContacts();
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  const deleteContact = async (id) => {
    try {
      const response = await fetch(`${URL}${id}`, { method: "DELETE" });
      if (response.ok) fetchContacts();
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <ContactContext.Provider value={{ contacts, addContact, updateContact, deleteContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContacts = () => useContext(ContactContext);
