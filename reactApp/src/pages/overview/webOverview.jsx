import React from 'react';
import '../css/webOverview.css';
import rectangleImage from '../assets/rectangle-150.svg'; 

const WebOverview = () => {
  return (
    <div className="webdevelopment-overview">
      <img className="rectangle-15" src={rectangleImage} alt="Web Development Banner" />

      <div className="web-development">Web Development</div>

      <div className="overview-of-the-course">Overview of the course...</div>

      <div className="what-you-ll-learn">What you’ll learn</div>

      <div className="course-description">
        Build stunning, responsive websites from the ground up! Start with the
        fundamentals—HTML, CSS, and JavaScript—and progress to powerful modern
        frameworks like React, Angular, and Node.js. Learn how to design seamless
        user experiences with intuitive interfaces, create dynamic and interactive
        features, and manage databases and servers behind the scenes. This course
        covers everything from front-end visuals to back-end logic, giving you the
        full skill set to become a confident full-stack web developer. Whether
        you’re aiming to build personal projects, freelance, or join top tech
        companies, this course will equip you to bring your web ideas to life and
        launch your coding career with confidence. Dive in and start creating the
        web of tomorrow today!
      </div>

      <ul className="course-learnings">
        <li>Structure web pages using HTML5</li>
        <li>Style them with modern CSS</li>
        <li>Make them interactive with JavaScript</li>
        <li>Responsive design principles</li>
        <li>Build and publish your own site for any screen size</li>
      </ul>

      <div className="rectangle-16"></div>

      <button className="enroll-now">Enroll Now</button>
    </div>
  );
};

export default WebOverview;