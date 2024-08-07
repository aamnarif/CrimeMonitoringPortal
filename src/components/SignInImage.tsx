import PropTypes from "prop-types";
import styles from "./SignInImage.module.css";

const SignInImage = ({ className = "" }) => {
  return (
    <div className={[styles.signInImage, className].join(" ")}>
      <img className={styles.signInImageChild} alt="" src="/vector-1.svg" />
      <img
        className={styles.signInImageItem}
        alt=""
        src="/rectangle-7@2x.png"
      />
    </div>
  );
};

SignInImage.propTypes = {
  className: PropTypes.string,
};

export default SignInImage;
