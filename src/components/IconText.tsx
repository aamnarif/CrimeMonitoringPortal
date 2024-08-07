import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./IconText.module.css";

const IconText = ({
  className = "",
  phone,
  callForInquiry,
  prop,
  propWidth,
}) => {
  const iconText1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={[styles.iconText, className].join(" ")}
      style={iconText1Style}
    >
      <img className={styles.phoneIcon} alt="" src={phone} />
      <b className={styles.callForInquiry}>{callForInquiry}</b>
      <div className={styles.div}>{prop}</div>
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
