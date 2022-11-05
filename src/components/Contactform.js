import React from "react";
import Profilefooter from "../components/Profilefooter";
export default function Contact() {
  var name = "Oluwasegun";

  return (
    <div className="contact-page">
      <form action="">
        <div className="contact-title">
          <h1>Contact Me</h1>
          <h4>
            Hi there, contact me to ask me about anything you have in mind.
          </h4>
        </div>
        <div className="half">
          <div className="item">
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              id="first-name"
              placeholder="Enter your First name"
            />
          </div>
          <div className="item">
            <label htmlFor="name">Last Name</label>
            <input
              type="text"
              id="last-name"
              placeholder="Enter your Last name"
            />
          </div>
        </div>
        <div className="full">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="yourname@email.com" />
        </div>
        <div className="full">
          <label htmlFor="message">Message</label>
          <textarea
            name=""
            id="message"
            placeholder="Send me a message and I'll reply you as soon as possible..."
          ></textarea>
          <p className="text-area-msg">Please enter a message</p>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" />
          <label htmlFor="checkbox-message">
            You agree to providing your data to {name} who may contact you.
          </label>
        </div>
        <div className="action">
          <input type="submit" value="Send Message" />
        </div>
      </form>
      <Profilefooter />
    </div>
  );
}
