import PropTypes from "prop-types";
import "./Complaint1.css";

const Complaint1 = ({ className = "", complaint, prop }) => {
  return (
    <div className={`complaint-4 ${className}`}>
      <div className="view1">View</div>
      <div className="complaint1">{complaint}</div>
      <div className="div11">{prop}</div>
    </div>
  );
};

Complaint1.propTypes = {
  className: PropTypes.string,
  complaint: PropTypes.string,
  prop: PropTypes.string,
};

export default Complaint1;
