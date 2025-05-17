import React, { useEffect, useState } from "react";
import axios from "axios";
import "./our_guide.css";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const OurGuide = () => {
  const [guideData, setGuideData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGuide, setSelectedGuide] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    university: "",
    briefDetail: "",
  });
  const [data, setData] = useState({
    phoneNumber: "",
    message: "",
  });
  const [formError, setFormError] = useState(null);
  const [formSuccess, setFormSuccess] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const getInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);
    setFormSuccess(null);

    // Validation (simple example)
    if (
      !formData.name ||
      !formData.designation ||
      !formData.university ||
      !formData.briefDetail
    ) {
      setFormError("All fields are required!");
      return;
    }

    try {
      const response = await axios.post(
        "https://api.iirhe.org/api/send-guide-contact",
        {
          ...formData,
          guideId: selectedGuide?._id, // Sending the selected guide's ID
        }
      );
      toast.success("Inquery Send Successfully");
      setFormSuccess(response.data.message || "Form submitted successfully!");
      setFormData({
        name: "",
        designation: "",
        university: "",
        briefDetail: "",
      });
    } catch (error) {
      setFormError(error.response?.data?.message || "Failed to submit form");
    }
  };

  const postGuideRequest = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://api.iirhe.org/api/send-join-guide-requiest",
        data
      );
      if (res.status === 201) {
        toast.success("Inquery Send Successfully");
        setData({
          phoneNumber: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Fetch guide data from API using axios
    const fetchGuideData = async () => {
      try {
        const response = await axios.get(
          "https://api.iirhe.org/api/all-profession-guide"
        );
        setGuideData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.response?.data?.message || "Failed to fetch guides");
        setIsLoading(false);
      }
    };

    fetchGuideData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <Helmet>
        <title>
          Guides for Professionals - Unlock Your Career Potential | IIRHE
        </title>
        <meta
          name="description"
          content="Explore professional guides to help you unlock your potential with the right career path, expertise, and guidance from experienced professionals."
        />
        <meta
          name="keywords"
          content="career guides, professional development, career advice, industry experts, professional experience, field of expertise, university guides"
        />
        <meta name="author" content="Your Company Name" />
      </Helmet>
      <section className="our_guide">
        <div className="container">
          <div className="guideHeading text-center mb-4">
            <h2 className="fw-bold">Our Guides</h2>
          </div>
          <p className="mb-3">
            <a
              className="text-decoration-none fw-bold"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#callbackModal"
            >
              Want to join us as a guide? Request a callback.
            </a>
          </p>
          <div className="row">
            {guideData.map((guide, index) => (
              <div className="col-md-4 mb-4" key={guide._id || index}>
                <div className="guideCard shadow p-3 rounded">
                  <div className="profilePicture mx-auto mb-3">
                    <img
                      src={`https://api.iirhe.org/${guide.image}`}
                      alt={guide.name}
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="guideDetails">
                    <p>
                      <strong>Name:</strong> {guide.name}
                    </p>
                    <p>
                      <strong>Degree:</strong> {guide.degree}
                    </p>
                    <p>
                      <strong>Years of Experience:</strong>{" "}
                      {guide.yearsOfExperience} years
                    </p>
                    <p>
                      <strong>Field Expertise:</strong> {guide.fieldExpertise}
                    </p>
                    <p>
                      <strong>University:</strong> {guide.university}
                    </p>
                    <a
                      href="#"
                      className="contactLink text-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#contactModal"
                      onClick={() => setSelectedGuide(guide)}
                    >
                      Contact Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Callback Form */}
        <div
          className="modal fade"
          id="callbackModal"
          tabIndex="-1"
          aria-labelledby="callbackModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="callbackModalLabel">
                  Leave a message, We Will Call You Back
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={postGuideRequest}>
                  <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">
                      Mobile No.
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">91+</span>
                      <input
                        type="text"
                        className="form-control"
                        // name="mobile"
                        placeholder="Enter Your Mobile"
                        name="phoneNumber"
                        onChange={getInputChange}
                        value={data.phoneNumber}
                      />
                    </div>
                  </div>
                  {/* <div className="mb-3">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="countryCheckbox"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="countryCheckbox"
                      >
                        Your country is India?
                      </label>
                    </div>
                  </div> */}
                  <div className="mb-3">
                    <label htmlFor="requirement" className="form-label">
                      Requirement Details
                    </label>
                    <textarea
                      className="form-control"
                      // id="requirement"
                      rows="3"
                      placeholder="Additional Details About Your Requirement..."
                      name="message"
                      onChange={getInputChange}
                      value={data.message}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Submit Requirement
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Contact Details */}
        <div
          className="modal fade"
          id="contactModal"
          tabIndex="-1"
          aria-labelledby="contactModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="contactModalLabel">
                  Do connect with {selectedGuide?.name}, fill the details.
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  {formError && <p className="text-danger">{formError}</p>}
                  {formSuccess && <p className="text-success">{formSuccess}</p>}
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter Your Name"
                      onChange={handleInputChange}
                      value={formData.name}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="designation" className="form-label">
                      Your Designation
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="designation"
                      placeholder="Enter Your Designation"
                      onChange={handleInputChange}
                      value={formData.designation}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="university" className="form-label">
                      University Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="university"
                      placeholder="Enter Your University Name"
                      onChange={handleInputChange}
                      value={formData.university}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="briefDetail" className="form-label">
                      Brief Detail About Your Requirement
                    </label>
                    <textarea
                      className="form-control"
                      id="briefDetail"
                      rows="3"
                      placeholder="Enter Brief Details About Your Requirement..."
                      onChange={handleInputChange}
                      value={formData.briefDetail}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurGuide;
