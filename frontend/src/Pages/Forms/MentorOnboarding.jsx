import axios from "axios";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const MentorOnboarding = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    undergraduatedegree: "",
    undergraduateinstitution: "",
    undergraduateyearOfGraduation: "",
    mastersdegree: "",
    mastersinstitution: "",
    mastersyearOfGraduation: "",
    phdspecialization: "",
    phdresearchTopic: "",
    phdinstitutionName: "",
    phdyearOfCompletion: "",
    currentPosition: "",
    affiliatedInstitution: "",
    yearsOfExperience: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://api.iirhe.org/api/submit-onboard-mentor", formData);
      if (res.status === 201) {
        Swal.fire({
          title: "Success!",
          text: "Mentor onboarded successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
        setFormData({
          fullName: "",
          dateOfBirth: "",
          gender: "",
          nationality: "",
          email: "",
          phone: "",
          street: "",
          city: "",
          state: "",
          postalCode: "",
          country: "",
          undergraduatedegree: "",
          undergraduateinstitution: "",
          undergraduateyearOfGraduation: "",
          mastersdegree: "",
          mastersinstitution: "",
          mastersyearOfGraduation: "",
          phdspecialization: "",
          phdresearchTopic: "",
          phdinstitutionName: "",
          phdyearOfCompletion: "",
          currentPosition: "",
          affiliatedInstitution: "",
          yearsOfExperience: "",
          agreeToTerms: false,
        })
      }
    } catch (error) {
      // Show error message with SweetAlert2
      Swal.fire({
        title: "Error!",
        text: "There was an issue onboarding the mentor. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error(error);
    }
  };

  return (
    <>
     <Helmet>
        <title>Mentor Onboarding | IIRHE</title>
        <meta name="description" content="Fill out the Mentor Onboarding form to join our mentor network." />
        <meta name="keywords" content="mentor, onboarding, education, mentor registration" />
        <meta name="author" content="Your Company Name" />
      </Helmet>
    <div className="container">
      <div className="phd-forms">
        <h2 className="text-center">Mentor Onboarding Form</h2>
        <hr />
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="row">
            {/* Full Name */}
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

            {/* Date of Birth */}
            <div className="col-md-6 mb-2">
              <div className="form-group">
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  className="form-control"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Gender */}
            <div className="col-md-6 mb-2">
              <div className="form-group">
                <label>Gender</label>
                <div className="d-flex gap-2">
                  <input
                    type="radio"
                    id="genderMale"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleChange} required
                  />
                  <label htmlFor="genderMale">Male</label>

                  <input
                    type="radio"
                    id="genderFemale"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleChange}
                  />
                  <label htmlFor="genderFemale">Female</label>

                  <input
                    type="radio"
                    id="genderOther"
                    name="gender"
                    value="Other"
                    checked={formData.gender === "Other"}
                    onChange={handleChange}
                  />
                  <label htmlFor="genderOther">Other</label>
                </div>
              </div>
            </div>

            {/* Nationality */}
            <div className="col-md-6 mb-2">
              <div className="form-group">
                <label htmlFor="nationality">Nationality</label>
                <input
                  type="text"
                  id="nationality"
                  name="nationality"
                  className="form-control"
                  value={formData.nationality}
                  onChange={handleChange} required
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="col-md-6 mb-2">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange} required
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="col-md-6 mb-2">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="Number"
                  id="phone"
                  name="phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange} required
                />
              </div>
            </div>

            {/* Address */}
            <div className="col-md-4 mb-2">
              <div className="form-group">
                <label htmlFor="addressStreet">Street Address</label>
                <input
                  type="text"
                  id="addressStreet"
                  name="street"
                  className="form-control"
                  value={formData.street}
                  onChange={handleChange} required
                />
              </div>
            </div>

            <div className="col-md-4 mb-2">
              <div className="form-group">
                <label htmlFor="addressCity">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="form-control"
                  value={formData.city}
                  onChange={handleChange} required
                />
              </div>
            </div>

            <div className="col-md-4 mb-2">
              <div className="form-group">
                <label htmlFor="addressState">State/Province</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="form-control"
                  value={formData.state}
                  onChange={handleChange} required
                />
              </div>
            </div>

            <div className="col-md-6 mb-2">
              <div className="form-group">
                <label htmlFor="addressPostalCode">Postal Code</label>
                <input
                  type="Number"
                  id="postalCode"
                  name="postalCode"
                  className="form-control"
                  value={formData.postalCode}
                  onChange={handleChange} required
                />
              </div>
            </div>

            <div className="col-md-6 mb-2">
              <div className="form-group">
                <label htmlFor="addressCountry">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  className="form-control"
                  value={formData.country}
                  onChange={handleChange} required
                />
              </div>
            </div>

            {/* Education - Undergraduate Degree */}
            <div className="col-md-12">
              <h5>Educational Background</h5>
            </div>
            <div className="col-md-4 mb-2">
              <div className="form-group">
                <label htmlFor="educationundergraduatedegree">Degree</label>
                <input
                  type="text"
                  id="undergraduatedegree"
                  name="undergraduatedegree"
                  className="form-control"
                  value={formData.undergraduatedegree}  // Controlled value
                  onChange={handleChange} required // Handle change
                />
              </div>
            </div>

            <div className="col-md-4 mb-2">
              <div className="form-group">
                <label htmlFor="educationUndergraduateInstitution">
                  Institution
                </label>
                <input
                  type="text"
                  id="undergraduateinstitution"
                  name="undergraduateinstitution"
                  className="form-control"
                  value={formData.undergraduateinstitution}
                  onChange={handleChange} required
                />
              </div>
            </div>

            <div className="col-md-4 mb-2">
              <div className="form-group">
                <label htmlFor="educationUndergraduateYearOfGraduation">
                  Year of Graduation
                </label>
                <input
                  type="Number"
                  id="undergraduateyearOfGraduation"
                  name="undergraduateyearOfGraduation"
                  className="form-control"
                  value={formData.undergraduateyearOfGraduation}
                  onChange={handleChange} required
                />
              </div>
            </div>

            <div className="col-md-12 mt-3">
              <h5>Educational Background</h5>
            </div>

            {/* Education - Masters Degree */}
            <div className="col-md-4 mb-2">
              <div className="form-group">
                <label htmlFor="educationMastersDegree">Degree</label>
                <input
                  type="text"
                  id="mastersdegree"
                  name="mastersdegree"
                  className="form-control"
                  value={formData.mastersdegree}
                  onChange={handleChange} required
                />
              </div>
            </div>

            <div className="col-md-4 mb-2">
              <div className="form-group">
                <label htmlFor="educationMastersInstitution">Institution</label>
                <input
                  type="text"
                  id="mastersinstitution"
                  name="mastersinstitution"
                  className="form-control"
                  value={formData.mastersinstitution}
                  onChange={handleChange} required
                />
              </div>
            </div>

            <div className="col-md-4 mb-2">
              <div className="form-group">
                <label htmlFor="educationMastersYearOfGraduation">
                  Year of Graduation
                </label>
                <input
                  type="Number"
                  id="mastersyearOfGraduation"
                  name="mastersyearOfGraduation"
                  className="form-control"
                  value={formData.mastersyearOfGraduation}
                  onChange={handleChange} required
                />
              </div>
            </div>

            <div className="col-md-12">
              <h5>PHD</h5>
            </div>
            {/* Education - PhD */}
            <div className="col-md-3 mb-2">
              <div className="form-group">
                <label htmlFor="educationPhDSpecialization">
                  Specialization
                </label>
                <input
                  type="text"
                  id="phdspecialization"
                  name="phdspecialization"
                  className="form-control"
                  value={formData.phdspecialization}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-md-3 mb-2">
              <div className="form-group">
                <label htmlFor="educationPhDResearchTopic">
                  Research Topic
                </label>
                <input
                  type="text"
                  id="phdresearchTopic"
                  name="phdresearchTopic"
                  className="form-control"
                  value={formData.phdresearchTopic}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-md-3 mb-2">
              <div className="form-group">
                <label htmlFor="educationPhDInstitutionName">Institution</label>
                <input
                  type="text"
                  id="phdinstitutionName"
                  name="phdinstitutionName"
                  className="form-control"
                  value={formData.phdinstitutionName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-md-3 mb-2">
              <div className="form-group">
                <label htmlFor="educationPhDYearOfCompletion">
                  Year of Completion
                </label>
                <input
                  type="Number"
                  id="phdyearOfCompletion"
                  name="phdyearOfCompletion"
                  className="form-control"
                  value={formData.phdyearOfCompletion}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-md-12">
              <h5>Professional Experience</h5>
            </div>
            {/* Professional Experience */}
            <div className="col-md-6 mb-2">
              <div className="form-group">
                <label htmlFor="professionalExperienceCurrentPosition">
                  Current Position
                </label>
                <input
                  type="text"
                  id="currentPosition"
                  name="currentPosition"
                  className="form-control"
                  value={formData.currentPosition}
                  onChange={handleChange} required
                /> 
              </div>
            </div>

            <div className="col-md-6 mb-2">
              <div className="form-group">
                <label htmlFor="professionalExperienceAffiliatedInstitution">
                  Affiliated Institution
                </label>
                <input
                  type="text"
                  id="affiliatedInstitution"
                  name="affiliatedInstitution"
                  className="form-control"
                  value={formData.affiliatedInstitution}
                  onChange={handleChange} required
                />
              </div>
            </div>

            <div className="col-md-6 mb-2">
              <div className="form-group">
                <label htmlFor="professionalExperienceYearsOfExperience">
                  Years of Experience
                </label>
                <input
                  type="Number"
                  id="yearsOfExperience"
                  name="yearsOfExperience"
                  className="form-control"
                  value={formData.yearsOfExperience}
                  onChange={handleChange} required
                />
              </div>
            </div>

            <div className="col-md-6 mb-2">
              <div className="form-group">
                <label htmlFor="Research Interests/Areas of Expertise:">
                  Research Interests/Areas of Expertise:
                </label>
                <input
                  type="text"
                  id="Research Interests/Areas of Expertise:"
                  name="research-interest"
                  className="form-control"
                  //   value={formData.professionalExperience.yearsOfExperience}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-12">
              <h5>Publication and Research</h5>
            </div>
            <div className="col-md-6 mb-2">
              <div className="form-group">
                <label htmlFor="List of Relevant Publications (if any):">
                  List of Relevant Publications (if any):
                </label>
                <input
                  type="text"
                  id="List of Relevant Publications (if any):"
                  name="research-interest"
                  className="form-control"
                  //   value={formData.professionalExperience.yearsOfExperience}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6 mb-2">
              <div className="form-group">
                <label htmlFor="Previous Supervision Experience (if any):">
                  Previous Supervision Experience (if any):
                </label>
                <input
                  type="text"
                  id="Previous Supervision Experience (if any):"
                  name="research-interest"
                  className="form-control"
                  //   value={formData.professionalExperience.yearsOfExperience}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-md-12">
              <p>
                <b> Declaration:</b> I declare that the information provided is
                accurate to the best of my knowledge.
              </p>
            </div>

            {/* Terms & Conditions */}
            <div className="col-md-6 mb-2">
              <div className="form-group d-flex gap-2">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                />
                <label htmlFor="agreeToTerms">
                  I agree to the Terms & Conditions
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-md-12">
              <button type="submit" className="form-submit-btn">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default MentorOnboarding;
