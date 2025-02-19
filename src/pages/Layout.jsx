import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./Contacts";
import AddContact from "./AddContact";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Layout = () => {
  return (
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Contacts />} />
            <Route path="/add-contact" element={<AddContact />} />
          </Routes>
        </div>
  );
};

export default Layout;