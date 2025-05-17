import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllBanner = () => {
    const [banner, setBanner] = useState([])

    const getApiData = async () => {
        try {
            const res = await axios.get("https://api.iirhe.org/api/all-banner")
            console.log(res)
            if (res.status === 200) {
                setBanner(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const deleteBanner = async (id) => {
        try {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "Cancel",
            });

            if (result.isConfirmed) {
                const res = await axios.delete(`https://api.iirhe.org/api/delete-banner/${id}`);
                if (res.status === 200) {
                    toast.success("Banner deleted successfully.");
                    getApiData(); // Refresh the banner list
                }
            }
        } catch (error) {
            console.error('Error in deleteBanner:', error);
            toast.error("Failed to delete banner.");
        }
    };



    const handleCheckboxChange = async (id, status) => {
        try {
            const res = await axios.put(`https://api.iirhe.org/api/update-banner/${id}`, { activeStatus: !status });
            if (res.status === 200) {
                toast.success("Status updated successfully.");
                getApiData(); // Refresh the banner list
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to update status.");
        }
    };

    useEffect(() => {
        getApiData()
    }, [])
    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>All Banners </h4>
                </div>
                <div className="links">
                    <Link to="/add-banner" className="add-new">Add New <i class="fa-solid fa-plus"></i></Link>
                </div>
            </div>
            <section className="d-table">
                {banner.length > 0 ? (
                    <table className="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Sr.No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Image</th>
                                <th scope="col">Show in Home Page</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {banner.map((item, index) => (
                                <tr key={item._id || index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.bannerName}</td>
                                    <td>
                                        <img
                                            src={`https://api.iirhe.org/${item.bannerImage}`}
                                            alt={item.bannerName}
                                            style={{ width: "100px", height: "auto" }}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={item.activeStatus}
                                            onChange={() => handleCheckboxChange(item._id, item.activeStatus)}
                                        />   {item.activeStatus ? 'Active' : 'Inactive'}
                                    </td>
                                    <td>
                                        <Link to={`/edit-banner/${item._id}`} className="bt edit">
                                            Edit <i className="fa-solid fa-pen-to-square"></i>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            className="bt delete"
                                            onClick={(() => deleteBanner(item._id))}
                                        >
                                            Delete <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No banners found.</p>
                )}
            </section >
        </>
    )
}

export default AllBanner