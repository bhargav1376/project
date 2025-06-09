import React, { useState } from 'react';
import './Dashboard.css';
import logo from '../home/Logo.png';
import logo1 from '../home/logo1.jpeg';
const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-dashboard-container">
      <aside className={`sidebar-dashboard ${isSidebarOpen ? 'open-dashboard' : 'closed-dashboard'}`}>
        <div className="logo-dashboard">
          <img src={logo} alt="Logo" className="logo-img-dashboard" />
          {isSidebarOpen && <span className="logo-text-dashboard">Dashboard</span>}
        </div>
        <nav className="nav-dashboard">
          <ul className="nav-list-dashboard">
            <li className="nav-item-dashboard active-dashboard">
              <a href="#" className="nav-link-dashboard">
                <i className="icon-dashboard">🏠</i> {/* Placeholder for icon */}
                {isSidebarOpen && <span className="nav-text-dashboard">Home</span>}
              </a>
            </li>
            <li className="nav-item-dashboard">
              <a href="#" className="nav-link-dashboard">
                <i className="icon-dashboard">📈</i> {/* Placeholder for icon */}
                {isSidebarOpen && <span className="nav-text-dashboard">Campaigns</span>}
              </a>
            </li>
            <li className="nav-item-dashboard">
              <a href="#" className="nav-link-dashboard">
                <i className="icon-dashboard">👥</i> {/* Placeholder for icon */}
                {isSidebarOpen && <span className="nav-text-dashboard">Users</span>}
              </a>
            </li>
            <li className="nav-item-dashboard">
              <a href="#" className="nav-link-dashboard">
                <i className="icon-dashboard">📊</i> {/* Placeholder for icon */}
                {isSidebarOpen && <span className="nav-text-dashboard">Analytics</span>}
              </a>
            </li>
            <li className="nav-item-dashboard">
              <a href="#" className="nav-link-dashboard">
                <i className="icon-dashboard">⚙️</i> {/* Placeholder for icon */}
                {isSidebarOpen && <span className="nav-text-dashboard">Settings</span>}
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <div className="main-content-dashboard">
        <header className="header-dashboard">
          <button className="sidebar-toggle-btn-dashboard" onClick={toggleSidebar}>
            {isSidebarOpen ? '❮' : '❯'}
          </button>
          <h1 className="header-title-dashboard">Campaign Dashboard</h1>
          <div className="search-bar-dashboard">
            <input type="text" placeholder="Search anything here" className="search-input-dashboard" />
          </div>
          <div className="user-profile-dashboard">
            <div className="user-info-dashboard">
              <span className="user-name-dashboard">Cameron Williamson</span>
              <span className="user-role-dashboard">Manager</span>
            </div>
            <img src={logo1} alt="User Avatar" className="user-avatar-dashboard" />
            <button className="notification-btn-dashboard">🔔</button>
          </div>
        </header>

        <div className="dashboard-grid-dashboard">
          <div className="card-dashboard my-campaign-dashboard">
            <h2 className="card-title-dashboard">My Campaign</h2>
            <span className="view-more-dashboard">View more</span>
            <div className="stats-grid-dashboard">
              <div className="stat-item-dashboard">
                <span className="stat-value-dashboard">4600+</span>
                <span className="stat-label-dashboard">Total Users</span>
                <span className="stat-change-dashboard positive-dashboard">↑ 2.99%</span>
              </div>
              <div className="stat-item-dashboard">
                <span className="stat-value-dashboard">3200+</span>
                <span className="stat-label-dashboard">New Users</span>
                <span className="stat-change-dashboard positive-dashboard">↑ 0.70%</span>
              </div>
              <div className="stat-item-dashboard">
                <span className="stat-value-dashboard">4.567</span>
                <span className="stat-label-dashboard">Active Users</span>
                <span className="stat-change-dashboard positive-dashboard">↑ 1.54%</span>
              </div>
              <div className="stat-item-dashboard">
                <span className="stat-value-dashboard">$4.700.300</span>
                <span className="stat-label-dashboard">Ad Spend</span>
                <span className="stat-change-dashboard negative-dashboard">↓ 2.94%</span>
              </div>
            </div>
          </div>

          <div className="card-dashboard weekly-earning-dashboard">
            <h2 className="card-title-dashboard">Weekly Earning</h2>
            <span className="earning-value-dashboard">$3.100.323</span>
            <span className="earning-change-dashboard positive-dashboard">↑ 1.89%</span>
            <div className="chart-placeholder-dashboard bar-chart-dashboard"></div>
          </div>

          <div className="card-dashboard campaign-statistic-dashboard">
            <h2 className="card-title-dashboard">Campaign Statistic</h2>
            <span className="statistic-change-dashboard positive-dashboard">↑ 2.54%</span>
            <div className="time-toggle-dashboard">
              <button className="toggle-btn-dashboard active-dashboard">Month</button>
              <button className="toggle-btn-dashboard">Week</button>
            </div>
            <div className="chart-placeholder-dashboard line-chart-dashboard"></div>
          </div>

          <div className="card-dashboard campaign-earning-dashboard">
            <h2 className="card-title-dashboard">Campaign Earning</h2>
            <div className="doughnut-chart-container-dashboard">
              <div className="doughnut-chart-placeholder-dashboard"></div>
              <span className="doughnut-percentage-dashboard">65%</span>
            </div>
            <div className="total-earning-dashboard">
              <span className="total-earning-value-dashboard">$13.446.500</span>
              <span className="total-earning-change-dashboard positive-dashboard">↑ 3.44%</span>
            </div>
            <div className="earning-legend-dashboard">
              <span className="legend-item-dashboard income-dashboard">Income</span>
              <span className="legend-item-dashboard investment-dashboard">Investment</span>
              <span className="legend-item-dashboard saving-dashboard">Saving</span>
            </div>
          </div>

          <div className="card-dashboard latest-campaign-dashboard">
            <h2 className="card-title-dashboard">Lastest Campaign</h2>
            <span className="view-more-dashboard">View more</span>
            <div className="campaign-list-dashboard">
              <div className="campaign-item-dashboard">
                <div className="campaign-avatar-dashboard">F</div>
                <div className="campaign-details-dashboard">
                  <span className="campaign-name-dashboard">Kathryn Murphy</span>
                  <span className="campaign-date-dashboard">13 August 2021</span>
                </div>
                <span className="campaign-age-dashboard">42</span>
                <span className="campaign-gender-dashboard">Female</span>
                <span className="campaign-location-dashboard">Singapore</span>
                <div className="campaign-mini-chart-dashboard"></div>
              </div>
              <div className="campaign-item-dashboard">
                <div className="campaign-avatar-dashboard">M</div>
                <div className="campaign-details-dashboard">
                  <span className="campaign-name-dashboard">Floyd Miles</span>
                  <span className="campaign-date-dashboard">13 August 2021</span>
                </div>
                <span className="campaign-age-dashboard">36</span>
                <span className="campaign-gender-dashboard">Male</span>
                <span className="campaign-location-dashboard">Singapore</span>
                <div className="campaign-mini-chart-dashboard"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

