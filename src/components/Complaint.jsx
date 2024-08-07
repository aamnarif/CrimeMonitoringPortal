import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Complaint.css";

const Complaint = ({ className = "", propTop, complaint, propWidth, prop }) => {
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
    <div className={`complaint-1 ${className}`} style={complaint1Style}>
      <div className="view">View</div>
      <div className="complaint" style={complaintStyle}>
        {complaint}
      </div>
      <div className="div10">{prop}</div>
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
