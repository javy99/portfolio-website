import { FormEvent, useRef } from "react";
import "./contact.css";
import { BsInstagram } from "react-icons/bs";
import { TbArrowBigRightLines } from "react-icons/tb";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

// Email JS ===================>
// import React { useRef } from "react";
import emailjs from "emailjs-com";
import { FiGithub } from "react-icons/fi";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_cktuaqm",
          "template_uvhz62b",
          form.current,
          "N8X_6KP3MJQ-1gBtY"
        )
        .then(() => {
          (e.target as HTMLFormElement).reset();
        })
        .catch((err) => console.error("Failed to send email:", err));
    }
  };

  return (
    <section id="contact" className="contact section container">
      <div className="sectionTitle">
        <span className="titleNumber">06.</span>
        <h5 className="titleText">
          Contact
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="contactContainer grid">
        <div className="socialContacts grid">
          <h3>Talk to me</h3>

          <div className="cards grid">
            <div className="card">
              <div>
                <BsInstagram className="icon" />
              </div>
              <h4>Instagram</h4>
              <span className="userName">@javy___k</span>

              <div>
                <a
                  href="https://www.instagram.com/javy___k/"
                  className="flex"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send Message <TbArrowBigRightLines className="icon" />
                </a>
              </div>
            </div>
            <div className="card">
              <div>
                <AiFillLinkedin className="icon" />
              </div>
              <h4>LinkedIn</h4>
              <span className="userName">@jkosimov</span>

              <div>
                <a
                  href="https://www.linkedin.com/in/jkosimov/"
                  className="flex"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send Message <TbArrowBigRightLines className="icon" />
                </a>
              </div>
            </div>
            <div className="card">
              <div>
                <AiOutlineTwitter className="icon" />
              </div>
              <h4>Twitter</h4>
              <span className="userName">@javy___k</span>

              <div>
                <a
                  href="https://twitter.com/javy___k" // Updated to Twitter URL
                  className="flex"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send Message <TbArrowBigRightLines className="icon" />
                </a>
              </div>
            </div>
            <div className="card">
              <div>
                <FiGithub className="icon" />
              </div>
              <h4>GitHub</h4>
              <span className="userName">@javy99</span>

              <div>
                <a
                  href="https://github.com/javy99"
                  className="flex"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send Message <TbArrowBigRightLines className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="form grid">
          <h3>Send me an email</h3>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Enter your Name" name="name" />
            <input type="email" placeholder="Enter your Email" name="email" />
            <textarea
              name="message"
              placeholder="Enter your message"
            ></textarea>
            <button className="formBtn" type="submit" name="submit">
              Send Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
