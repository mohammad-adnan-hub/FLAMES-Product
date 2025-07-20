// import React from 'react';
import '/src/css/datasecurityoverview.css';
// import { Link } from 'react-router-dom';

const DataSecurityoverview = () => {
  return (
    <div>
      <div className="nav">
        <h1>Data Security</h1>
      </div>

      <h2 className="heading">Overview of the course</h2>
      <div className="overview">
        <p>
          In an era of data breaches and online threats, cybersecurity is no longer optional — it’s essential.
          This beginner-level course introduces the core principles of data protection, internet safety, and
          secure development practices. Understand how threats like phishing, malware, and social engineering work —
          and how to defend against them.
          <br /><br />
          You’ll also learn encryption basics, password management, secure browsing habits, and how ethical hackers
          test vulnerabilities. Whether you're a developer, student, or everyday internet user, this course empowers
          you to be a smarter, safer digital citizen.
        </p>
      </div>

      <h2 className="heading" id="learn">What you'll learn</h2>
      <ul className="overview">
        <li>Understand how digital threats like phishing and malware operate</li>
        <li>Learn password best practices and multi-factor authentication</li>
        <li>Discover how encryption and hashing work</li>
        <li>Explore basic cybersecurity tools and firewalls</li>
        <li>Learn how to browse, share, and store data securely</li>
        <li>Practice real-world scenarios like spotting fake websites or secure coding principles</li>
      </ul>

      <button className="enroll">Enroll now</button>
    </div>
  );
};

export default DataSecurityoverview;
