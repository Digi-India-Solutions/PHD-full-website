import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditDisciplinesCourse = () => {
    const [btnLoading, setBtnLoading] = useState(false);
    const [disciplines, setDisciplines] = useState([]);
    const [formData, setFormData] = useState({
        DisciplinesCourseName: '',
        Disciplines: '',
    });
    const { id } = useParams();
    const navigate = useNavigate();

    // Fetch available disciplines for the dropdown
    useEffect(() => {
        const fetchDisciplines = async () => {
            try {
                const response = await axios.get('https://api.iirhe.org/api/all-discipline'); // Adjust endpoint
                setDisciplines(response.data.data);
            } catch (error) {
                console.error('Error fetching disciplines:', error);
                toast.error('Failed to fetch disciplines.');
            }
        };

        fetchDisciplines();
    }, []);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await axios.get(`https://api.iirhe.org/api/single-disciplines-course/${id}`);
                setFormData({
                    DisciplinesCourseName: response.data.data.DisciplinesCourseName,
                    Disciplines: response.data.data.Disciplines._id, // Ensure this is set correctly
                });
            } catch (error) {
                console.error('Error fetching course data:', error);
                toast.error('Failed to fetch course data.');
            }
        };

        fetchCourse();
    }, [id]);



    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setBtnLoading(true);

        try {
            await axios.put(`https://api.iirhe.org/api/update-disciplines-course/${id}`, formData); // Adjust endpoint
            toast.success('Discipline course updated successfully!');
            navigate('/all-disciplines-course');
        } catch (error) {
            console.error('Error updating discipline course:', error);
            toast.error('Failed to update discipline course.');
        } finally {
            setBtnLoading(false);
        }
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>Edit Discipline Course</h4>
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
                        <label htmlFor="DisciplinesCourseName" className="form-label">
                            Discipline Course Name<span className='text-danger'>*</span>
                        </label>
                        <input
                            type="text"
                            name="DisciplinesCourseName"
                            value={formData.DisciplinesCourseName}
                            onChange={handleChange}
                            className="form-control"
                            id="DisciplinesCourseName"
                            required
                            placeholder='Course Name'
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="Discipline" className="form-label">
                            Discipline<span className='text-danger'>*</span>
                        </label>
                        <select
                            name="Disciplines"
                            value={formData.Disciplines} // Use the discipline's _id for the value
                            onChange={handleChange}
                            className="form-control"
                            id="Discipline"
                        >
                            <option value="">Select Discipline</option>
                            {disciplines.map((discipline) => (
                                <option key={discipline._id} value={discipline._id}>
                                    {discipline.DisciplinesName}
                                </option>
                            ))}
                        </select>
                    </div>


                    <div className="col-12 text-center">
                        <button
                            type="submit"
                            className={`${btnLoading ? 'not-allowed' : 'allowed'}`}
                            disabled={btnLoading}
                        >
                            {btnLoading ? 'Please Wait...' : 'Update Discipline Course'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditDisciplinesCourse;
