import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditUniversity = () => {
    const [university, setUniversity] = useState({ UniversityZone: '' });
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();  // Get the university ID from URL params
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the university details by ID when the component mounts
        const fetchUniversity = async () => {
            try {
                const response = await axios.get(`https://api.iirhe.org/api/single-universities/${id}`);
                setUniversity(response.data.data);
            } catch (error) {
                toast.error("Failed to load university data.");
                console.error("Error:", error);
            }
        };
        fetchUniversity();
    }, [id]);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!university.UniversityZone) {
            toast.error("University Zone is required.");
            return;
        }

        setIsLoading(true);
        try {
            // Sending PUT request to update the university
            const response = await axios.put(`https://api.iirhe.org/api/update-universities/${id}`, { UniversityZone: university.UniversityZone });

            // Show success message
            toast.success("University updated successfully!");
            // Redirect to universities list or any other page
            navigate('/all-university-zone');
        } catch (error) {
            toast.error("Failed to update university.");
            console.error("Error:", error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>Edit University</h4>
                </div>
                <div className="links">
                    <Link to="/all-university-zone" className="add-new">Back <i className="fa-regular fa-circle-left"></i></Link>
                </div>
            </div>

            <div className="d-form">
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label htmlFor="UniversityZone" className="form-label">University Zone</label>
                        <input
                            type="text"
                            name='UniversityZone'
                            className="form-control"
                            id="UniversityZone"
                            value={university.UniversityZone}
                            onChange={(e) => setUniversity({ ...university, UniversityZone: e.target.value })}
                            required
                        />
                    </div>

                    <div className="col-12 text-center">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`${isLoading ? 'not-allowed' : 'allowed'}`}
                        >
                            {isLoading ? "Please Wait..." : "Update University"}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default EditUniversity;
