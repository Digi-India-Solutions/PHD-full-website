import React, { useState } from "react";
import "./ContactUs.css";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  const handleFocus = (e) => {
    const container = e.target.closest(".input-container");
    container.classList.add("focus");
  };

  const handleBlur = (e) => {
    const container = e.target.closest(".input-container");
    if (!e.target.value) {
      container.classList.remove("focus");
    }
  };

  // Define state to store form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value); // Log the name and value
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      alert("Please fill in all the fields");
      return;
    }

    try {
      const response = await axios.post(
        "https://api.iirhe.org/api/send-consultation",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        toast.success("Your message has been sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message.");
    }
  };

  return (
    <>
     <Helmet>
        <title>Contact Us - IIRHE</title>
        <meta
          name="description"
          content="Get in touch with us at IIRHE. Fill out the contact form or reach us directly through email or phone."
        />
        <meta
          name="keywords"
          content="contact IIRHE, contact form, support, inquiries, email IIRHE, call IIRHE"
        />
      </Helmet>
      <div className="contact_us_form">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-info-contact-page">
                <h3 className="title">Let's get in touch</h3>
                <p className="text">
                  "We’re here to help you! Whether you have questions about our
                  services, need assistance, or just want to say hello, feel
                  free to reach out. Fill in the form above, and we’ll get back
                  to you as soon as possible. You can also contact us directly
                  via phone or email for immediate support. Let's connect!"
                </p>
                <div className="info">
                  <div className="information">
                    {/* <i className="fas fa-map-marker-alt"></i>  */}
                    {/* <p>92 Cherry Drive Uniondale, NY 11553</p> */}
                  </div>
                  <div className="information">
                    <i className="fas fa-envelope"></i>
                    {/* <p>lorem@ipsum.com</p> */}
                    <a
                      className="text-dark text-decoration-none"
                      href="mailto:info@iirhe.org"
                    >
                      <i class="bi bi-envelope"></i> &nbsp; info@iirhe.org
                    </a>
                  </div>
                  <div className="information">
                    <i className="fas fa-phone"></i>
                    {/* <p>123-456-789</p> */}
                    <a
                      className="text-dark text-decoration-none"
                      href="tel:+918860247763"
                    >
                      <i class="bi bi-telephone-outbound"></i> &nbsp; +91
                      886-024-7763
                    </a>
                  </div>
                </div>

                <div className="social-media">
                  <p>Connect with us :</p>
                  <div className="social-icons">
                    <a target="_blank" href="https://www.facebook.com/share/15itvnRtGd/">
                      <i className="bi bi-facebook"></i>
                    </a>
                    {/* <a href="#">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram"></i>
                    </a> */}
                    <a target="_blank" href="https://www.linkedin.com/company/indian-institute-of-research-and-higher-ed/">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <h3 className="text-white">Contact us</h3>
                  <div className="input-container">
                    <label htmlFor="name">Username</label>
                    <input
                      type="text"
                      name="name"
                      className="input"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                    {/* <span>Username</span> */}
                  </div>
                  <div className="input-container">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="input"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                    {/* <span>Email</span> */}
                  </div>
                  <div className="input-container">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      className="input"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                    {/* <span>Phone</span> */}
                  </div>
                  <div className="input-container textarea">
                    <label htmlFor="message">Message</label>
                    <textarea
                      name="message"
                      className="input"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                    {/* <span>Message</span> */}
                  </div>
                  <input type="submit" value="Send" className="btn-contact" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
