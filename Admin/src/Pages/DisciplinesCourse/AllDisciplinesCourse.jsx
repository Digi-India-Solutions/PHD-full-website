import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllDisciplinesCourse = () => {
    const [disciplineCourses, setDisciplineCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    // Fetch all discipline courses
    useEffect(() => {
        const fetchDisciplineCourses = async () => {
            try {
                const response = await axios.get('https://api.iirhe.org/api/all-disciplines-course'); // Adjust endpoint
                setDisciplineCourses(response.data.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching discipline courses:', error);
                toast.error('Failed to fetch discipline courses.');
                setIsLoading(false);
            }
        };

        fetchDisciplineCourses();
    }, []);

    // Handle delete
    const handleDelete = async (id) => {
        const confirm = await Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this record!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });

        if (confirm.isConfirmed) {
            try {
                await axios.delete(`https://api.iirhe.org/api/delete-disciplines-course/${id}`); // Adjust endpoint
                toast.success('Discipline course deleted successfully!');
                setDisciplineCourses(disciplineCourses.filter(course => course._id !== id));
            } catch (error) {
                console.error('Error deleting discipline course:', error);
                toast.error('Failed to delete discipline course.');
            }
        }
    };

    // Filtered courses based on search term
    const filteredCourses = disciplineCourses.filter(course =>
        course.DisciplinesCourseName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>All Discipline Courses</h4>
                </div>
                <div className="links">
                    <Link to="/add-disciplines-course" className="add-new">
                        Add New <i className="fa-solid fa-plus"></i>
                    </Link>
                </div>
            </div>

            <section className="d-table">
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <table className="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Sr.No.</th>
                                <th scope="col">Discipline</th>
                                <th scope="col">Course Name</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCourses.map((course, index) => (
                                <tr key={course._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{course.Disciplines?.DisciplinesName || 'N/A'}</td>
                                    <td>{course.DisciplinesCourseName}</td>
                                    <td>
                                        <Link
                                            to={`/edit-disciplines-course/${course._id}`}
                                            className="bt edit"
                                        >
                                            Edit <i className="fa-solid fa-pen-to-square"></i>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(course._id)}
                                            className="bt delete"
                                        >
                                            Delete <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </section>
        </>
    );
};

export default AllDisciplinesCourse;
