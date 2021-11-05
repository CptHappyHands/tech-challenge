import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";
import "../Form.css";

const initialFormValues = {
  firstName: "",
  lastName: "",
  title: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submitForm = () => {
    const newContact = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      title: formValues.title,
      email: formValues.email,
      message: formValues.message,
    };
  };

  return (
    <div>
      <header>
        <nav></nav>
      </header>
      <div class="contact-body">
        <div class="contact-heading-one">
          <img src={logo} class="Logo" />
          <div class="contact-heading-one-title">Heading One</div>
          <div class="contact-hr">
            <hr />
          </div>
          <div class="contact-heading-one-info">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias aut, repellat ipsum facere voluptate dicta obcaecati
              deserunt nobis suscipit eaque?
            </p>
          </div>
        </div>
        <div class="contact-heading-two">
          <Link to="/" class="home-link">
            home
          </Link>
          <div class="contact-heading-two-title">Heading Two</div>
          <div class="contact-form">
            <Form
              values={formValues}
              update={updateForm}
              submit={submitForm}
              change={inputChange}
            />
          </div>
          <div class="submit-btn">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
