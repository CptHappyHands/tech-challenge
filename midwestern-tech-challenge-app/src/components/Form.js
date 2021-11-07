import React from "react";

export default function Form(props) {
  const { values, submit, change } = props;
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { values, name } = evt.target;
    change(name, values);
  };

  return (
    <form className="form-container" id="contact-form" onSubmit={onSubmit}>
      <div class="first-row">
        <div className="form-first-name-input">
          <input
            id="first-name-input"
            type="text"
            name="firstName"
            onChange={onChange}
            value={values.firstName}
            placeholder="First Name"
          />
        </div>

        <div className="form-last-name-input">
          <input
            id="last-name-input"
            type="text"
            name="lastName"
            onChange={onChange}
            value={values.lastName}
            placeholder="Last Name"
          />
        </div>
      </div>

      <div class="second-row">
        <div className="form-title-input">
          <input
            id="title-input"
            type="text"
            name="title"
            onChange={onChange}
            value={values.title}
            placeholder="Title"
          />
        </div>

        <div className="form-email-input">
          <input
            id="email-input"
            type="text"
            name="email"
            onChange={onChange}
            value={values.email}
            placeholder="Email"
          />
        </div>
      </div>

      <div class="last-row">
        <div className="form-message-input">
          <input
            id="message-input"
            type="text"
            name="message"
            onChange={onChange}
            value={values.message}
            placeholder="Message"
          />
        </div>
      </div>
    </form>
  );
}
