import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./IconText1.module.css";

const IconText1 = ({
  className = "",
  briefcase22,
  prop,
  cases,
  propOverflow,
}) => {
  const briefcase22IconStyle = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  return (
    <div className={[styles.iconText, className].join(" ")}>
      <div className={styles.iconbg}>
        <img
          className={styles.briefcase22Icon}
          alt=""
          src={briefcase22}
          style={briefcase22IconStyle}
        />
      </div>
      <div className={styles.text}>
        <b className={styles.b}>{prop}</b>
        <div className={styles.cases}>{cases}</div>
      </div>
    </div>
  );
};

IconText1.propTypes = {
  className: PropTypes.string,
  briefcase22: PropTypes.string,
  prop: PropTypes.string,
  cases: PropTypes.string,

  /** Style props */
  propOverflow: PropTypes.any,
};

export default IconText1;
