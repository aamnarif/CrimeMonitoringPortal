import Button from "./Button";
import PropTypes from "prop-types";
import styles from "./Form.module.css";

const Form = ({ className = "" }) => {
  return (
    <div className={[styles.form, className].join(" ")}>
      <div className={styles.sendResponse}>Send Response</div>
      <div className={styles.user61Parent}>
        <img className={styles.user61Icon} alt="" src="/user6-1.svg" />
        <div className={styles.fullName}>Full name</div>
      </div>
      <div className={styles.user61Parent}>
        <img className={styles.user61Icon} alt="" src="/mail1.svg" />
        <div className={styles.fullName}>Email Address</div>
      </div>
      <div className={styles.user61Parent}>
        <img
          className={styles.hugeiconscomplaint}
          alt=""
          src="/hugeiconscomplaint.svg"
        />
        <div className={styles.fullName}>Complaint Title</div>
      </div>
      <div className={styles.formInner}>
        <div className={styles.messageSquareParent}>
          <img className={styles.user61Icon} alt="" src="/messagesquare.svg" />
          <div className={styles.fullName}>Your Message</div>
        </div>
      </div>
      <Button
        register="Send Message"
        buttonPosition="unset"
        buttonWidth="unset"
        buttonTop="unset"
        buttonLeft="unset"
        registerFontFamily="Poppins"
      />
    </div>
  );
};

Form.propTypes = {
  className: PropTypes.string,
};

export default Form;
