import React, { useState } from "react";
import consultant from "../../Images/consultant.png";
import axios from "axios";
import toast from "react-hot-toast";

const ConsultantForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://api.iirhe.org/api/send-consultation",
        formData
      );
      toast.success("Inquery Send Successfully");
      setSuccess(response.data.message);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setError(err.response?.data?.message || "Error submitting form");
    }
  };

  return (
    <>
      <div className="container-fluid">
        <section className="consultant">
          <div className="">
            {/* Header Row */}
            <div className="row position-relative">
              <div className="col-12">
                <div className="header-row">
                  <h2 className="consultation-title">
                    Book a Free Consultation
                  </h2>
                  <p className="consultation-text">
                    Schedule a free session with a PhD <br />
                    mentor and subject expert for title selection or
                    <br /> any other guidance you need.
                  </p>
                </div>
              </div>
              <div className="container col-md-6 d-flex align-items-center justify-content-center image-section">
                <div className="consultantImage">
                  <img
                    src={consultant}
                    alt="Consultation Image"
                    className="illustration"
                  />
                </div>
              </div>
              <div className="col-md-6 form-section">
                <div className="form-container">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        YOUR NAME
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-input"
                        id="name"
                        placeholder="Enter your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        YOUR EMAIL
                      </label>
                      <input
                        type="email"
                        className="form-control rounded-input"
                        id="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        YOUR PHONE NUMBER
                      </label>
                      <input
                        type="Number"
                        className="form-control rounded-input"
                        id="phone"
                        placeholder="Enter your phone number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        MESSAGE
                      </label>
                      <textarea
                        className="form-control rounded-input"
                        id="message"
                        rows={3}
                        placeholder="Enter your message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        defaultValue={""}
                      />
                    </div>
                    <button type="submit" className="btn btn-submit w-100">
                      Submit
                    </button>
                  </form>
                  {error && (
                    <div className="alert alert-danger mt-3">{error}</div>
                  )}
                  {success && (
                    <div className="alert alert-success mt-3">{success}</div>
                  )}
                </div>
              </div>
            </div>
            {/* Main Content Row */}
            <div className="row no-gutters">
              {/* Green Background Section with Text */}
              {/* Image Section */}
              {/* Form Section */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultantForm;
