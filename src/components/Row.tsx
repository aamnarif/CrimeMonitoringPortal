import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Row.module.css";

const Row = ({
  className = "",
  frame484,
  safeSecureCommunity,
  responseOptimization,
  propHeight,
}) => {
  const rowStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={[styles.row, className].join(" ")} style={rowStyle}>
      <div className={styles.iconText}>
        <img className={styles.iconTextChild} alt="" src={frame484} />
        <div className={styles.safeSecure}>{safeSecureCommunity}</div>
      </div>
      <div className={styles.iconText}>
        <img className={styles.iconTextItem} alt="" src="/frame-484.svg" />
        <div className={styles.safeSecure}>{responseOptimization}</div>
      </div>
    </div>
  );
};

Row.propTypes = {
  className: PropTypes.string,
  frame484: PropTypes.string,
  safeSecureCommunity: PropTypes.string,
  responseOptimization: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
};

export default Row;
