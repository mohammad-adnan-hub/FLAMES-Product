import React from "react";
import '/src/css/weboverview.css';

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
          <br />
          From managing user input and app navigation to adding animations and
          deploying your app, this course covers the complete app-building journey.
          You’ll not only build real-world apps but also learn the fundamentals of
          mobile UX design, state management, and performance optimization.
          <br />
          Whether you want to create personal productivity tools, games, or social
          apps, this course equips you with the skills to go from concept to
          launch. Ideal for beginners and aspiring app developers ready to build
          apps that work beautifully on both Android and iOS devices.
        </p>
      </div>

      <h2 className="heading2" id="learn">What you'll learn</h2>
      <ul className="overview2">
        <li><pre>•  Set up your first Flutter development environment</pre></li>
        <li><pre>•  Build UIs using widgets and layouts</pre></li>
        <li><pre>•  Manage user input and state</pre></li>
        <li><pre>•  Use navigation, lists, and animations</pre></li>
        <li><pre>•  Publish your app on Android/iOS</pre></li>
      </ul>

      <button className="enroll">Enroll now</button>
    </div>
  );
};

export default AppOverview;
