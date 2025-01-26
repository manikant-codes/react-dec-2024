import React, { useState } from "react";
import Title from "../../components/common/Title";
import styles from "./contact.module.css";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  function handleSubmit(e) {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(formState),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  function handleChange(e) {
    setFormState({
      // name: formState.name,
      // email: formState.email,
      // subject: formState.subject,
      // message: formState.message,
      // OR
      ...formState,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className={styles.container}>
      <Title
        title="Contact"
        desc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam."
      />

      <div className={styles.formContainer}>
        <h3>Get In Touch</h3>
        <p>
          Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
          Vestibulum ante ipsum primis.
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={10}
              value={formState.message}
              onChange={handleChange}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
