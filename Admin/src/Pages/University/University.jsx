import React from 'react'
import { Link } from 'react-router-dom'

const University = () => {
    return (
        <>
            <div className="bread">
                <div className="head">
                    <h4>Manage University Zone</h4>
                </div>
                <div className="links">
                    <Link to="/all-university-zone" className="add-new">All University Zone List</Link>&nbsp;
                    <Link to="/add-university-zone" className="add-new">Add New <i className="fa-solid fa-plus"></i></Link>
                </div>
            </div>
            <div className="bread mt-1">
                <div className="head">
                    <h4>Manage University Zone Universities</h4>
                </div>
                <div className="links">
                    <Link to="/all-university" className="add-new">All University Zone Universities List</Link>&nbsp;
                    <Link to="/add-university" className="add-new">Add New <i className="fa-solid fa-plus"></i></Link>
                </div>
            </div>
        </>
    )
}

export default University