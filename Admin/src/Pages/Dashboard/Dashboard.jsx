import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Add styles for the dashboard

const Dashboard = () => {
  const features = [
    { name: 'Manage Banners', link: '/all-banners', icon: 'fa-regular fa-images' },
    { name: 'Manage Disciplines', link: '/disciplines', icon: 'fa-solid fa-graduation-cap' },
    { name: 'Manage University', link: '/university', icon: 'fa-solid fa-building-columns' },
    { name: 'Manage Resources', link: '/all-resources', icon: 'fa-solid fa-book-open' },
    { name: 'Manage Guide', link: '/all-guide', icon: 'fa-solid fa-map' },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <div className="dashboard-grid">
        {features.map((feature, index) => (
          <Link key={index} to={feature.link} className="dashboard-card">
            <i className={`${feature.icon} card-icon`}></i>
            <span className="card-title">{feature.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
