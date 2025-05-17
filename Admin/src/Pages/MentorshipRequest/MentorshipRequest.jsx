import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const MentorshipRequest = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch mentorship requests from the server
        const fetchRequests = async () => {
            try {
                const response = await axios.get('https://api.iirhe.org/api/all-mentorship-request');
                setRequests(response.data.data); // Set the fetched data to state
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
                const response = await axios.delete(`https://api.iirhe.org/api/delete-mentorship-request/${id}`);
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
                    <h4>All Mentorship Requests</h4>
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
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Department/Program</th>
                                <th scope="col">Research Interests</th>
                                <th scope="col">Preferred Meeting Times</th>
                                <th scope="col">Meeting Frequency</th>
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
                                    <td>{request.departmentProgram}</td>
                                    <td>{request.researchInterests}</td>
                                    <td>{request.preferredMeetingTimes}</td>
                                    <td>{request.meetingFrequency}</td>
                                    <td>{new Date(request.createdAt).toLocaleString()}</td>
                                    <td><button className='bt delete' onClick={() => deleteRecord(request._id)}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default MentorshipRequest;
