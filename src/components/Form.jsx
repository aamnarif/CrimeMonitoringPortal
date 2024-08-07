import Button from "./Button";
import PropTypes from "prop-types";
import "./Form.css";

const Form = ({ className = "" }) => {
  return (
    <div className={`form1 ${className}`}>
      <div className="send-response">Send Response</div>
      <div className="user6-1-parent">
        <img className="user6-1-icon" alt="" src="/user6-1.svg" />
        <div className="full-name">Full name</div>
      </div>
      <div className="user6-1-parent">
        <img className="user6-1-icon" alt="" src="/mail1.svg" />
        <div className="full-name">Email Address</div>
      </div>
      <div className="user6-1-parent">
        <img
          className="hugeiconscomplaint"
          alt=""
          src="/hugeiconscomplaint.svg"
        />
        <div className="full-name">Complaint Title</div>
      </div>
      <div className="form-inner">
        <div className="message-square-parent">
          <img className="user6-1-icon" alt="" src="/messagesquare.svg" />
          <div className="full-name">Your Message</div>
        </div>
      </div>
      <Button
        buttonPosition="unset"
        buttonWidth="unset"
        buttonTop="unset"
        buttonLeft="unset"
        register="Send Message"
        registerFontFamily="Poppins"
      />
    </div>
  );
};

Form.propTypes = {
  className: PropTypes.string,
};

export default Form;
