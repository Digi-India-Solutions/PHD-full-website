import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [sidetoggle, setSideToggle] = useState(false)
  const location = useLocation() // to track the current route

  const handletoggleBtn = () => {
    setSideToggle(!sidetoggle)
  }

  const isActive = (path) => location.pathname.startsWith(path) ? "active" : "";

  const logout = () => {
    sessionStorage.clear()
    window.location.href = "/log-in"
  }
  return (
    <>
      <header>
        <div className="top-head">
          <div className="right">
            <h2>Indian Institute of Research and Higher Education</h2>
            <div className="bar" onClick={handletoggleBtn}>
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
          <div className="left">
            <a href="" target="_blank">
              <i className="fa-solid fa-globe"></i>
              Go To Website
            </a>

            <div className="logout" onClick={logout}>
              Log Out <i className="fa-solid fa-right-from-bracket"></i>
            </div>
          </div>
        </div>

        <div className={`rightNav ${sidetoggle ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/dashboard" onClick={handletoggleBtn} className={isActive('/dashboard')}>
                <i className="fa-solid fa-sun"></i> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/all-mentorship-request" onClick={handletoggleBtn}
                className={['/all-mentorship-request'].some(path => isActive(path)) ? 'active' : ''}>
                <i className="fa-solid fa-user-graduate"></i> Mentorship Request
              </Link>
            </li>
            <li>
              <Link to="/all-mentor-onboarding" onClick={handletoggleBtn}
                className={['/all-mentor-onboarding'].some(path => isActive(path)) ? 'active' : ''}>
                <i className="fa-solid fa-user-plus"></i> Mentor Onboarding
              </Link>
            </li>
            <li>
              <Link to="/guide-query" onClick={handletoggleBtn}
                className={['/guide-query'].some(path => isActive(path)) ? 'active' : ''}>
                <i className="fa-solid fa-compass"></i> Guide Query
              </Link>
            </li>
            <li>
              <Link to="/all-inquery" onClick={handletoggleBtn}
                className={['/all-inquery'].some(path => isActive(path)) ? 'active' : ''}>
                <i className="fa-solid fa-question-circle"></i> Inquery Request
              </Link>
            </li>
            <li>
              <Link to="/all-reach-us" onClick={handletoggleBtn}
                className={['/all-reach-us'].some(path => isActive(path)) ? 'active' : ''}>
                <i className="fa-solid fa-phone"></i> Reach Us Inquery
              </Link>
            </li>
            <li>
              <Link to="/all-join-guide-inquery" onClick={handletoggleBtn}
                className={['/all-join-guide-inquery'].some(path => isActive(path)) ? 'active' : ''}>
                <i className="fa-solid fa-handshake"></i> Join Guide Inquery
              </Link>
            </li>
            <li>
              <Link to="/all-banners" onClick={handletoggleBtn}
                className={['/all-banners', '/add-banner', '/edit-banner'].some(path => isActive(path)) ? 'active' : ''}>
                <i className="fa-regular fa-images"></i> Manage Banners
              </Link>
            </li>
            <li>
              <Link to="/disciplines" onClick={handletoggleBtn}
                className={['/disciplines', '/all-disciplines', '/edit-disciplines', '/add-disciplines', '/all-discipline-course-details', '/edit-discipline-course-details', '/add-discipline-course-details'].some(path => isActive(path)) ? 'active' : ''} >
                <i className="fa-solid fa-graduation-cap"></i> Manage Disciplines
              </Link>
            </li>
            <li>
              <Link to="/university" onClick={handletoggleBtn}
                className={['/university', '/all-university-zone', '/edit-university-zone', '/add-university-zone', '/all-university', '/edit-university', '/add-university'].some(path => isActive(path)) ? 'active' : ''} >
                <i className="fa-solid fa-moon"></i> Manage University
              </Link>
            </li>
            <li>
              <Link to="/all-resources" onClick={handletoggleBtn}
                className={['/all-resources', '/add-resources', '/edit-resources'].some(path => isActive(path)) ? 'active' : ''}>
                <i className="fa-solid fa-folder-open"></i> Manage Resources
              </Link>
            </li>
            <li>
              <Link to="/all-guide" onClick={handletoggleBtn}
                className={['/all-guide', '/add-guide', '/edit-guide'].some(path => isActive(path)) ? 'active' : ''}>
                <i className="fa-solid fa-map-signs"></i> Manage Guide
              </Link>
            </li>


            <button className='logout mb-5' onClick={logout}>Log Out <i className="fa-solid fa-right-from-bracket"></i></button>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header
