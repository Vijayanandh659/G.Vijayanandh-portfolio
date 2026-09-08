import React from "react";

function Projects() {

  const projects = [
    {
      title: "Student Management System",
      description:
        "A web application to manage student registration, student details, update and delete operations.",
      technologies:
        "Frontend: HTML, CSS ,JavaScript , React JS.  Backend:Java, Spring Boot,Rest API. DataBase: MySQL",
      github:
        "https://github.com/Vijayanandh659"
    },

    {
      title: "Role-Based Leave Management System",
      description:
        "An attendance management application for recording employee attendance and generating attendance reports.",
      technologies:
        "Frontend: HTML, CSS,JavaScript.  Backend:Java, Spring Boot, Rest API. DataBase: MySQL",
      github:
        "https://github.com/Vijayanandh659"
    },

    {
      title: "Personal Portfolio",
      description:
        "A responsive personal portfolio website created to showcase my skills, projects and education.",
      technologies:
        "React JS, JavaScript, HTML, CSS",
      github:
        "https://github.com/Vijayanandh659"
    }
  ];

  return (
    <section id="projects" className="section">

      <h2 className="section-title">My Projects</h2>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <p>
              <strong>Technologies:</strong>
              <br />
              {project.technologies}
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              View GitHub
            </a>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;