import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Complaint.module.css";

const Complaint = ({ className = "", complaint, prop, propTop, propWidth }) => {
  const complaint1Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const complaintStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={[styles.complaint1, className].join(" ")}
      style={complaint1Style}
    >
      <div className={styles.view}>View</div>
      <div className={styles.complaint} style={complaintStyle}>
        {complaint}
      </div>
      <div className={styles.div}>{prop}</div>
    </div>
  );
};

Complaint.propTypes = {
  className: PropTypes.string,
  complaint: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Complaint;
