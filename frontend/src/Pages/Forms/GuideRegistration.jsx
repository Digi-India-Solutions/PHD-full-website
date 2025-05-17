// import React, { useState } from "react";
// import "./forms.css";

// const GuideRegistration = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     address: "",
//     dateOfBirth: "",
//     gender: "",
//     currentPosition: "",
//     institution: "",
//     yearsOfExperience: "",
//     researchInterests: "",
//     publications: "",
//     supervisionExperience: "",
//     communicationMethod: {
//       email: false,
//       phone: false,
//       videoCall: false,
//     },
//     availableForSupervision: {
//       fullTime: false,
//       partTime: false,
//       onDemand: false,
//     },
//     whyBecomeGuide: "",
//     additionalComments: "",
//     agreeToTerms: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     if (type === "checkbox") {
//       if (name.startsWith("communicationMethod")) {
//         setFormData({
//           ...formData,
//           communicationMethod: {
//             ...formData.communicationMethod,
//             [name]: checked,
//           },
//         });
//       } else if (name.startsWith("availableForSupervision")) {
//         setFormData({
//           ...formData,
//           availableForSupervision: {
//             ...formData.availableForSupervision,
//             [name]: checked,
//           },
//         });
//       } else {
//         setFormData({
//           ...formData,
//           [name]: checked,
//         });
//       }
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div className="container">
//       <div className="phd-forms">
//         <h2 className="text-center">PhD Guide Registration Form</h2>
//         <hr />
//         <form onSubmit={handleSubmit} className="mt-4">
//           <div className="row">
//             <div className="col-md-6 mb-2">
//               <div className="form-group">
//                 <label htmlFor="fullName">Full Name</label>
//                 <input
//                   type="text"
//                   id="fullName"
//                   name="fullName"
//                   className="form-control"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className="col-md-6 mb-2">
//               <div className="form-group">
//                 <label htmlFor="email">Email Address</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   className="form-control"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className="col-md-6 mb-2">
//               <div className="form-group">
//                 <label htmlFor="phone">Phone Number</label>
//                 <input
//                   type="text"
//                   id="phone"
//                   name="phone"
//                   className="form-control"
//                   value={formData.phone}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className="col-md-6 mb-2">
//               <div className="form-group">
//                 <label htmlFor="address">Address</label>
//                 <input
//                   type="text"
//                   id="address"
//                   name="address"
//                   className="form-control"
//                   value={formData.address}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className="col-md-6 mb-2">
//               <div className="form-group">
//                 <label htmlFor="dateOfBirth">Date of Birth</label>
//                 <input
//                   type="date"
//                   id="dateOfBirth"
//                   name="dateOfBirth"
//                   className="form-control"
//                   value={formData.dateOfBirth}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className="col-md-6 mb-2">
//               <div className="form-group">
//                 <label>Gender</label>
//                 <div className="d-flex gap-2">
//                   <input
//                     type="radio"
//                     id="genderMale"
//                     name="gender"
//                     value="Male"
//                     checked={formData.gender === "Male"}
//                     onChange={handleChange}
//                   />
//                   <label htmlFor="genderMale">Male</label>

//                   <input
//                     type="radio"
//                     id="genderFemale"
//                     name="gender"
//                     value="Female"
//                     checked={formData.gender === "Female"}
//                     onChange={handleChange}
//                   />
//                   <label htmlFor="genderFemale">Female</label>

//                   <input
//                     type="radio"
//                     id="genderOther"
//                     name="gender"
//                     value="Other"
//                     checked={formData.gender === "Other"}
//                     onChange={handleChange}
//                   />
//                   <label htmlFor="genderOther">Other</label>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-6 mb-2">
//               <div className="form-group">
//                 <label htmlFor="currentPosition">Current Position/Title</label>
//                 <input
//                   type="text"
//                   id="currentPosition"
//                   name="currentPosition"
//                   className="form-control"
//                   value={formData.currentPosition}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className="col-md-6 mb-2">
//               <div className="form-group">
//                 <label htmlFor="institution">
//                   Affiliated Institution/Organization
//                 </label>
//                 <input
//                   type="text"
//                   id="institution"
//                   name="institution"
//                   className="form-control"
//                   value={formData.institution}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className="col-md-6 mb-2">
//               <div className="form-group">
//                 <label htmlFor="yearsOfExperience">Years of Experience</label>
//                 <input
//                   type="number"
//                   id="yearsOfExperience"
//                   name="yearsOfExperience"
//                   className="form-control"
//                   value={formData.yearsOfExperience}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className="col-md-6 mb-2">
//               <div className="form-group">
//                 <label htmlFor="researchInterests">
//                   Research Interests/Areas of Expertise
//                 </label>
//                 <input
//                   type="text"
//                   id="researchInterests"
//                   name="researchInterests"
//                   className="form-control"
//                   value={formData.researchInterests}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className="col-md-6 mb-2">
//               <div className="form-group">
//                 <label htmlFor="publications">
//                   List of Relevant Publications (if any)
//                 </label>
//                 <input
//                   type="text"
//                   id="publications"
//                   name="publications"
//                   className="form-control"
//                   value={formData.publications}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className="col-md-6 mb-2">
//               <div className="form-group">
//                 <label htmlFor="supervisionExperience">
//                   Previous Supervision Experience (if any)
//                 </label>
//                 <input
//                   type="text"
//                   id="supervisionExperience"
//                   name="supervisionExperience"
//                   className="form-control"
//                   value={formData.supervisionExperience}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className="col-md-6 mb-2">
//               <div className="form-group">
//                 <label>Preferred Method of Communication</label>
//                 <div className="d-flex gap-2">
//                   <input
//                     type="checkbox"
//                     id="communicationMethodEmail"
//                     name="communicationMethodEmail"
//                     checked={formData.communicationMethod.email}
//                     onChange={handleChange}
//                   />
//                   <label htmlFor="communicationMethodEmail">Email</label>

//                   <input
//                     type="checkbox"
//                     id="communicationMethodPhone"
//                     name="communicationMethodPhone"
//                     checked={formData.communicationMethod.phone}
//                     onChange={handleChange}
//                   />
//                   <label htmlFor="communicationMethodPhone">Phone</label>

//                   <input
//                     type="checkbox"
//                     id="communicationMethodVideoCall"
//                     name="communicationMethodVideoCall"
//                     checked={formData.communicationMethod.videoCall}
//                     onChange={handleChange}
//                   />
//                   <label htmlFor="communicationMethodVideoCall">
//                     Video Call
//                   </label>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-6 mb-2">
//               <div className="form-group">
//                 <label>Available for Supervision</label>
//                 <div className="d-flex gap-2">
//                   <input
//                     type="checkbox"
//                     id="availableForSupervisionFullTime"
//                     name="availableForSupervisionFullTime"
//                     checked={formData.availableForSupervision.fullTime}
//                     onChange={handleChange}
//                   />
//                   <label htmlFor="availableForSupervisionFullTime">
//                     Full-time
//                   </label>

//                   <input
//                     type="checkbox"
//                     id="availableForSupervisionPartTime"
//                     name="availableForSupervisionPartTime"
//                     checked={formData.availableForSupervision.partTime}
//                     onChange={handleChange}
//                   />
//                   <label htmlFor="availableForSupervisionPartTime">
//                     Part-time
//                   </label>

//                   <input
//                     type="checkbox"
//                     id="availableForSupervisionOnDemand"
//                     name="availableForSupervisionOnDemand"
//                     checked={formData.availableForSupervision.onDemand}
//                     onChange={handleChange}
//                   />
//                   <label htmlFor="availableForSupervisionOnDemand">
//                     On-demand
//                   </label>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-12 mb-2">
//               <div className="form-group">
//                 <label htmlFor="whyBecomeGuide">
//                   Why do you want to become a PhD guide?
//                 </label>
//                 <textarea
//                   id="whyBecomeGuide"
//                   name="whyBecomeGuide"
//                   className="form-control"
//                   value={formData.whyBecomeGuide}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className="col-md-12 mb-2">
//               <div className="form-group">
//                 <label htmlFor="additionalComments">
//                   Any additional comments or information you wish to provide:
//                 </label>
//                 <textarea
//                   id="additionalComments"
//                   name="additionalComments"
//                   className="form-control"
//                   value={formData.additionalComments}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className="col-md-12 mb-4">
//               <div className="form-group">
//                 <div className="d-flex gap-2">
//                   <input
//                     type="checkbox"
//                     id="agreeToTerms"
//                     name="agreeToTerms"
//                     checked={formData.agreeToTerms}
//                     onChange={handleChange}
//                   />
//                   <label htmlFor="agreeToTerms">
//                     I agree to the terms and conditions of the PhD guide
//                     registration process.
//                   </label>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-12 mb-3">
//               <div className="form-group text-center">
//                 <button type="submit" className="form-submit-btn">
//                   Submit
//                 </button>
//               </div>
//             </div>
//             <div className="col-md-12">
//               <p>
//                 This form can be adapted as needed and implemented in your web
//                 portal. Make sure to include proper validations, such as email
//                 format checks and required fields, to enhance user experience.
//                 Let me know if you need further assistance!
//               </p>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default GuideRegistration;
