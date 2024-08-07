import { useMemo } from "react";
import PropTypes from "prop-types";
import "./IconText.css";

const IconText = ({
  className = "",
  propWidth,
  phone,
  callForInquiry,
  prop,
}) => {
  const iconText1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={`icon-text11 ${className}`} style={iconText1Style}>
      <img className="phone-icon" alt="" src={phone} />
      <b className="call-for-inquiry">{callForInquiry}</b>
      <div className="div9">{prop}</div>
    </div>
  );
};

IconText.propTypes = {
  className: PropTypes.string,
  phone: PropTypes.string,
  callForInquiry: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default IconText;
