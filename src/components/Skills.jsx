import React from "react";

function Skills() {

  const Frontends = [
    "HTML5",
    "CSS3",
    "React JS",
    "JavaScript"
    
  ];
 const Backends = [
    "Java",
    "Python",
    "Spring Boot",
    "Node JS",

  ];
   const Databases = [
    "MySQL"
  ];
  return (
    <section id="skills" className="section">

      <h2 className="section-title">My Skills</h2>

      <div className="skills-container">
        <h1>Frontend :</h1>
        {Frontends.map((skill, index) => (

          <div className="skill-card" key={index}>
            <h3>{skill}</h3>
            </div>
        ))}
         <h1>Backend :</h1>
        {Backends.map((skill, index) => (

          <div className="skill-card" key={index}>

            <h3>{skill}</h3>

          </div>

        ))}
         <h1>Database :</h1>
        {Databases.map((skill, index) => (

          <div className="skill-card" key={index}> 
          <h3>{skill}</h3>
          </div>
        ))}  
      </div>

    </section>
  );
}

export default Skills;