import React from "react";
import "./Style.css";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mwkgjwbp");
  if (state.succeeded) {
    return (
      <>
        <div id="afterSubmit">
          {/* <img src="https://cdn.dribbble.com/users/147386/screenshots/5315437/success-tick-dribbble.gif" /> */}
          <img src="https://cdn.dribbble.com/users/2121936/screenshots/4814257/ezgif-1-64fc188f39.gif" alt="" />
          <h1>Thanks you!</h1>
          <p>Your Submission has been sent.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div id="contact">
        <div className="cont_con">
          <div className="item1">
            <p>- LET'S CONNECT</p>
            <h2>Get In Touch</h2>
            <p>
              I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you
              want to run past me. You can contact anytime at 24/7
            </p>

            <div style={{ display: "flex", justifyContent: "space-around", width: "100%", marginTop: "50px" }}>
              <div style={{ textAlign: "center" }}>
                <a href="https://www.linkedin.com/in/kumar-anshuman-50b5a1256/" target="_blank">
                  <img src="Images/linkedin.png" style={{ height: "55px" }} />
                </a>
                <p style={{ marginTop: "0px", lineHeight: "20px" }}>LinkedIn</p>
              </div>

              <div style={{ textAlign: "center" }}>
                <a href="mailto: kranshu351@gmail.com" target="_blank">
                  <img src="Images/email.jpg" style={{ height: "55px" }} />
                </a>
                <p style={{ marginTop: "0px", lineHeight: "20px" }}>Mail</p>
              </div>

              <div style={{ textAlign: "center" }}>
                <a href="https://github.com/Anshuaman2001" target="_blank">
                  <img src="Images/github.png" style={{ height: "55px" }} />
                </a>
                <p style={{ marginTop: "0px", lineHeight: "20px" }}>GitHub</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <input type="text" id="name" name="Name" placeholder="Your Name.." required />
            <br />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <input type="email" id="email" name="Email" placeholder="Your Email.." required />
            <ValidationError prefix="Email" field="Email" errors={state.errors} />

            <textarea cols="30" rows="5" id="message" name="Message" placeholder="Your Message.." required></textarea>
            <br />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>
        </div>
        <br />
        <br />
        <br />
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223978.80136210963!2d77.23021655569775!3d28.69955330275787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1716664210304!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      ></iframe>
      </div>
    </>
  );
};

export default Contact;
