import React, { useState } from "react";
import axios from "axios"; // Make sure to install axios
import Swal from "sweetalert2"; // Import SweetAlert2
import "../Forms/forms.css";
import { Helmet } from "react-helmet";
const MentorshipRequest = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    departmentProgram: "",
    researchInterests: "",
    preferredMeetingTimes: "",
    meetingFrequency: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error state before submitting

    try {
      const response = await axios.post(
        "https://api.iirhe.org/api/submit-mentorship-request",
        formData
      );
      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your mentorship request has been submitted successfully.",
        });
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          departmentProgram: "",
          researchInterests: "",
          preferredMeetingTimes: "",
          meetingFrequency: "",
        });
      }
    } catch (err) {
      console.error(err);
      setError("There was an error submitting the form.");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "There was an error submitting the form. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Mentorship Request | IIRHE</title>
        <meta
          name="description"
          content="Submit your mentorship request to the IIRHE team. Provide your details and availability to get started."
        />
        <meta
          name="keywords"
          content="mentorship, request, IIRHE, research, meeting availability"
        />
        <meta name="author" content="IIRHE" />
      </Helmet>
      <div className="container">
        <div className="phd-forms">
          <h2 className="text-center">Mentorship Request Form</h2>
          <hr />
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="row">
              <div className="col-md-6 mb-2">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="form-control"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="Number"
                    id="phone"
                    name="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="form-group">
                  <label htmlFor="departmentProgram">Department/Program</label>
                  <input
                    type="text"
                    id="departmentProgram"
                    name="departmentProgram"
                    className="form-control"
                    value={formData.departmentProgram}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-12 mb-2">
                <div className="form-group">
                  <label htmlFor="researchInterests">
                    Brief Description of Your Research Interests:
                  </label>
                  <textarea
                    id="researchInterests"
                    name="researchInterests"
                    className="form-control"
                    rows="4"
                    value={formData.researchInterests}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12 mb-2">
                <div className="form-group">
                  <h4 className="mt-2">Availability</h4>
                  <label htmlFor="preferredMeetingTimes">
                    Preferred Meeting Times:
                  </label>
                  <input
                    type="text"
                    id="preferredMeetingTimes"
                    name="preferredMeetingTimes"
                    className="form-control mb-2"
                    value={formData.preferredMeetingTimes}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="meetingFrequency">
                    Frequency of Meetings Desired:
                  </label>
                  <input
                    type="text"
                    id="meetingFrequency"
                    name="meetingFrequency"
                    className="form-control"
                    value={formData.meetingFrequency}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <div className="form-group text-center">
                  <button
                    type="submit"
                    className="form-submit-btn"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </div>
              <div>
                <p>
                  <b>Declaration:</b> I understand that by submitting this
                  request, I am seeking mentorship and will respect the mentor's
                  time and availability.
                </p>
              </div>
            </div>
          </form>
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </div>
    </>
  );
};

export default MentorshipRequest;
