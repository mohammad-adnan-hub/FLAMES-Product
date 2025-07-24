import React from 'react';
import '/src/css/weboverview.css';
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
          <br />
          You’ll also learn encryption basics, password management, secure browsing habits, and how ethical hackers
          test vulnerabilities. Whether you're a developer, student, or everyday internet user, this course empowers
          you to be a smarter, safer digital citizen.
        </p>
      </div>

      <h2 className="heading2" id="learn">What you'll learn</h2>
      <ul className="overview2">
        <li><pre>•  Understand how digital threats like phishing and malware operate</pre></li>
        <li><pre>•  Learn password best practices and multi-factor authentication</pre></li>
        <li><pre>•  Discover how encryption and hashing work</pre></li>
        <li><pre>•  Explore basic cybersecurity tools and firewalls</pre></li>
        <li><pre>•  Learn how to browse, share, and store data securely</pre></li>
        <li><pre>•  Practice real-world scenarios like spotting fake websites or secure coding principles</pre></li>
      </ul>

      <button className="enroll">Enroll now</button>
    </div>
  );
};

export default DataSecurityoverview;
