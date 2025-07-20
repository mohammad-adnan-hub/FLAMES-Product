import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css";

const Home = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/" className="logo">
            QwikWise
          </Link>
        </div>
        <div className="nav-right">
          <Link to="/resources">Resources</Link>
          <a href="/How.mp4" target="_blank" rel="noopener noreferrer">
            How it works
          </a>
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
          {/* <img src={logo} alt="Hero Section Logo" /> */}
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
          <Link to="/overview/web" style={{ textDecoration: "none", color: "inherit" }}>
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
          <Link to="/overview/App" style={{ textDecoration: "none", color: "inherit" }}>
            <h2>App Development</h2>
          </Link>
          <p>Learn app development step by step with bite-sized lessons...</p>
          <button>
            <Link to="/overview/App">Enroll Now</Link>
          </button>
        </div>

        <div className="top_cards" id="three">
          <Link to="/overview/dsa" style={{ textDecoration: "none", color: "inherit" }}>
            <h2>DSA</h2>
          </Link>
          <p>Master DSA with bite-sized, beginner-friendly lessons...</p>
          <button>
            <Link to="/overview/dsa">Enroll Now</Link>
          </button>
        </div>

        <div className="top_cards" id="four">
          <Link to="/overview/python" style={{ textDecoration: "none", color: "inherit" }}>
            <h2>Python</h2>
          </Link>
          <p>Learn Python step by step with bite-sized lessons...</p>
          <button>
            <Link to="/overview/python">Enroll Now</Link>
          </button>
        </div>
      </div>

      <Link to="/resources" className="more">
        more
      </Link>

      <section className="faq" id="faq-scroll">
        <h1>Frequently Asked Questions</h1>

        {[
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
          {
            q: "Can I learn at my own pace?",
            a: "Lorem ipsum dolor sit amet...",
          },
        ].map((faq, index) => (
          <div className={`faq-box ${index === 0 ? "active" : ""}`} key={index}>
            <button className="ques">Q. {faq.q}</button>
            <div className="ans">
              <p>{faq.a}</p>
            </div>
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
