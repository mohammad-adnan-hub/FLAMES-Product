import React from 'react';
import '/src/css/weboverview.css';
// import { Link } from 'react-router-dom';

const DSA_overview = () => {
  return (
    <div>
      <div className="nav">
        <h1>DSA</h1>
      </div>

      <h2 className="heading">Overview of the course</h2>
      <div className="overview">
        <p>
          Sharpen your coding skills and learn to solve problems like a pro. This
          course breaks down complex algorithms and data structures into
          easy-to-understand micro-lessons. Start with foundational topics like
          arrays and strings, then progress to hash maps, stacks, trees, and
          graphs. Visual explanations, real-life examples, and hands-on challenges
          help you grasp key patterns and apply them confidently. Ideal for
          students, job seekers, and developers preparing for coding interviews,
          this course strengthens your logical thinking and problem-solving
          ability. Learn how to write optimized code, tackle algorithmic
          challenges, and ace the most frequently asked DSA questions on platforms
          like LeetCode and HackerRank. Whether you're aiming for your dream tech
          job or just want to level up your code skills, this course is your
          ultimate guide to thinking like a true developer.
        </p>
      </div>

      <h2 className="heading2" id="learn">What you'll learn</h2>
      <ul className="overview2">
        <li><pre>•  Arrays, Strings, Linked Lists</pre></li>
        <li><pre>•  Stacks, Queues, Hash Maps</pre></li>
        <li><pre>•  Recursion and Time Complexity</pre></li>
        <li><pre>•  Sorting, Searching & Binary Trees</pre></li>
        <li><pre>•  Solve real coding problems using DSA</pre></li>
      </ul>

      <button className="enroll">Enroll now</button>
    </div>
  );
};

export default DSA_overview;
