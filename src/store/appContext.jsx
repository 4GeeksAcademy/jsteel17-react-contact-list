import { createContext, useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const ContactContext = createContext();

const URL = "https://playground.4geeks.com/contact/agendas/jsteel17";

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const createAgenda = async () => {
    try {
     let response = await fetch(URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"}
      })
      if (response.status!==201) {
        alert("unable to create agenda at this time")
      } else {
        let data = await response.json()
        console.log(data)
        fetchContacts()
      }
    } catch(error) {
      console.error("Error creating agenda:", error);
      }
  }

  const fetchContacts = async () => {
    try {
      const response = await fetch(`${URL}/contacts`);
      if (response.status===404) {
        createAgenda()
      } else {
        const data = await response.json();
      setContacts(data.contacts);
      console.log(data)
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
      }
  };
  

  const addContact = async (contact) => {
    try {
      const response = await fetch(`${URL}/contacts`, {
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
      const response = await fetch(`${URL}/contacts/${id}`, {
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
      const response = await fetch(`${URL}/contacts/${id}`, { method: "DELETE" });
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
