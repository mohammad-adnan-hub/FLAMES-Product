import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/home.css";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const dropdownItems = [
    "Web Development",
    "App Development",
    "DSA",
    "Python",
    "C/C++",
    "Java",
    "Data Science",
    "Data Security",
    "AI/ML"
  ];

  const faqData = [
    { q: "What NAME do?", a: "Lorem ipsum dolor sit amet..." },
    {
      q: "How is this different from just Googling stuff?",
      a: "Lorem ipsum dolor sit amet...",
    },
    {
      q: "Can I access any courses for free?",
      a: "Lorem ipsum dolor sit amet...",
    },
    {
      q: "Can I track my progress and revisit lessons?",
      a: "Lorem ipsum dolor sit amet...",
    },
    { q: "Can I learn at my own pace?", a: "Lorem ipsum dolor sit amet..." },
  ];
  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/" className="logo">
            QwikWise
          </Link>
        </div>
        <div className="nav-right">
          <Link to="/courses">Courses</Link>
          <div className="dropdown-container">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
              Resources
            </button>
            {showDropdown && (
              <div className="dropdown-grid">
                {dropdownItems.map((item, index) => (
                  <div className="dropdown-item" key={index}>
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          <a href="#faq-scroll">FAQs</a>
          <div className="join">
            <Link to="/login" id="joint" target="_blank">
              Join for free
            </Link>
          </div>
        </div>
      </nav>

      <div className="hero">
        <div className="hero-left">
          <h1 className="Slogan">Learn.</h1>
          <h1 className="Slogan">Think.</h1>
          <h1 className="Slogan">Develop.</h1>

          <div className="Intro">
            <p>
              Big goals start small. Our microlearning platform helps students
              stay ahead with quick, focused lessons that fit into busy lives.
              Build knowledge fast, think critically, and grow smarter every
              day.
            </p>
          </div>

          <div className="started">
            <Link to="/resources">Get started</Link>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-22dc-61f7-97df-9bea7cb4e66d/raw?se=2025-07-24T12%3A10%3A34Z&sp=r&sv=2024-08-04&sr=b&scid=1873aae2-1d21-5254-8921-89a1edc10f58&skoid=04233560-0ad7-493e-8bf0-1347c317d021&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-24T11%3A00%3A39Z&ske=2025-07-25T11%3A00%3A39Z&sks=b&skv=2024-08-04&sig=hQtahyD4UzlFYQnSba6ykFABhwpAUcAEZpv3ciwOqrU%3D"
            alt="image"
          />
        </div>
      </div>

      <div className="why">
        <h1>Why micro-learning?</h1>
        <p>
          Less is more—especially when you're busy. Micro-learning breaks down
          complex topics into short, focused bursts that are easy to absorb,
          quick to apply, and perfect for learning on the go. No overwhelm, no
          wasted time—just smart, bite-sized knowledge that sticks.
        </p>
      </div>

      <h1 className="top">Top Resources</h1>

      <div className="top">
        <div className="top_cards" id="one">
          <Link
            to="/overview/web"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h2>Web Development</h2>
          </Link>
          <p>
            Learn web development through interactive, bite-sized lessons
            designed for beginners...
          </p>
          <button>
            <Link to="/overview/web">Enroll Now</Link>
          </button>
        </div>

        <div className="top_cards" id="two">
          <Link
            to="/overview/App"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h2>App Development</h2>
          </Link>
          <p>Learn app development step by step with bite-sized lessons...</p>
          <button>
            <Link to="/overview/App">Enroll Now</Link>
          </button>
        </div>

        <div className="top_cards" id="three">
          <Link
            to="/overview/dsa"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h2>DSA</h2>
          </Link>
          <p>Master DSA with bite-sized, beginner-friendly lessons...</p>
          <button>
            <Link to="/overview/dsa">Enroll Now</Link>
          </button>
        </div>

        <div className="top_cards" id="four">
          <Link
            to="/overview/python"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h2>Python</h2>
          </Link>
          <p>Learn Python step by step with bite-sized lessons...</p>
          <button>
            <Link to="/overview/python">Enroll Now</Link>
          </button>
        </div>
      </div>

      <section className="faq" id="faq-scroll">
        <h1>Frequently Asked Questions</h1>
        {faqData.map((faq, index) => (
          <div className="faq-box" key={index}>
            <button
              className={`ques ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              Q. {faq.q}
            </button>

            {activeIndex === index && (
              <div className="ans">
                <p>{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </section>

      <div className="end">
        <div className="left-end">
          <div className="left-end-up">
            <h2>QwikWise</h2>
          </div>
          <div className="left-end-down">
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <p>Socials</p>
          </div>
        </div>

        <div className="right-end">
          <p>Right side content</p>
        </div>
      </div>
    </>
  );
};

export default Home;
