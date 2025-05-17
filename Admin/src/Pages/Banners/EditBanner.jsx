import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditBanner = () => {
    const { id } = useParams();  // Get the banner ID from the URL
    const navigate = useNavigate();
    const [banner, setBanner] = useState({
        bannerName: '',
        activeStatus: false,
        bannerImage: '',
    });
    const [newImage, setNewImage] = useState(null);
    const [btnLoading, setBtnLoading] = useState(false);

    useEffect(() => {
        const fetchBannerData = async () => {
            try {
                const res = await axios.get(`https://api.iirhe.org/api/single-banner/${id}`);
                if (res.status === 200) {
                    setBanner(res.data.data);
                }
            } catch (error) {
                console.error(error);
                toast.error('Failed to fetch banner data.');
            }
        };
        fetchBannerData();
    }, [id]);

    const handleImageChange = (e) => {
        setNewImage(e.target.files[0]);
    };

    const handleStatusChange = (e) => {
        setBanner({
            ...banner,
            activeStatus: e.target.checked
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setBtnLoading(true);  // Set the loading state to true

        const formData = new FormData();
        formData.append('bannerName', banner.bannerName);
        formData.append('activeStatus', banner.activeStatus);
        if (newImage) {
            formData.append('bannerImage', newImage);
        }

        try {
            const result = await axios.put(`https://api.iirhe.org/api/update-banner/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (result.status === 200) {
                toast.success('Banner updated successfully.');
                navigate('/all-banners');  // Redirect after successful update
            }
        } catch (error) {
            console.error(error);
            toast.error('Failed to update banner.');
        } finally {
            setBtnLoading(false);  // Set loading to false after the request is completed
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>Edit Banner</h4>
                </div>
                <div className="links">
                    <Link to="/all-banners" className="add-new">
                        Back <i className="fa-regular fa-circle-left"></i>
                    </Link>
                </div>
            </div>

            <div className="d-form">
                <form onSubmit={handleSubmit} className="row g-3">
                    <div className="col-md-4">
                        <label htmlFor="title" className="form-label">
                            Banner Name
                        </label>
                        <input
                            type="text"
                            name="bannerName"
                            className="form-control"
                            id="title"
                            value={banner.bannerName}
                            onChange={(e) => setBanner({ ...banner, bannerName: e.target.value })}
                            placeholder='Banner Name'
                        />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="bannerImage" className="form-label">
                            Banner Image<span className='text-danger'>*</span>
                        </label>
                        <input
                            type="file"
                            name="bannerImage"
                            className="form-control"
                            id="bannerImage"
                            onChange={handleImageChange}
                        />
                    </div>

                    <div className="col-4">
                        {banner.bannerImage && (
                            <img
                                src={`https://api.iirhe.org/${banner.bannerImage}`}
                                alt="Category Preview"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        )}
                    </div>

                    <div className="col-12">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="active"
                                id="active"
                                checked={banner.activeStatus}
                                onChange={handleStatusChange}
                            />
                            <label className="form-check-label" htmlFor="active">
                                Active
                            </label>
                        </div>
                    </div>

                    <div className="col-12 text-center">
                        <button
                            type="submit"
                            className={`btn ${btnLoading ? 'btn-secondary' : 'btn-primary'}`}
                            disabled={btnLoading}
                        >
                            {btnLoading ? 'Please Wait..' : 'Update Banner'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditBanner;
