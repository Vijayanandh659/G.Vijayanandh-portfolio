import React from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

import ScrollAnimation from "./components/ScrollAnimation";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      {/* HOME */}

      <ScrollAnimation animation="fade-up">
        <Home />
      </ScrollAnimation>

      {/* ABOUT */}

      <ScrollAnimation animation="fade-left">
        <About />
      </ScrollAnimation>

      {/* SKILLS */}

      <ScrollAnimation animation="fade-up">
        <Skills />
      </ScrollAnimation>

      {/* PROJECTS */}

      <ScrollAnimation animation="zoom">
        <Projects />
      </ScrollAnimation>

      {/* EDUCATION */}

      <ScrollAnimation animation="fade-right">
        <Education />
      </ScrollAnimation>

      {/* RESUME */}

      <ScrollAnimation animation="fade-up">
        <Resume />
      </ScrollAnimation>

      {/* CONTACT */}

      <ScrollAnimation animation="fade-left">
        <Contact />
      </ScrollAnimation>

      <footer>
        <p>© 2026 Vijay Anandh. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;