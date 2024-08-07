import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Input05TextField01OneLine.module.css";

const Input05TextField01OneLine = ({
  className = "",
  usernamebankname,
  iD,
  showUsernamebankname,
  propTop,
  propRight,
  propLeft,
  propColor,
  onInput05TextField01OneLine01ContainerClick,
}) => {
  const input05TextField01OneLine02Style = useMemo(() => {
    return {
      top: propTop,
      right: propRight,
      left: propLeft,
    };
  }, [propTop, propRight, propLeft]);

  const usernamebanknameStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const navigate = useNavigate();

  const onInput05TextField01OneLine01ContainerClick1 = useCallback(() => {
    navigate("/log-in1");
  }, [navigate]);

  return (
    <div
      className={[styles.input05textfield01oneline02, className].join(" ")}
      style={input05TextField01OneLine02Style}
    >
      <div
        className={styles.input05textfield01oneline01}
        onClick={onInput05TextField01OneLine01ContainerClick}
      >
        <div className={styles.rectangle} />
        {showUsernamebankname && (
          <div
            className={styles.usernamebankname}
            style={usernamebanknameStyle}
          >
            {usernamebankname}
          </div>
        )}
        <div className={styles.rightIcon}>times</div>
        <div className={styles.leftIcon}>search</div>
      </div>
      <b className={styles.id}>{iD}</b>
    </div>
  );
};

Input05TextField01OneLine.propTypes = {
  className: PropTypes.string,
  usernamebankname: PropTypes.string,
  iD: PropTypes.string,
  showUsernamebankname: PropTypes.bool,

  /** Style props */
  propTop: PropTypes.any,
  propRight: PropTypes.any,
  propLeft: PropTypes.any,
  propColor: PropTypes.any,

  /** Action props */
  onInput05TextField01OneLine01ContainerClick: PropTypes.func,
};

export default Input05TextField01OneLine;
