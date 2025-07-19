import React, { useState } from 'react';
import '../css/LearningDashboard.css';

const LearningDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">●</div>
        <h1 className="brand">NAME</h1>
        <nav>
          <ul>
            <li
              className={`tab-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              <span>🗂</span> Dashboard
            </li>
            <li
              className={`tab-btn ${activeTab === 'learning' ? 'active' : ''}`}
              onClick={() => setActiveTab('learning')}
            >
              <span>📖</span> My Learning
            </li>
            <li
              className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveTab('skills')}
            >
              <span>📈</span> Skills Tracking
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main */}
      <main className="main">
        <div className="topbar">
          <div className="nav-links">
            <a href="#">Resources</a>
            <a href="#">How it works</a>
            <a href="#">FAQs</a>
          </div>
          <div className="toggle-switch">
            <div className="toggle-circle"></div>
          </div>
        </div>

        {/* Dashboard */}
        <section className={`tab-content ${activeTab !== 'dashboard' ? 'hidden' : ''}`}>
          <h2>Welcome Back 👋</h2>
          <p className="subtext">Here’s a quick look at your learning journey.</p>

          <div className="dashboard-stats">
            <div className="stat-card">
              <h3>3</h3>
              <p>Courses Enrolled</p>
            </div>
            <div className="stat-card">
              <h3>76%</h3>
              <p>Overall Progress</p>
            </div>
            <div className="stat-card">
              <h3>1/2</h3>
              <p>Practice Today</p>
            </div>
          </div>

          <h3 className="section-title">Active Course</h3>
          <div className="course-card">
            <div className="course-header yellow"><span className="progress">80%</span></div>
            <div className="course-body">
              <p>Course</p>
              <h3>JavaScript Basics</h3>
              <span className="arrow">➤</span>
            </div>
            <div className="course-footer">
              <button className="practice">Start practice session <span>1/2 today</span></button>
              <button className="resume">Resume →</button>
            </div>
          </div>
        </section>

        {/* My Learning */}
        <section className={`tab-content ${activeTab !== 'learning' ? 'hidden' : ''}`}>
          <h2>My Learning</h2>
          <div className="course-grid">
            <div className="course-card">
              <div className="course-header"><span className="progress">80%</span></div>
              <div className="course-body">
                <p>Course</p>
                <h3>Web Development</h3>
                <span className="arrow">➤</span>
              </div>
              <div className="course-footer">
                <button className="practice">Start practice session <span>1/2 today</span></button>
                <button className="resume">Resume →</button>
              </div>
            </div>

            <div className="course-card">
              <div className="course-header yellow"><span className="progress">60%</span></div>
              <div className="course-body">
                <p>Course</p>
                <h3>Python Programming</h3>
                <span className="arrow">➤</span>
              </div>
              <div className="course-footer">
                <button className="practice">Start practice session <span>0/1 today</span></button>
                <button className="resume">Resume →</button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className={`tab-content ${activeTab !== 'skills' ? 'hidden' : ''}`}>
          <h2>Skills Tracking</h2>
          <div className="skills">
            <div className="skill">
              <h4>JavaScript</h4>
              <div className="bar"><div style={{ width: '70%' }}></div></div>
            </div>
            <div className="skill">
              <h4>Python</h4>
              <div className="bar"><div style={{ width: '85%' }}></div></div>
            </div>
            <div className="skill">
              <h4>React</h4>
              <div className="bar"><div style={{ width: '60%' }}></div></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LearningDashboard;
