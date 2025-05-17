import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const AllMultiUniversity = () => {
    const [allUniversities, setAllUniversities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAllUniversities = async () => {
            try {
                const response = await axios.get('https://api.iirhe.org/api/all-multi-universities');
                setAllUniversities(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching universities data", error);
                setIsLoading(false);
                toast.error("Error fetching universities data");
            }
        };

        fetchAllUniversities();
    }, []);

    // Handle delete university
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this university?');
        if (!confirmDelete) return;

        try {
            const response = await axios.delete(`https://api.iirhe.org/api/all-universities/${id}`);
            if (response.status === 200) {
                toast.success('University deleted successfully');
                setAllUniversities(allUniversities.filter((uni) => uni._id !== id)); // Remove deleted university from the state
            } else {
                toast.error('Failed to delete university');
            }
        } catch (error) {
            console.error("Error deleting university", error);
            toast.error('Failed to delete university');
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>All Multi Universities</h4>
                </div>
                <div className="links">
                    <Link to="/add-university" className="add-new">Add New <i className="fa-solid fa-plus"></i></Link>
                </div>
            </div>
            <section className="d-table">
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Sr.No.</th>
                            <th scope="col">Universities</th>
                            <th scope="col">University Zone</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ? (
                            <tr>
                                <td colSpan="5">Loading...</td>
                            </tr>
                        ) : allUniversities.length > 0 ? (
                            allUniversities.map((university, index) => (
                                <tr key={university._id}>
                                    <td>{index + 1}</td>
                                    <td>{university.UniversityZone?.UniversityZone}</td>
                                    <td>
                                        <ul>
                                            {university.Universities.map((uni, i) => (
                                                <li key={i}>{uni}</li>
                                            ))}
                                        </ul>
                                    </td>
                                    <td>
                                        <Link to={`/edit-university/${university._id}`} className="bt edit">
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
                        ) : (
                            <tr>
                                <td colSpan="5">No universities found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>
        </>
    );
};

export default AllMultiUniversity;
