//we import the css
import "../styles/GetInTouchFormulaire.scss";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

function GetInTouchFormulaire() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (form.current) {
      emailjs.sendForm("service_4ke1a5r", "template_zc635pc", form.current, "T5IouDbHnXtQY0XZQ").then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };

  return (
    <div className="GetInTouchFormulaire">
      <h1 className="bddInfosH1">Get In Touch with Us ! 📧</h1>
      <div className="infosAboutBdd">
        <form ref={form} onSubmit={sendEmail} className="form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}


export default GetInTouchFormulaire;
