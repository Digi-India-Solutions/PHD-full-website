import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllDisciplines = () => {
    const [disciplines, setDisciplines] = useState([]);

    // Fetch disciplines data
    const fetchDisciplines = async () => {
        try {
            const response = await axios.get('https://api.iirhe.org/api/all-discipline'); // Ensure this is the correct endpoint
            setDisciplines(response.data.data);
        } catch (error) {
            console.error('Error fetching disciplines:', error);
            toast.error("Failed to fetch disciplines.");
        }
    };

    // Handle delete action
    const handleDelete = async (id) => {
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: 'This action cannot be undone.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Yes, delete it!',
            });

            if (result.isConfirmed) {
                const response = await axios.delete(`https://api.iirhe.org/api/delete-discipline/${id}`); // Ensure this is the correct delete endpoint
                if (response.data.success) {
                    toast.success(response.data.message);
                    fetchDisciplines(); // Refresh the list
                }
            }
        } catch (error) {
            console.error('Error deleting discipline:', error);
            toast.error("Failed to delete discipline.");
        }
    };

    const updateStatus = async (id, newStatus) => {
        try {
            const response = await axios.put(`https://api.iirhe.org/api/update-discipline/${id}`, {
                DisciplinesStatus: newStatus,
            });
            if (response.data.success) {
                toast.success(response.data.message);
                fetchDisciplines(); // Refresh the list
            }
        } catch (error) {
            console.error('Error updating status:', error);
            toast.error("Failed to update status.");
        }
    };


    useEffect(() => {
        fetchDisciplines();
    }, []);

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>Manage Discipline</h4>
                </div>
                <div className="links">
                    {/* <Link to="/all-disciplines" className="add-new">All Discipline List</Link>&nbsp; */}
                    <Link to="/add-disciplines" className="add-new">Add New <i className="fa-solid fa-plus"></i></Link>
                </div>
            </div>
            <section className="d-table">
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Sr.No.</th>
                            <th scope="col">Discipline Name</th>
                            <th scope="col">Logo</th>
                            <th scope="col">Active Status</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {disciplines.map((discipline, index) => (
                            <tr key={discipline._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{discipline.DisciplinesName}</td>
                                <td>
                                    <img src={`https://api.iirhe.org/${discipline.DisciplinesLogo}`} alt={discipline.DisciplinesName} width="50" height="50" />
                                </td>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={discipline.DisciplinesStatus}
                                        onChange={(e) => updateStatus(discipline._id, e.target.checked)}
                                    /> &nbsp;
                                    {discipline.DisciplinesStatus ? "True" : "False"}
                                </td>
                                <td>
                                    <Link to={`/edit-disciplines/${discipline._id}`} className="bt edit">
                                        Edit <i className="fa-solid fa-pen-to-square"></i>
                                    </Link>
                                </td>
                                <td>
                                    <button className="bt delete" onClick={() => handleDelete(discipline._id)}>
                                        Delete <i className="fa-solid fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    );
};

export default AllDisciplines;
