import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
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
        "https://barbas-server-0884077560fd.herokuapp.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          mode: "cors",
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
          <a href="tel:+1234567890" className="phone-link">
            (480) 633-0920
          </a>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <a
            href="geo:33.3884383,-111.7875426?q=123 Barber Street, Mesa, United States"
            className="address-link"
          >
            1555 S Gilbert Rd #106, Mesa, AZ 85204
          </a>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>inquiry@barbas.com</span>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faFacebook} />
          <a
            href="https://www.facebook.com/barbasbarbershopaz/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            Facebook
          </a>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faInstagram} />
          <a
            href="https://www.instagram.com/barbasaz/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            Instagram
          </a>
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
