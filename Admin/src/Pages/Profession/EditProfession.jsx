import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditProfession = () => {
    const { id } = useParams(); // Get the professional ID from the URL
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        degree: '',
        yearsOfExperience: '',
        fieldExpertise: '',
        university: '',
        image: null,
    });
    const [newImage, setNewImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchProfessionData = async () => {
            try {
                const res = await axios.get(`https://api.iirhe.org/api/single-profession-guide/${id}`);
                if (res.status === 200) {
                    setData({
                        ...res.data.data,
                        image: null, // Reset file input
                    });
                }
            } catch (error) {
                console.error(error);
                toast.error('Failed to fetch profession data.');
            }
        };
        fetchProfessionData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setNewImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('degree', data.degree);
        formData.append('yearsOfExperience', data.yearsOfExperience);
        formData.append('fieldExpertise', data.fieldExpertise);
        formData.append('university', data.university);
        if (newImage) {
            formData.append('image', newImage);
        }

        try {
            const result = await axios.put(`https://api.iirhe.org/api/update-profession-guide/${id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            if (result.status === 200) {
                toast.success('Professional profile updated successfully.');
                navigate('/all-guide');
            }
        } catch (error) {
            console.error(error);
            toast.error('Failed to update professional profile.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>Edit Professional Profile</h4>
                </div>
                <div className="links">
                    <Link to="/all-guide" className="add-new">
                        Back <i className="fa-regular fa-circle-left"></i>
                    </Link>
                </div>
            </div>

            <div className="d-form">
                <form onSubmit={handleSubmit} className="row g-3">
                    <div className="col-md-4">
                        <label htmlFor="name" className="form-label">Name<span className='text-danger'>*</span></label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="name"
                            value={data.name}
                            onChange={handleChange}
                            required
                            placeholder="Name"
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="degree" className="form-label">Degree<span className='text-danger'>*</span></label>
                        <input
                            type="text"
                            name="degree"
                            className="form-control"
                            id="degree"
                            value={data.degree}
                            onChange={handleChange}
                            required
                            placeholder="Degree"
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="yearsOfExperience" className="form-label">Years of Experience<span className='text-danger'>*</span></label>
                        <input
                            type="number"
                            name="yearsOfExperience"
                            className="form-control"
                            id="yearsOfExperience"
                            value={data.yearsOfExperience}
                            onChange={handleChange}
                            required
                            placeholder="Years of Experience"
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="fieldExpertise" className="form-label">Field of Expertise<span className='text-danger'>*</span></label>
                        <input
                            type="text"
                            name="fieldExpertise"
                            className="form-control"
                            id="fieldExpertise"
                            value={data.fieldExpertise}
                            onChange={handleChange}
                            required
                            placeholder="Field Expertise"
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="university" className="form-label">University<span className='text-danger'>*</span></label>
                        <input
                            type="text"
                            name="university"
                            className="form-control"
                            id="university"
                            value={data.university}
                            onChange={handleChange}
                            required
                            placeholder="University"
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="image" className="form-label">Profile Image<span className='text-danger'>*</span></label>
                        <input
                            type="file"
                            name="image"
                            className="form-control"
                            id="image"
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className="col-4">
                        {data.image && (
                            <img
                                src={`https://api.iirhe.org/${data.image}`}
                                alt="Profile Preview"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        )}
                    </div>
                    <div className="col-12 text-center">
                        <button
                            type="submit"
                            className={`btn ${isLoading ? 'btn-secondary' : 'btn-primary'}`}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Please Wait...' : 'Update Profile'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditProfession;
