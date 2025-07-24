import React from 'react';
import '/src/css/pythonoverview.css';
// import { Link } from 'react-router-dom';

const Pythonoverview = () => {
  return (
    <div>
      <div className="nav">
        <h1>Python Programming</h1>
      </div>

      <h2 className="heading">Overview of the course</h2>
      <div className="overview">
        <p>
          Dive into Python — a powerful, versatile language that’s as
          beginner-friendly as it is industry-approved. Start with the basics:
          variables, loops, conditionals, and functions. Then move into more
          advanced concepts like file handling, error management, and
          object-oriented programming. With clear examples and practical projects,
          you’ll learn how to write clean, readable, and efficient Python code.
          This course is perfect whether you're new to coding or aiming to
          automate tasks, analyze data, or prepare for data science and machine
          learning. With its simple syntax and vast ecosystem of libraries, Python
          opens doors to web development, automation, AI, and beyond. Start here
          to future-proof your tech career.
        </p>
      </div>

      <h2 className="heading2" id="learn">What you'll learn</h2>
      <ul className="overview2">
        <li><pre>•  Write Python programs using clean syntax and good practices</pre></li>
        <li><pre>•  Use loops, conditionals, functions, and data types</pre></li>
        <li><pre>•  Handle files, user input, and exceptions</pre></li>
        <li><pre>•  Create reusable code with object-oriented programming</pre></li>
        <li><pre>•  Automate tasks and build mini projects (calculator, chatbot, etc.)</pre></li>
        <li><pre>•  Prepare for paths like data science, automation, or web dev</pre></li>
      </ul>

      <button className="enroll">Enroll now</button>
    </div>
  );
};

export default Pythonoverview;
