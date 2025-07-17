import React from 'react';
import '../css/path.css';
import { Link } from 'react-router-dom';

const Path = () => {
  const lessons = [1, 2, 3, 4, 5]; // You can expand this dynamically later

  return (
    <div>
      <div className="nav">
        <h1>Web Development</h1>
      </div>

      <div className="path">
        {lessons.map((lessonNumber) => (
          <div className="lesson" key={lessonNumber}>
            <button className="circle-btn">
              <Link to="/lesson">{lessonNumber}</Link>
            </button>
          </div>
        ))}
      </div>

      <button className="floating-btn">Ask Doubt</button>
    </div>
  );
};

export default Path;
