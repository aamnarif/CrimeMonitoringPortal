import PropTypes from "prop-types";
import styles from "./Complaint1.module.css";

const Complaint1 = ({ className = "", complaint, prop }) => {
  return (
    <div className={[styles.complaint4, className].join(" ")}>
      <div className={styles.view}>View</div>
      <div className={styles.complaint}>{complaint}</div>
      <div className={styles.div}>{prop}</div>
    </div>
  );
};

Complaint1.propTypes = {
  className: PropTypes.string,
  complaint: PropTypes.string,
  prop: PropTypes.string,
};

export default Complaint1;
