import React from "react";
import profileImage from "../assets/profile.jpg";

function Home() {
  return (
    <section id="home" className="home">

      <div className="home-content">

        <p className="hello">Hello, I'm</p>

        <h1>VIJAYANANDH G</h1>

        <h2>Java Full Stack Developer</h2>

        <p className="home-description">
          I am a passionate fresher Java Full Stack Developer
          interested in building modern and responsive web applications
          using Java, Spring Boot, React JS and MySQL.
        </p>

        <div className="home-buttons">

          <a href="#projects" className="btn">
            View Projects
          </a>

          <a href="/Vijayanandh.G.pdf" className="btn secondary" download>
            Download Resume
          </a>

        </div>

        <div className="social-links">

          <a
            href="https://github.com/Vijayanandh659"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/vijayanandh-g-a759a62a2?"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </div>

        <img
      src={profileImage}
      alt="Vijayanandh"
      className="profile"
    />
    </section>
  );
}

export default Home;