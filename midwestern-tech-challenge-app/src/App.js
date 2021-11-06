import React from "react";
// import logo from "./assets/logo.png";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import "./App.css";

// const initialFormValues = {
//   firstName: "",
//   lastName: "",
//   title: "",
//   email: "",
//   message: "",
// };

const App = () => {
  // const [formValues, setFormValues] = useState(initialFormValues);

  // const updateForm = (inputName, inputValue) => {
  //   setFormValues({ ...formValues, [inputName]: inputValue });
  // };

  // const inputChange = (name, value) => {
  //   setFormValues({
  //     ...formValues,
  //     [name]: value,
  //   });
  // };

  // const submitForm = () => {
  //   const newContact = {
  //     firstName: formValues.firstName,
  //     lastName: formValues.lastName,
  //     title: formValues.title,
  //     email: formValues.email,
  //     message: formValues.message,
  //   };
  // };

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
