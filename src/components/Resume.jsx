import React from "react";

function Resume() {
  const downloadResume = () => {
    const link = document.createElement("a");

    link.href = "/Vijayanandh.G.pdf.pdf";
    link.download = "Vijayanandh Resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="resume-section">

      <h2>Want to know more about me?</h2>

      <p>
         Download my resume to learn more about my skills,
        education and projects.
      </p>

      <div className="resume-buttons">

      

        <button
          onClick={downloadResume}
          className="btn"
        >
          Download Resume
        </button>

      </div>

    </section>
  );
}

export default Resume;