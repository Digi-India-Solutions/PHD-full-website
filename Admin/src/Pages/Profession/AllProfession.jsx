import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllProfession = () => {
    const [professionals, setProfessionals] = useState([]);

    const getApiData = async () => {
        try {
            const res = await axios.get("https://api.iirhe.org/api/all-profession-guide"); // Update the endpoint
            if (res.status === 200) {
                setProfessionals(res.data.data);
            }
        } catch (error) {
            console.error("Error fetching professionals:", error);
        }
    };

    const deleteProfessional = async (id) => {
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
                const res = await axios.delete(`https://api.iirhe.org/api/delete-profession-guide/${id}`);
                if (res.status === 200) {
                    toast.success("Professional deleted successfully.");
                    getApiData(); // Refresh the professionals list
                }
            }
        } catch (error) {
            console.error("Error deleting professional:", error);
            toast.error("Failed to delete professional.");
        }
    };

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>All Professionals</h4>
                </div>
                <div className="links">
                    <Link to="/add-guide" className="add-new">
                        Add New <i className="fa-solid fa-plus"></i>
                    </Link>
                </div>
            </div>

            <section className="d-table">
                {professionals.length > 0 ? (
                    <table className="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Sr.No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Degree</th>
                                <th scope="col">Experience (Years)</th>
                                <th scope="col">Field of Expertise</th>
                                <th scope="col">University</th>
                                <th scope="col">Image</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {professionals.map((item, index) => (
                                <tr key={item._id || index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.degree}</td>
                                    <td>{item.yearsOfExperience}</td>
                                    <td>{item.fieldExpertise}</td>
                                    <td>{item.university}</td>
                                    <td>
                                        <img
                                            src={`https://api.iirhe.org/${item.image}`}
                                            alt={item.name}
                                            style={{ width: "50px", height: "50px" }}
                                        />
                                    </td>
                                    <td>
                                        <Link to={`/edit-guide/${item._id}`} className="bt edit">
                                            Edit <i className="fa-solid fa-pen-to-square"></i>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            className="bt delete"
                                            onClick={() => deleteProfessional(item._id)}
                                        >
                                            Delete <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No professionals found.</p>
                )}
            </section>
        </>
    );
};

export default AllProfession;
