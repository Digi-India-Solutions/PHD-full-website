import React from 'react'
import { Link } from 'react-router-dom'

const AllDisplines = () => {
    return (
        <>
            <div className="bread">
                <div className="head">
                    <h4>Manage Discipline</h4>
                </div>
                <div className="links">
                    <Link to="/all-disciplines" className="add-new">All Discipline List</Link>&nbsp;
                    <Link to="/add-disciplines" className="add-new">Add New <i className="fa-solid fa-plus"></i></Link>
                </div>
            </div>
            <div className="bread mt-1">
                <div className="head">
                    <h4>Manage Discipline Course</h4>
                </div>
                <div className="links">
                    <Link to="/all-disciplines-course" className="add-new">All Discipline Course List</Link>&nbsp;
                    <Link to="/add-disciplines-course" className="add-new">Add New <i className="fa-solid fa-plus"></i></Link>
                </div>
            </div>
            <div className="bread mt-1">
                <div className="head">
                    <h4>Manage Discipline Course Details</h4>
                </div>
                <div className="links">
                    <Link to="/all-discipline-course-details" className="add-new">All Discipline Course Details List</Link>&nbsp;
                    <Link to="/add-discipline-course-details" className="add-new">Add New <i className="fa-solid fa-plus"></i></Link>
                </div>
            </div>

        </>
    )
}

export default AllDisplines