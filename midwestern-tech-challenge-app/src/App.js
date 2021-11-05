import React, { useState } from "react";
import logo from "./assets/logo.png";
import { Routes, Route, Link } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import "./App.css";

const App = () => {
  const initialFormValues = {
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    message: "",
  };
  // const [formValues, setFormValues] = useState(initialFormValues);

  return (
    <div>
      <header>
        <nav>
          <Link to="/">
            <img src={logo} class="Logo" />
          </Link>
          <Link to="/contact">contact</Link>
        </nav>
      </header>
      <Routes>
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
