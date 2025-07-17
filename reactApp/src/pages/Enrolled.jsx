import React from 'react';
import '../css/enrolled.css';
import { Link } from 'react-router-dom';

const Enrolled = () => {
  return (
    <div>
      <div className="nav">
        <Link to="/resources">Resources</Link>
        <h1>Enrolled</h1>
      </div>

      <div className="center">
        <p>Not enrolled in any course yet!!!</p>
      </div>
    </div>
  );
};

export default Enrolled;