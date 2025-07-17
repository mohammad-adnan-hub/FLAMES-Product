import React from 'react';
import '../css/lesson.css';

const Lesson = () => {
  return (
    <div>
      <div className="nav">
        <h1>Web Development</h1>
      </div>

      <div className="bottom-button-bar">
        <button className="btn next-btn">Next</button>
        <button className="btn ask-btn">Ask</button>
      </div>
    </div>
  );
};

export default Lesson;
