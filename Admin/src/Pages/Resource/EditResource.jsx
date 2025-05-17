import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditResource = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [resourceName, setResourceName] = useState('');
    const [resourcePdf, setResourcePdf] = useState(null); // For the new PDF file
    const [existingPdf, setExistingPdf] = useState(''); // For the current PDF URL (if any)
    const { id } = useParams(); // Get the resource ID from the URL
    const navigate = useNavigate();

    // Fetch the resource data from the API when the component mounts
    useEffect(() => {
        const fetchResource = async () => {
            try {
                const response = await axios.get(`https://api.iirhe.org/api/single-resources/${id}`);
                const { ResourcesName, ResourcesPdf } = response.data.data;
                setResourceName(ResourcesName);
                setExistingPdf(ResourcesPdf); // Store the existing PDF URL/path
            } catch (error) {
                toast.error("Error fetching resource details.");
            }
        };

        fetchResource();
    }, [id]);

    // Handle file selection
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type === "application/pdf") {
            setResourcePdf(file);
        } else {
            toast.error("Please select a valid PDF file.");
        }
    };

    // Handle form submission to update the resource
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!resourcePdf && !existingPdf) {
            toast.error("Please upload a new PDF or keep the existing one.");
            return;
        }
        setIsLoading(true);

        const formData = new FormData();
        formData.append('ResourcesName', resourceName);

        // If a new PDF file is selected, append it to the formData
        if (resourcePdf) {
            formData.append('ResourcesPdf', resourcePdf);
        } else {
            formData.append('ResourcesPdf', existingPdf); // Keep the existing PDF if no new file is selected
        }

        try {
            // Make a PUT request to update the resource
            const response = await axios.put(`https://api.iirhe.org/api/update-resources/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            toast.success('Resource updated successfully!');
            navigate('/all-resources'); // Redirect to the resources list after successful update
        } catch (error) {
            toast.error('Failed to update resource');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="bread">
                <div className="head">
                    <h4>Edit Resource</h4>
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
                        />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Upload New Resource PDF (Optional)</label>
                        <input
                            type="file"
                            name="ResourcesPdf"
                            accept="application/pdf"
                            onChange={handleFileChange}
                            className="form-control"
                        />
                    </div>

                    {/* Display current PDF if available */}
                    {existingPdf && (
                        <div className="col-md-12">
                            <p>Current Resource PDF: <a href={`https://api.iirhe.org/${existingPdf}`} target="_blank" rel="noopener noreferrer">{existingPdf}</a></p>
                        </div>
                    )}

                    <div className="col-12 text-center">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`${isLoading ? 'not-allowed' : 'allowed'}`}
                        >
                            {isLoading ? "Please Wait..." : "Update Resource"}
                        </button>
                    </div>
                </form>
            </div>

            <ToastContainer />
        </>
    );
};

export default EditResource;
