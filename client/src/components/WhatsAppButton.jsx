import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../css/WhatsAppButton.css";

export default function WhatsAppButton() {
  const phoneNumber = "919120010883"; // yahan apna WhatsApp number add karo, country code ke saath
  const message =
    "Hello Revno RCM, I would like to discuss medical billing and RCM services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-float-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="whatsapp-pulse"></span>
      <span className="whatsapp-icon-wrap">
        <FaWhatsapp />
      </span>
      <span className="whatsapp-tooltip">Chat with us</span>
    </a>
  );
}