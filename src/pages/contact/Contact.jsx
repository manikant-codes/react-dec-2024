import React from "react";
import Title from "../../components/common/Title";
import styles from "./contact.module.css";

function Contact() {
  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json"
      }
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
            <input id="name" type="text" name="name" />
          </div>
          <div>
            <label htmlFor="email">Your Email</label>
            <input id="emaila" type="email" name="email" />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input id="subject" type="text" name="subject" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={10} />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
