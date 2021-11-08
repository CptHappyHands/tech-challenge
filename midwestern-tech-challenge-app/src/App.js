import React from "react";

import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import "./App.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
