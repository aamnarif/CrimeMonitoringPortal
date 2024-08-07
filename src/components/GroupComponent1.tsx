import PropTypes from "prop-types";
import styles from "./GroupComponent1.module.css";

const GroupComponent1 = ({ className = "" }) => {
  return (
    <div
      className={[styles.pleseUseFormatUsernamebankParent, className].join(" ")}
    >
      <div className={styles.pleseUseFormatUsernamebank}>
        <div className={styles.rectangle} />
        <div className={styles.adkfj}>adkfj</div>
        <b className={styles.pleaseUseFormat}>
          Please use format username@bankname
        </b>
        <div className={styles.exclamationCircle}>exclamation-circle</div>
        <div className={styles.rightIcon}>times</div>
        <div className={styles.leftIcon}>search</div>
      </div>
      <div className={styles.requiredField}>
        <div className={styles.rectangle} />
        <b className={styles.pleaseUseFormat}>Required field</b>
        <div className={styles.exclamationCircle}>exclamation-circle</div>
        <div className={styles.rightIcon}>times</div>
        <div className={styles.leftIcon}>search</div>
      </div>
      <div className={styles.passwordsDoNotMatch}>
        <div className={styles.rectangle} />
        <b className={styles.pleaseUseFormat}>Passwords do not match</b>
        <div className={styles.exclamationCircle}>exclamation-circle</div>
        <div className={styles.rightIcon}>times</div>
        <div className={styles.leftIcon}>search</div>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent1;
