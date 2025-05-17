import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AddResource = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [resourceName, setResourceName] = useState('');
    const [resourcePdf, setResourcePdf] = useState(null); // Change to handle file
    const navigate = useNavigate();

    // Handle file selection
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type === "application/pdf") {
            setResourcePdf(file);
        } else {
            toast.error("Please select a valid PDF file.");
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!resourcePdf) {
            toast.error("Please upload a PDF file.");
            return;
        }
        setIsLoading(true);

        const formData = new FormData();
        formData.append('ResourcesName', resourceName);
        formData.append('ResourcesPdf', resourcePdf); // Append the PDF file

        try {
            // Make a POST request to create a new resource
            const response = await axios.post('https://api.iirhe.org/api/add-resources', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Show success message
            toast.success('Resource created successfully!');
            // Redirect to the resources list page after creation
            navigate('/all-resources');
        } catch (error) {
            // Show error message
            toast.error('Failed to create resource');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="bread">
                <div className="head">
                    <h4>Create Resource</h4>
                </div>
                <div className="links">
                    <Link to="/all-resources" className="add-new">Back <i className="fa-regular fa-circle-left"></i></Link>
                </div>
            </div>

            <div className="d-form">
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label className="form-label">Resource Name<span className='text-danger'>*</span></label>
                        <input
                            type="text"
                            name="ResourcesName"
                            value={resourceName}
                            onChange={(e) => setResourceName(e.target.value)}
                            className="form-control"
                            required
                            placeholder='Resource Name'
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Upload Resource PDF<span className='text-danger'>*</span></label>
                        <input
                            type="file"
                            name="ResourcesPdf"
                            accept="application/pdf"
                            onChange={handleFileChange}
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="col-12 text-center">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`${isLoading ? 'not-allowed' : 'allowed'}`}
                        >
                            {isLoading ? "Please Wait..." : "Create Resource"}
                        </button>
                    </div>
                </form>
            </div>

            <ToastContainer />
        </>
    );
};

export default AddResource;
