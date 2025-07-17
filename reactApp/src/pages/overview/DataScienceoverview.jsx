import React from 'react';
import '../css/datascienceoverview.css';

const DataScienceoverview = () => {
  return (
    <div>
      <div className="nav">
        <h1>Data Science</h1>
      </div>

      <h2 className="heading">Overview of the course</h2>
      <div className="overview">
        <p>
          Step into one of today’s most in-demand fields by mastering the fundamentals of data science.
          This beginner-friendly course introduces you to the entire data science workflow — from data cleaning
          and visualization to analysis and machine learning basics.
          <br /><br />
          Learn to use Python libraries like Pandas, NumPy, and Matplotlib to explore datasets and uncover insights.
          You'll work on real-world mini projects, analyze trends, and build reports using visual dashboards.
          Whether you're aiming for a career in analytics, preparing for higher-level ML studies, or just want to
          make sense of data, this course gives you the toolkit to start thinking like a data scientist.
        </p>
      </div>

      <h2 className="heading" id="learn">What you'll learn</h2>
      <ul className="overview">
        <li>Import, clean, and process real-world datasets using Python</li>
        <li>Analyze data using statistics and pattern recognition</li>
        <li>Visualize insights with Matplotlib and Seaborn</li>
        <li>Work with spreadsheets and CSV/JSON files</li>
        <li>Intro to machine learning with Scikit-learn</li>
        <li>Build mini-projects like COVID data analysis or stock trend dashboards</li>
      </ul>

      <button className="enroll">Enroll now</button>
    </div>
  );
};

export default DataScienceoverview;
