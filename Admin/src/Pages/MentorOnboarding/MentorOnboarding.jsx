import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const MentorOnboarding = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch mentorship requests from the server
        const fetchRequests = async () => {
            try {
                const response = await axios.get('https://api.iirhe.org/api/all-onboard-mentor');
                setRequests(response.data); // Set the fetched data to state
            } catch (err) {
                setError('Failed to fetch requests');
            } finally {
                setLoading(false);
            }
        };

        fetchRequests();
    }, []);

    const deleteRecord = async (id) => {
        // Show SweetAlert confirmation dialog
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'Do you really want to delete this mentorship request?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        });

        // If the user confirms, proceed with the deletion
        if (result.isConfirmed) {
            try {
                const response = await axios.delete(`https://api.iirhe.org/api/delete-onboard-mentor/${id}`);
                if (response.status === 200) {
                    // Filter out the deleted request from the state
                    setRequests(requests.filter(request => request._id !== id));
                    toast.success('Mentorship request deleted successfully');
                }
            } catch (err) {
                toast.error('Failed to delete request');
            }
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    return (
        <>
            <div className="bread">
                <div className="head">
                    <h4>All Mentor Onboarding</h4>
                </div>
                <div className="links">
                    {/* Additional links or actions can be placed here */}
                </div>
            </div>

            <section className="d-table">
                <div className="table-responsive mt-4">
                    <table className="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Sr.No.</th>
                                <th scope="col">Full Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Nationality</th>
                                <th scope="col">Undergraduate Degree</th>
                                <th scope="col">Masters Degree</th>
                                <th scope="col">PhD Specialization</th>
                                <th scope="col">Current Position</th>
                                <th scope="col">Affiliated Institution</th>
                                <th scope="col">Years of Experience</th>
                                <th scope="col">Agree to Terms</th>
                                <th scope="col">Created At</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.map((request, index) => (
                                <tr key={request._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{request.fullName}</td>
                                    <td>{request.email}</td>
                                    <td>{request.phone}</td>
                                    <td>{request.nationality}</td>
                                    <td>{request.undergraduatedegree}</td>
                                    <td>{request.mastersdegree}</td>
                                    <td>{request.phdspecialization || 'N/A'}</td>
                                    <td>{request.currentPosition}</td>
                                    <td>{request.affiliatedInstitution}</td>
                                    <td>{request.yearsOfExperience}</td>
                                    <td>{request.agreeToTerms ? 'Yes' : 'No'}</td>
                                    <td>{new Date(request.createdAt).toLocaleString()}</td>
                                    <td>
                                        <button className='bt delete' onClick={() => deleteRecord(request._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default MentorOnboarding;
