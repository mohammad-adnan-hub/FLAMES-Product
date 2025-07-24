import React from "react";
import "../css/course.css";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "Web Development",
    description:
      "Learn web development through interactive lessons designed for beginners. From HTML to JavaScript, build real projects, gain hands-on experience, and develop the skills to create responsive websites.",
    link: "/overview/web",
  },
  {
    title: "App Development",
    description:
      "Learn app development step by step with bite-sized lessons. Build real, functional mobile apps, gain hands-on experience, and bring your ideas to life using modern tools, industry frameworks, and practical coding skills.",
    link: "/overview/App",
  },
  {
    title: "DSA",
    description:
      "Master DSA with bite-sized, beginner-friendly lessons. Strengthen problem-solving skills, ace coding interviews, and build a solid foundation in computer science through hands-on practice and real-world coding challenges.",
    link: "/overview/dsa",
  },
  {
    title: "Python",
    description:
      "Learn Python step by step with bite-sized lessons. Build practical projects, master core concepts, and gain hands-on experience to code confidently and solve real-world problems with this versatile, beginner-friendly language.",
    link: "/overview/python",
  },
  {
    title: "C/C++",
    description:
      "Master the foundations of programming with C/C++! Learn to build fast, efficient software, understand how computers work, and gain skills for game development, embedded systems, and high-performance applications.",
    link: "/overview/cpp",
  },
  {
    title: "Java",
    description:
      "Dive into Java and build powerful, cross-platform applications! Learn object-oriented programming, develop desktop and mobile apps, and gain in-demand skills for web development, enterprise software, and beyond.",
    link: "/overview/java",
  },
  {
    title: "Data Science",
    description:
      "Enter the world of Data Science and turn data into impact. Learn Python, analytics, and machine learning to solve real-world problems and drive smart, data-driven decisions across industries.",
    link: "/overview/Data-science",
  },
  {
    title: "Data Security",
    description:
      "Step into Data Security and learn to protect valuable information from cyber threats. Master encryption, ethical hacking, and risk management to safeguard systems and keep data safe in today’s digital world.",
    link: "/overview/Data-security",
  },
  {
    title: "AI/ML",
    description:
      "Step into Artificial Intelligence and Machine Learning to create intelligent systems that learn and adapt. Master algorithms, Python, and data modeling to build smart applications powering the future of technology.",
    link: "/overview/AIML",
  },
];

const Course = () => {
  return (
    <div className="resources-wrapper">
      <div className="nav">
        <h1>Course</h1>
        <Link to="/enrolled">Enrolled</Link>
      </div>

      <div className="top">
        {courses.map((course, index) => (
          <div className="top_cards" key={index}>
            <Link to={course.link}>
              <h2>{course.title}</h2>
            </Link>
            <p>{course.description}</p>
            <button>
              <Link to={course.link}>Enroll Now</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
