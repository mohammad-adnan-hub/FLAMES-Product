// import React from 'react';
import '/src/css/javaoverview.css';
// import { Link } from 'react-router-dom';

const Javaoverview = () => {
  return (
    <div>
      <div className="nav">
        <h1>Java</h1>
      </div>

      <h2 className="heading">Overview of the course</h2>
      <div className="overview">
        <p>
          Java powers everything from mobile apps to enterprise systems — and this
          course teaches you how to master it. You’ll begin with core Java syntax:
          variables, control structures, loops, and methods. From there, you'll
          dive into object-oriented programming (OOP), inheritance, polymorphism,
          and exception handling. Build real Java programs as you learn,
          reinforcing every concept with hands-on experience. Perfect for learners
          aiming to build Android apps, work with enterprise-grade software, or
          prepare for backend development, this course lays a strong foundation in
          a language trusted by banks, tech giants, and universities alike.
          Develop the problem-solving mindset and logical thinking that Java
          encourages — and create applications built to scale.
        </p>
      </div>

      <h2 className="heading" id="learn">What you'll learn</h2>
      <ul className="overview">
        <li>Set up your Java development environment</li>
        <li>Work with variables, arrays, loops, and strings</li>
        <li>Understand OOP: classes, inheritance, encapsulation</li>
        <li>Manage runtime errors with exception handling</li>
        <li>Build console-based Java applications</li>
        <li>Develop logic used in real-world software systems</li>
      </ul>

      <button className="enroll">Enroll now</button>
    </div>
  );
};

export default Javaoverview;
