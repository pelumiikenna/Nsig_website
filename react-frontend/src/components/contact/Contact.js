import React, { useState } from "react";
import { Content } from "../../styles/globalStyles";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useForm, ValidationError } from "@formspree/react";
import { Link} from "react-router-dom";

const Contact = () => {
  const [messageDetails, setMessageDetails] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setMessageDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [state, handleSubmit] = useForm("xpzbjzey");
  console.log(useForm("xpzbjzey"));

  // handleSubmit().then(setMessageDetails({ email: "", message: "" }));

  if (state.succeeded) {
    return (
      <div className="form-success-msg alert-success">
        <h4>Thank you for getting in touch!</h4>
        <p>We will reply shortly. Have a great day !</p>
        <Link className="btn btn-extra" to="/">
          Go to Home page
        </Link>
      </div>
    );
  }

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
                <BsFillTelephoneFill style={{ paddingRight: "5px" }} />
                +49-178-301-9032
              </a>
            </li>
            <li style={{ marginBottom: "-30px", marginTop: "20px" }}>
              For enquiries, please fill out this form
            </li>
          </ul>
        </div>
        <form onSubmit={(handleSubmit)} className="form">
          <label
            className="form-label"
            style={{ fontSize: "15px" }}
            htmlFor="email"
          >
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
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <div>
            <label
              className="form-label"
              style={{ fontSize: "15px", marginTop: "15px" }}
              htmlFor="message"
            >
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

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button
              type="submit"
              className="btn btn-extra"
              disabled={state.submitting}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Content>
  );
};

export default Contact;
