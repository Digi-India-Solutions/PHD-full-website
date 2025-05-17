import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditDisciplines = () => {
    const [discipline, setDiscipline] = useState({
        DisciplinesName: '',
        DisciplinesLogo: '',
        DisciplinesStatus: false
    });
    const [btnLoading, setBtnLoading] = useState(false);
    const { id } = useParams(); // Get the discipline ID from the URL params
    const navigate = useNavigate();

    // Fetch discipline data based on the ID
    useEffect(() => {
        const fetchDiscipline = async () => {
            try {
                const response = await axios.get(`https://api.iirhe.org/api/single-discipline/${id}`);
                setDiscipline(response.data.data);
            } catch (error) {
                console.error('Error fetching discipline:', error);
                toast.error("Failed to fetch discipline details.");
            }
        };

        fetchDiscipline();
    }, [id]);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setBtnLoading(true);

        const formData = new FormData();
        formData.append('DisciplinesName', discipline.DisciplinesName);
        formData.append('DisciplinesStatus', discipline.DisciplinesStatus);
        if (discipline.DisciplinesLogo instanceof File) {
            formData.append('DisciplinesLogo', discipline.DisciplinesLogo);
        }

        try {
            const response = await axios.put(`https://api.iirhe.org/api/update-discipline/${id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            if (response.data.success) {
                toast.success(response.data.message);
                navigate('/all-disciplines'); // Redirect to the category list after successful update
            }
        } catch (error) {
            console.error('Error updating discipline:', error);
            toast.error("Failed to update discipline.");
        } finally {
            setBtnLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setDiscipline((prevDiscipline) => ({
            ...prevDiscipline,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
        }));
    };

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>Edit Discipline</h4>
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
                            className="form-control"
                            id="DisciplinesName"
                            value={discipline.DisciplinesName}
                            onChange={handleInputChange}
                            placeholder='Discipline Name'
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="DisciplinesLogo" className="form-label">Discipline Logo<span className='text-danger'>*</span></label>
                        <input
                            type="file"
                            name="DisciplinesLogo"
                            className="form-control"
                            id="DisciplinesLogo"
                            onChange={handleInputChange}
                        />
                        {discipline.DisciplinesLogo && typeof discipline.DisciplinesLogo === 'string' ? (
                            <img
                                src={`https://api.iirhe.org/${discipline.DisciplinesLogo}`}
                                alt="Discipline Logo"
                                width="50"
                                height="50"
                            />
                        ) : discipline.DisciplinesLogo && discipline.DisciplinesLogo instanceof File ? (
                            <img
                                src={URL.createObjectURL(discipline.DisciplinesLogo)}
                                alt="Discipline Logo"
                                width="50"
                                height="50"
                            />
                        ) : null}
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="DisciplinesStatus"
                                id="DisciplinesStatus"
                                checked={discipline.DisciplinesStatus}
                                onChange={handleInputChange}
                            />
                            <label className="form-check-label" htmlFor="DisciplinesStatus">
                                Active Status
                            </label>
                        </div>
                    </div>
                    <div className="col-12 text-center">
                        <button type="submit" className={`${btnLoading ? 'not-allowed' : 'allowed'}`} disabled={btnLoading}>
                            {btnLoading ? "Please Wait..." : "Update Discipline"}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditDisciplines;
