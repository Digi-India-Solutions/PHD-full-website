import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddUniversity = () => {
    const [UniversityZone, setUniversityZone] = useState('');  // Store UniversityZone
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();  // To navigate after successful submission

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!UniversityZone) {
            toast.error("University Zone is required.");
            return;
        }

        setIsLoading(true);
        try {
            // Sending request to the backend
            const response = await axios.post('https://api.iirhe.org/api/add-universities', { UniversityZone });

            // Show success message
            toast.success("University added successfully!");
            // Redirect to universities list or any other page
            navigate('/all-universities');
        } catch (error) {
            toast.error("Failed to add university.");
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
                    <h4>Add University Zone</h4>
                </div>
                <div className="links">
                    <Link to="/university" className="add-new">Back <i className="fa-regular fa-circle-left"></i></Link>
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
                            value={UniversityZone}
                            onChange={(e) => setUniversityZone(e.target.value)}
                            required
                        />
                    </div>

                    <div className="col-12 text-center">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`${isLoading ? 'not-allowed' : 'allowed'}`}
                        >
                            {isLoading ? "Please Wait..." : "Add University"}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddUniversity;
