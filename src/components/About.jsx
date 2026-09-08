import React from "react";

function About() {
  return (
    <section id="about" className="section">

      <h2 className="section-title">About Me</h2>

      <div className="about-container">

        <div className="about-text">

          <p>
            I am a passionate and motivated fresher aspiring to start
            my career as a Java Full Stack Developer.
          </p>

          <p>
            I have knowledge of Java, Spring Boot, REST APIs, MySQL,
            HTML, CSS, JavaScript and React JS.
          </p>

          <p>
            I enjoy developing web applications and solving programming
            problems. I am continuously improving my technical skills
            through projects and practical development.
          </p>

        </div>

        <div className="about-info">

          <div>
            <strong>Name:</strong>
            <span>Vijayanandh G</span>
          </div>

          <div>
            <strong>Role:</strong>
            <span>Java Full Stack Developer</span>
          </div>

          <div>
            <strong>Experience:</strong>
            <span>Fresher</span>
          </div>

          <div>
            <strong>Location:</strong>
            <span>Pennadam,Cuddalore, Tamil Nadu</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;