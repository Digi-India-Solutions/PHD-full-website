import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBanner = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        bannerName: "",
        bannerImage: null, // For file upload
        activeStatus: false,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleFileChange = (e) => {
        setData((prevData) => ({
            ...prevData,
            bannerImage: e.target.files[0], // Capture file input
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData();
        formData.append("bannerName", data.bannerName);
        formData.append("bannerImage", data.bannerImage);
        formData.append("activeStatus", data.activeStatus);

        try {
            await axios.post('https://api.iirhe.org/api/add-banner', formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            toast.success("Banner added successfully!");
            navigate('/all-banners');
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error(error.response?.data?.message || "Failed to add banner. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>Add Banner</h4>
                </div>
                <div className="links">
                    <Link to="/all-banners" className="add-new">Back <i className="fa-regular fa-circle-left"></i></Link>
                </div>
            </div>

            <div className="d-form">
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label htmlFor="bannerName" className="form-label">Banner Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="bannerName"
                            name="bannerName"
                            value={data.bannerName}
                            onChange={handleChange}
                            placeholder='Banner Name'
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="bannerImage" className="form-label">Banner Image<span className='text-danger'>*</span></label>
                        <input
                            type="file"
                            className="form-control"
                            id="bannerImage"
                            name="bannerImage"
                            onChange={handleFileChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="activeStatus" className="form-label">Active Status</label>&nbsp;
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="activeStatus"
                            name="activeStatus"
                            checked={data.activeStatus}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-12 text-center">
                        <button type="submit" disabled={isLoading} className={`${isLoading ? 'not-allowed' : 'allowed'}`}>
                            {isLoading ? "Please Wait..." : "Add Banner"}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddBanner;
