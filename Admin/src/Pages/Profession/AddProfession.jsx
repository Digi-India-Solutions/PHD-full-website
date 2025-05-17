import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProfession = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        name: "",
        degree: "",
        yearsOfExperience: "",
        fieldExpertise: "",
        university: "",
        image: null, // For file upload
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setData((prevData) => ({
            ...prevData,
            image: e.target.files[0], // Capture file input
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("degree", data.degree);
        formData.append("yearsOfExperience", data.yearsOfExperience);
        formData.append("fieldExpertise", data.fieldExpertise);
        formData.append("university", data.university);
        formData.append("image", data.image);

        try {
            await axios.post('https://api.iirhe.org/api/add-profession-guide', formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            toast.success("Professional profile added successfully!");
            navigate('/all-guide');
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error(error.response?.data?.message || "Failed to add professional profile. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>Add Professional Profile</h4>
                </div>
                <div className="links">
                    <Link to="/all-guide" className="add-new">Back <i className="fa-regular fa-circle-left"></i></Link>
                </div>
            </div>

            <div className="d-form">
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-4">
                        <label htmlFor="name" className="form-label">Name<span className='text-danger'>*</span></label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            required
                            placeholder='Name'
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="degree" className="form-label">Degree<span className='text-danger'>*</span></label>
                        <input
                            type="text"
                            className="form-control"
                            id="degree"
                            name="degree"
                            value={data.degree}
                            onChange={handleChange}
                            required
                            placeholder='Degree'
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="yearsOfExperience" className="form-label">Years of Experience<span className='text-danger'>*</span></label>
                        <input
                            type="Number"
                            className="form-control"
                            id="yearsOfExperience"
                            name="yearsOfExperience"
                            value={data.yearsOfExperience}
                            onChange={handleChange}
                            required
                            placeholder='Year Of Experience'
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="fieldExpertise" className="form-label">Field of Expertise<span className='text-danger'>*</span></label>
                        <input
                            type="text"
                            className="form-control"
                            id="fieldExpertise"
                            name="fieldExpertise"
                            value={data.fieldExpertise}
                            onChange={handleChange}
                            required
                            placeholder='Field Expertise'
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="university" className="form-label">University<span className='text-danger'>*</span></label>
                        <input
                            type="text"
                            className="form-control"
                            id="university"
                            name="university"
                            value={data.university}
                            onChange={handleChange}
                            required
                            placeholder='University'
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="image" className="form-label">Profile Image<span className='text-danger'>*</span></label>
                        <input
                            type="file"
                            className="form-control"
                            id="image"
                            name="image"
                            onChange={handleFileChange}
                            required
                        />
                    </div>
                    <div className="col-12 text-center">
                        <button type="submit" disabled={isLoading} className={`${isLoading ? 'not-allowed' : 'allowed'}`}>
                            {isLoading ? "Please Wait..." : "Add Profile"}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddProfession;