import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddDisciplinesCourse = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [disciplines, setDisciplines] = useState([]); // State to hold available disciplines
    const [formData, setFormData] = useState({
        Disciplines: '',
        DisciplinesCourseName: '',
    });
    const navigate = useNavigate();

    // Fetch available disciplines from the backend
    useEffect(() => {
        const fetchDisciplines = async () => {
            try {
                const response = await axios.get('https://api.iirhe.org/api/all-discipline'); // Adjust endpoint as needed
                setDisciplines(response.data.data);
            } catch (error) {
                console.error('Error fetching disciplines:', error);
                toast.error('Failed to fetch disciplines.');
            }
        };

        fetchDisciplines();
    }, []);

    // Handle form field changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await axios.post('https://api.iirhe.org/api/add-disciplines-course', formData); // Adjust endpoint as needed
            if (response.data.success) {
                toast.success('Discipline course added successfully!');
                navigate('/all-disciplines-course'); // Redirect to all courses list
            }
        } catch (error) {
            console.error('Error adding discipline course:', error);
            toast.error(error.response.data.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>Add Discipline Course</h4>
                </div>
                <div className="links">
                    <Link to="/all-disciplines-course" className="add-new">
                        Back <i className="fa-regular fa-circle-left"></i>
                    </Link>
                </div>
            </div>

            <div className="d-form">
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label htmlFor="Disciplines" className="form-label">Select Discipline<span className='text-danger'>*</span></label>
                        <select
                            name="Disciplines"
                            id="Disciplines"
                            className="form-control"
                            value={formData.Disciplines}
                            onChange={handleChange}
                            required
                        >
                            <option value="">-- Select Discipline --</option>
                            {disciplines.map((discipline) => (
                                <option key={discipline._id} value={discipline._id}>
                                    {discipline.DisciplinesName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="DisciplinesCourseName" className="form-label">Course Name<span className='text-danger'>*</span></label>
                        <input
                            type="text"
                            name="DisciplinesCourseName"
                            id="DisciplinesCourseName"
                            className="form-control"
                            value={formData.DisciplinesCourseName}
                            onChange={handleChange}
                            required
                            placeholder='Course Name'
                        />
                    </div>

                    <div className="col-12 text-center">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`${isLoading ? 'not-allowed' : 'allowed'}`}
                        >
                            {isLoading ? 'Please Wait...' : 'Add Discipline Course'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddDisciplinesCourse;
