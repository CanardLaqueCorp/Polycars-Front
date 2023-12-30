import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/GetInTouchFormulaire.scss";

function GetInTouchFormulaire() {
  const form = useRef();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // Gére l'envoi en cours
  const [message, setMessage] = useState(""); // Gérer le message à afficher
  const [confirmationMessage, setConfirmationMessage] = useState(""); // Gérer le deuxième message à afficher

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
      }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (form.current) {
      emailjs.sendForm("service_4ke1a5r", "template_zc635pc", form.current, "T5IouDbHnXtQY0XZQ")
        .then((result) => {
          console.log(result.text);

          setIsSubmitting(false);

          setMessage("Your message has been sent successfully!");

          setFormData({
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            message: ""
          });

          setConfirmationMessage("You will receive a confirmation email.");

          setTimeout(() => {
            setMessage("");
            setConfirmationMessage("");
          }, 4000);

        }, (error) => {
          console.log(error.text);
          setIsSubmitting(false);
          setMessage("An error occurred, please try again.");
        });
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">GET IN TOUCH WITH US ! 📧</h1>
        <form ref={form} onSubmit={sendEmail}>
        <div className="form-row">
          <input
            type="text"
            className="form-field"
            placeholder="First Name *"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="form-field"
            placeholder="Last Name *"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="email"
            className="form-field"
            placeholder="E-mail *"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            className="form-field"
            placeholder="Phone *"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          className="form-field textarea-field"
          placeholder="Message *"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="button" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        {message && <p className="form-message">{message}</p>}
        {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>}
      </form>
    </div>
  );
}


export default GetInTouchFormulaire;
