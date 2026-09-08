import React from "react";

function Contact() {

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Thank you for contacting me!");

    event.target.reset();
  };

  return (
    <section id="contact" className="section">

      <h2 className="section-title">Contact Me</h2>

      <div className="contact-container">

        <div className="contact-info">

          <h3>Let's Connect</h3>

          <p>
            If you have an opportunity or would like to connect,
            feel free to contact me.
          </p>

          <p>
            <strong>Email:</strong>
            vijayanandhanandh377@gmail.com
          </p>

          <p>
            <strong>Phone:</strong>
            +91 6374348609
          </p>

          <p>
            <strong>GitHub:</strong>
            github.com/Vijayanandh659
          </p>
          <p>
            <strong>LinkedIn:</strong>
            www.linkedin.com/in/vijayanandh-g-a759a62a2?
          </p>

        </div>

      

      </div>

    </section>
  );
}

export default Contact;