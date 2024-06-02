import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

export const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://barber-contact-form-ff33746845b9.herokuapp.com/send-message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );
      const result = await response.json();
      if (result.success) {
        setShowModal(true);
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({
      name: "",
      phone: "",
      message: ""
    });
  };

  return (
    <section className="contact-section">
      <div className="contact-info">
        <div className="info-item">
          <FontAwesomeIcon icon={faPhone} />
          <span>+123 456 7890</span>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>123 Barber Street, Mesa, United States</span>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>inquiry@barbas.com</span>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name (Nombre)"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number (telefono)"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message (mensaje)"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send (envia)</button>
      </form>

      {showModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Success!</h2>
            <p>Your message has been sent successfully.</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};
