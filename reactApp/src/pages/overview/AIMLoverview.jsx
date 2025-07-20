// import React from 'react';
import '/src/css/aimloverview.css'; 
// import { Link } from 'react-router-dom';

const AIMLoverview = () => {
  return (
    <div>
      <div className="nav">
        <h1>AI/ML</h1>
      </div>

      <h2 className="heading">Overview of the course</h2>
      <div className="overview">
        <p>
          Explore the fascinating world of AI and machine learning — even if
          you’re new to math and programming. This course breaks down complex
          concepts like supervised and unsupervised learning, regression,
          classification, and neural networks into easy-to-digest lessons.
          <br /><br />
          You’ll use Python along with libraries like Scikit-learn, TensorFlow, or Keras
          to train real models on real data. From building a spam filter to
          predicting housing prices, this course is hands-on, project-based, and
          perfect for anyone curious about the brains behind smart tech.
        </p>
      </div>

      <h2 className="heading" id="learn">What you'll learn</h2>
      <ul className="overview">
        <li>Understand the difference between AI and machine learning</li>
        <li>Train your first ML model with Python</li>
        <li>Use libraries like Scikit-learn for real predictions</li>
        <li>Explore model evaluation and tuning techniques</li>
        <li>Learn the basics of neural networks and deep learning</li>
        <li>Build projects like movie recommendation engines or image classifiers</li>
      </ul>

      <button className="enroll">Enroll now</button>
    </div>
  );
};

export default AIMLoverview;