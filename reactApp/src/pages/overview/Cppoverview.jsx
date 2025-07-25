import React from 'react';
import '/src/css/weboverview.css';
// import { Link } from 'react-router-dom';

const Cppoverview = () => {
  return (
    <div>
      <div className="nav">
        <h1>C/C++</h1>
      </div>

      <h2 className="heading">Overview of the course</h2>
      <div className="overview">
        <p>
          Unlock the world of system-level programming with C and C++. Start by
          understanding memory management, pointers, loops, and functions in C.
          Then move on to C++ with object-oriented programming, classes,
          constructors, inheritance, and polymorphism.
          <br /><br />
          These languages teach you to think deeply about how code interacts with
          hardware and memory — essential for performance-critical applications.
          Used in game engines, real-time systems, and competitive programming,
          C/C++ remains a cornerstone of serious software engineering.
          <br /><br />
          This course is ideal for students preparing for technical interviews,
          developers aiming to optimize performance, or anyone who wants to
          understand what’s happening under the hood of modern software. Build a
          strong foundation in computing from the ground up.
        </p>
      </div>

      <h2 className="heading2" id="learn">What you'll learn</h2>
      <ul className="overview2">
        <li><pre>•  Understand variables, data types, and functions in C</pre></li>
        <li><pre>•  Work with pointers, arrays, and dynamic memory</pre></li>
        <li><pre>•  Grasp C++ concepts: classes, objects, constructors</pre></li>
        <li><pre>•  Use inheritance and polymorphism effectively</pre></li>
        <li><pre>•  Solve real-world logic problems and implement algorithms</pre></li>
        <li><pre>•  Gain confidence for low-level, high-performance coding</pre></li>
      </ul>

      <button className="enroll">Enroll now</button>
    </div>
  );
};

export default Cppoverview;