import React from "react";

function Projects() {
  const projects = [
    {
      title: "Student Management System",
      description:
        "A web application to manage student registration, view student details, and perform create, update, and delete operations.",
      technologies:
        "Frontend: React JS, HTML, CSS, JavaScript | Backend: Java, Spring Boot, REST API | Database: MySQL",
      github: "https://github.com/Vijayanandh659",
    },

    {
      title: "Role-Based Leave Management System",
      description:
        "A web application to manage employee leave requests with role-based access and leave management operations.",
      technologies:
        "Frontend: HTML, CSS, JavaScript | Backend: Java, Spring Boot, REST API | Database: MySQL",
      github: "https://github.com/Vijayanandh659",
    },

    {
      title: "E-Commerce Web Application",
      description:
        "Developed an e-commerce web application with product browsing, category filtering, search, user registration and login, shopping cart, checkout, and order management.",
      technologies:
        "Frontend: React JS, JavaScript, HTML, CSS | Backend: Java, Spring Boot, REST API | Database: MySQL | Security: Spring Security, JWT",
      github: "https://github.com/Vijayanandh659/E-commerce-",
    },

    {
      title: "Personal Portfolio",
      description:
        "A responsive personal portfolio website showcasing my technical skills, projects, education, and resume, with a contact form.",
      technologies:
        "React JS, JavaScript, HTML5, CSS3, EmailJS, GitHub Pages",
      github: "https://github.com/Vijayanandh659/G.Vijayanandh-portfolio",
    },
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
              rel="noopener noreferrer"
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
