import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddDisciplines = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        DisciplinesName: '',
        DisciplinesLogo: null,
        DisciplinesStatus: false
    });

    // Handle form data changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'file') {
            setFormData({ ...formData, [name]: e.target.files[0] });
        } else if (type === 'checkbox') {
            setFormData({ ...formData, [name]: checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formDataToSend = new FormData();
        formDataToSend.append('DisciplinesName', formData.DisciplinesName);
        formDataToSend.append('DisciplinesLogo', formData.DisciplinesLogo);
        formDataToSend.append('DisciplinesStatus', formData.DisciplinesStatus);

        try {
            const response = await axios.post('https://api.iirhe.org/api/add-discipline', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 201) {
                toast.success(response.data.message);
                navigate("/all-disciplines")
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("Error while adding discipline");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>Add Discipline</h4>
                </div>
                <div className="links">
                    <Link to="/all-disciplines" className="add-new">Back <i className="fa-regular fa-circle-left"></i></Link>
                </div>
            </div>

            <div className="d-form">
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label htmlFor="DisciplinesName" className="form-label">Discipline Name<span className='text-danger'>*</span></label>
                        <input
                            type="text"
                            name="DisciplinesName"
                            value={formData.DisciplinesName}
                            onChange={handleChange}
                            className="form-control"
                            id="DisciplinesName"
                            required
                            placeholder='Discipline Name'
                        />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="DisciplinesLogo" className="form-label">Discipline Logo<span className='text-danger'>*</span></label>
                        <input
                            type="file"
                            name="DisciplinesLogo"
                            onChange={handleChange}
                            className="form-control"
                            id="DisciplinesLogo"
                            required
                        />
                    </div>

                    <div className="col-12">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="DisciplinesStatus"
                                checked={formData.DisciplinesStatus}
                                onChange={handleChange}
                                id="DisciplinesStatus"
                            />
                            <label className="form-check-label" htmlFor="DisciplinesStatus">
                                Active Discipline
                            </label>
                        </div>
                    </div>

                    <div className="col-12 text-center">
                        <button type="submit" disabled={isLoading} className={`${isLoading ? 'not-allowed' : 'allowed'}`}>
                            {isLoading ? "Please Wait..." : "Add Discipline"}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddDisciplines;
