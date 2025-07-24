import React from 'react';
import '/src/css/weboverview.css';

const webOverview = () => {
  return (
    <div>
      <div className="nav">
        <h1>Web Development</h1>
      </div>

      <h2 className="heading">Overview of the course</h2>
      <div className="overview">
        <p>
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
        </p>
      </div>

      <h2 className="heading2" id="learn">What you'll learn</h2>
      <ul className="overview2">
        <li><pre>•  Structure web pages using HTML5</pre></li>
        <li><pre>•  Style them with modern CSS</pre></li>
        <li><pre>•  Make them interactive with JavaScript</pre></li>
        <li><pre>•  Responsive design principles</pre></li>
        <li><pre>•  Build and publish your own site for any screen size</pre></li>
      </ul>

      <button className="enroll">Enroll now</button>
    </div>
  );
};

export default webOverview;