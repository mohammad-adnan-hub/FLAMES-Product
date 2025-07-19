import React from 'react';
import "../css/appoverview.css"; 

const AppOverview = () => {
  return (
    <div>
      <div className="nav">
        <h1>App Development</h1>
      </div>

      <h2 className="heading">Overview of the course</h2>
      <div className="overview">
        <p>
          Bring your app ideas to life with hands-on lessons in Flutter, a
          powerful cross-platform framework backed by Google. Start with the
          basics of Dart programming and learn how to create beautiful, responsive
          mobile interfaces using widgets and layouts.
          <br /><br />
          From managing user input and app navigation to adding animations and
          deploying your app, this course covers the complete app-building journey.
          You’ll not only build real-world apps but also learn the fundamentals of
          mobile UX design, state management, and performance optimization.
          <br /><br />
          Whether you want to create personal productivity tools, games, or social
          apps, this course equips you with the skills to go from concept to
          launch. Ideal for beginners and aspiring app developers ready to build
          apps that work beautifully on both Android and iOS devices.
        </p>
      </div>

      <h2 className="heading" id="learn">What you'll learn</h2>
      <ul className="overview">
        <li>Set up your first Flutter development environment</li>
        <li>Build UIs using widgets and layouts</li>
        <li>Manage user input and state</li>
        <li>Use navigation, lists, and animations</li>
        <li>Publish your app on Android/iOS</li>
      </ul>

      <button className="enroll">Enroll now</button>
    </div>
  );
};

export default AppOverview;
