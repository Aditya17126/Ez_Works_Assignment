import React, { useState } from "react";
import axios from "axios";
import "./Css/contact.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus("❌ All fields are required");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      setStatus("❌ Enter a valid email");
      return;
    }

    try {
      const res = await axios.post("https://vernanbackend.ezlab.in/api/contact-us/", formData);
      if (res.status === 201) {
        setStatus("✅ Form Submitted");
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      setStatus("❌ Something went wrong");
      console.error(error);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <p>
          Whether you have an idea, a question, or simply want to explore how we can work together,
          we’re just a message away. Let’s catch up over coffee. Great stories always begin with a
          good conversation.
        </p>
      </div>

      <div className="contact-form-section">
        <h2 className="contact-heading">Join the story</h2>
        <h3 className="contact-subheading">Ready to bring your vision to life? Let’s talk.</h3>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            className="form-input"
            placeholder="Enter Phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <textarea
            name="message"
            className="form-textarea"
            placeholder="Enter Your Message"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>

        <p className="form-status">{status}</p>
      </div>
    </div>
  );
}

export default ContactForm;
