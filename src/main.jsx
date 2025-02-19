import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ContactProvider } from "./store/appContext";
import Layout from "./pages/Layout";

const Main = () => {
  return (
    <ContactProvider>
      <Router>
        <Layout />
      </Router>
    </ContactProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
