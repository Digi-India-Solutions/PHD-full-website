import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllResource = () => {
    const [resources, setResources] = useState([]);

    // Fetch all resources when the component mounts
    useEffect(() => {
        const fetchResources = async () => {
            try {
                const response = await axios.get('https://api.iirhe.org/api/get-resources'); // Get resources from your backend API
                setResources(response.data.data); // Store resources in the state
            } catch (error) {
                console.error("Error fetching resources:", error);
            }
        };

        fetchResources();
    }, []);

    // Handle delete resource
    const handleDelete = async (id) => {
        // Show SweetAlert2 confirmation dialog
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to delete this resource?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel',
            reverseButtons: true
        });

        if (result.isConfirmed) {
            try {
                // Make the delete request
                await axios.delete(`https://api.iirhe.org/api/delete-resources/${id}`);

                // Update the state to remove the deleted resource
                setResources(resources.filter(resource => resource._id !== id));

                // Show success alert
                Swal.fire({
                    title: 'Deleted!',
                    text: 'Your resource has been deleted.',
                    icon: 'success'
                });
            } catch (error) {
                console.error("Error deleting resource:", error);
                Swal.fire({
                    title: 'Error!',
                    text: 'There was an issue deleting the resource.',
                    icon: 'error'
                });
            }
        } else {
            // Show cancel alert if the user clicked "No"
            Swal.fire({
                title: 'Cancelled',
                text: 'The resource was not deleted.',
                icon: 'info'
            });
        }
    };


    return (
        <>
            <div className="bread">
                <div className="head">
                    <h4>All Resources</h4>
                </div>
                <div className="links">
                    <Link to="/add-resources" className="add-new">Add New <i className="fa-solid fa-plus"></i></Link>
                </div>
            </div>

            <section className="mt-2 d-table table-responsive">
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">S No.</th>
                            <th scope="col">Resource Name</th>
                            <th scope="col">Resource PDF</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resources.length === 0 ? (
                            <tr>
                                <td colSpan="3">No resources available</td>
                            </tr>
                        ) : (
                            resources.map((resource, index) => (
                                <tr key={resource._id}>
                                    <td>{index + 1}</td>
                                    <td>{resource.ResourcesName}</td>
                                    <td>
                                        <a href={`https://api.iirhe.org/${resource.ResourcesPdf}`} target="_blank" rel="noopener noreferrer">
                                            View PDF
                                        </a>
                                    </td>
                                    <td><Link to={`/edit-resources/${resource._id}`} className='bt edit'>Edit <i className="fa-solid fa-pen-to-square"></i></Link></td>
                                    <td>
                                        <button
                                            className="bt delete"
                                            onClick={() => handleDelete(resource._id)}
                                        >
                                            Delete <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </section>
        </>
    );
};

export default AllResource;
