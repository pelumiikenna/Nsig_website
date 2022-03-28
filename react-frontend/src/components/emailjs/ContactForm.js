import React, { useState, useEffect } from "react";
import { emailJs } from "./emailFunctionality";
import styled from "styled-components";
import { Content } from "../../styles/globalStyles";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [messageDetails, setMessageDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [buttonContent, setButtonContent] = useState("Send Message");
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setMessageDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    let name = e.target.name;
    let value = e.target.value;
    e.preventDefault();
    setButtonContent("...loading");

    if (
      !messageDetails.name ||
      !messageDetails.email ||
      !messageDetails.message
    ) {
      setErrorMessage(true);
      setButtonContent("Send Message");
      return;
    }
    try {
      const response = await emailJs(messageDetails);

      if (response.status === 200) {
        setSuccessMessage(true);
        setMessageDetails({
          name: "",
          email: "",
          message: "",
        });
        setButtonContent("Send Message");
      }
    } catch (error) {
      setErrorMessage(true);
    }
  };

  useEffect(() => {
    const timeout = () =>
      setTimeout(() => {
        setSuccessMessage(false);
        setErrorMessage(false);
      }, 5000);
    (successMessage || errorMessage) && timeout();
    clearTimeout(timeout);
  }, [successMessage, errorMessage]);

  return (
    <Content className="section">
      <div>
        <h3>Contact Us</h3>
      </div>

      <div className="contact-content">
        <div className="contact-ul">
          <ul>
            <li>
              <a href="tel:+49-178-301-9032">
                <BsFillTelephoneFill className="contact-icon-tel" />
                +49-178-301-9032
              </a>
            </li>
            <li className="contact-enquiries">
              For enquiries, please fill out this form
            </li>
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <label className="contact-label form-label" htmlFor="email">
            Name
          </label>
          <input
            className="form-input"
            id="name"
            type="name"
            name="name"
            value={messageDetails.name}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label className=" contact-label form-label" htmlFor="email">
            Email Address
          </label>
          <input
            className="form-input"
            id="email"
            type="email"
            name="email"
            value={messageDetails.email}
            onChange={(e) => {
              handleChange(e);
            }}
          />

          <div>
            <label className="contact-label form-label" htmlFor="message">
              Your Message
            </label>
            <textarea
              className="form-textarea"
              id="message"
              name="message"
              value={messageDetails.message}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {successMessage && (
              <div className="alert-success">
                <h4>Thank you for getting in touch!</h4>
                <span>We will reply shortly. Have a great day !</span>
              </div>
            )}
            {errorMessage && (
              <div className="alert-danger">
                <p>Please provide values to all fields</p>
              </div>
            )}

            <button type="submit" className="contact-btn btn btn-extra">
              {buttonContent}
            </button>
          </div>
        </form>
      </div>
    </Content>
  );
};

export default ContactForm;

// const Button = styled.button`

// `;
