// import React from 'react';
import '/src/css/dsa_overview.css';
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

      <h2 className="heading" id="learn">What you'll learn</h2>
      <ul className="overview">
        <li>Arrays, Strings, Linked Lists</li>
        <li>Stacks, Queues, Hash Maps</li>
        <li>Recursion and Time Complexity</li>
        <li>Sorting, Searching & Binary Trees</li>
        <li>Solve real coding problems using DSA</li>
      </ul>

      <button className="enroll">Enroll now</button>
    </div>
  );
};

export default DSA_overview;
