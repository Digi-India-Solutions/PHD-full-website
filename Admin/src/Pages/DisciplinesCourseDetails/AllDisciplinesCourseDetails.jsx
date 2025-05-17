import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllDisciplinesCourseDetails = () => {
    const [data, setData] = useState([]);

    const getApiData = async () => {
        try {
            const res = await axios.get("https://api.iirhe.org/api/all-disciplines-course-details");
            setData(res.data.data); // Ensure the `data` field from the API matches this structure
        } catch (error) {
            console.error(error);
            toast.error("Failed to fetch data.");
        }
    };

    useEffect(() => {
        getApiData();
    }, []);

    const handleDelete = async (id) => {
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
                    await axios.delete(`https://api.iirhe.org/api/delete-disciplines-course-details/${id}`);
                    toast.success("Deleted successfully");
                    getApiData(); // Refresh the data
                } catch (error) {
                    toast.error("Failed to delete");
                }
            }
        });
    };

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>All Disciplines Course Details</h4>
                </div>
                <div className="links">
                    <Link to="/add-discipline-course-details" className="add-new">Add New <i className="fa-solid fa-plus"></i></Link>
                </div>
            </div>

            {/* <div className="filteration">
                <div className="search">
                    <label htmlFor="search">Search </label>&nbsp;
                    <input type="text" name="search" id="search" />
                </div>
            </div> */}

            <section className="d-table">
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Sr.No.</th>
                            <th scope="col">Disciplines</th>
                            <th scope="col">Course Name</th>
                            <th scope="col">Course Overview</th>
                            {/* <th scope="col">Students Enrolled</th> */}
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((item, index) => (
                                <tr key={item._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.Disciplines?.DisciplinesName || "N/A"}</td>
                                    <td>{item.DisciplinesCourseName?.DisciplinesCourseName || "N/A"}</td>
                                    <td>{item.CourseOverView}</td>
                                    {/* <td dangerouslySetInnerHTML={{ __html: item.Studentenrolledtaughtto }}></td> */}

                                    <td>
                                        <Link to={`/edit-discipline-course-details/${item._id}`} className="bt edit">
                                            Edit <i className="fa-solid fa-pen-to-square"></i>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            className="bt delete"
                                            onClick={() => handleDelete(item._id)}
                                        >
                                            Delete <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center">No data found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>
        </>
    );
};

export default AllDisciplinesCourseDetails;
