import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllUniversity = () => {
    const [universities, setUniversities] = useState([]);  // Store the list of universities
    const [isLoading, setIsLoading] = useState(true);       // Manage loading state

    useEffect(() => {
        // Fetch the universities data from the API
        const fetchUniversities = async () => {
            try {
                const response = await axios.get('https://api.iirhe.org/api/all-universities');  // Adjust the endpoint as needed
                setUniversities(response.data.data);  // Set the fetched data
            } catch (error) {
                toast.error("Failed to fetch universities.");
                console.error("Error:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchUniversities();
    }, []);

    // Handle delete
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`https://api.iirhe.org/api/delete-universities/${id}`);
                    setUniversities(universities.filter(university => university._id !== id));
                    Swal.fire(
                        'Deleted!',
                        'The university has been deleted.',
                        'success'
                    );
                } catch (error) {
                    toast.error("Failed to delete university.");
                    console.error("Error:", error);
                }
            }
        });
    };

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>All Universities</h4>
                </div>
                <div className="links">
                    <Link to="/add-university-zone" className="add-new">Add New <i className="fa-solid fa-plus"></i></Link>
                </div>
            </div>
            <section className="d-table ">
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Sr.No.</th>
                            <th scope="col">University Zone</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ? (
                            <tr><td colSpan="4" className="text-center">Loading...</td></tr>
                        ) : (
                            universities.length === 0 ? (
                                <tr><td colSpan="4" className="text-center">No universities found</td></tr>
                            ) : (
                                universities.map((university, index) => (
                                    <tr key={university._id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{university.UniversityZone}</td>
                                        <td>
                                            <Link to={`/edit-university-zone/${university._id}`} className="bt edit">
                                                Edit <i className="fa-solid fa-pen-to-square"></i>
                                            </Link>
                                        </td>
                                        <td>
                                            <button
                                                className="bt delete"
                                                onClick={() => handleDelete(university._id)}
                                            >
                                                Delete <i className="fa-solid fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )
                        )}
                    </tbody>
                </table>
            </section>
        </>
    );
};

export default AllUniversity;
