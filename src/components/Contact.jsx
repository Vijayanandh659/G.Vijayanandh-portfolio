
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_ta4dvn7",
        "template_tqljqbp",
        form.current,
        {
          publicKey: "CCiIRahqWiWbFAKRa",
        }
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();

          setTimeout(() => {
            setStatus("");
          }, 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
        }
      );
  };

  return (
    <section id="contact" className="section">

      <h2 className="section-title">
        Contact Me
      </h2>

      <div className="contact-container">

        <div className="contact-info">

          <h3>Let's Connect</h3>

          <p>
            If you have an opportunity or would like
            to connect, feel free to contact me.
          </p>

          <p>
            <strong>Email:</strong>{" "}
            vijayanandhanandh377@gmail.com
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            +91 6374348609
          </p>

          <p>
            <strong>GitHub:</strong>{" "}
            github.com/Vijayanandh659
          </p>
          <p>
            <strong>LinkedIn</strong>{" "}
            www.linkedin.com/in/vijayanandh-g-a759a62a2?
          </p>

        </div>

        <form
          ref={form}
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          /><br />
          
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          /><br />  
          
          <label>Message:</label> 
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
          ></textarea><br />  

          <button
            type="submit"
            disabled={status === "Sending..."}
          >
            {status === "Sending..."
              ? "Sending..."
              : "Send Message"}
          </button>

          {status === "success" && (
            <div className="success-message">
              ✅ Message sent successfully!
              <br />
              Thank you for contacting me.
            </div>
          )}

          {status === "error" && (
            <div className="error-message">
              ❌ Failed to send message.
              <br />
              Please try again.
            </div>
          )}

        </form>

      </div>

    </section>
  );
}

export default Contact;
