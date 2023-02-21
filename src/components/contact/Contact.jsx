import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_fgnlwlu",
      "template_9tts4d6",
      form.current,
      "DUY8M3nr3wy6dmmOF"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h2>Contact</h2>
      <h5>
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible
      </h5>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>aletilalitha@gmail.com</h5>
            <a href="mailto:aletilalitha@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+4531896362</h5>
            <a href="https://api.whatsapp.com/send?phone=+4531896362">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Enter Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send a message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
