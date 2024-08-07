import Input05TextField01OneLine from "./Input05TextField01OneLine";
import PropTypes from "prop-types";
import styles from "./Group.module.css";

const Group = ({ className = "" }) => {
  return (
    <div className={[styles.group, className].join(" ")}>
      <Input05TextField01OneLine
        usernamebankname="example@example"
        iD="ID"
        showUsernamebankname
        propTop="80px"
        propRight="unset"
        propLeft="0px"
        propColor="rgba(0, 0, 0, 0.85)"
      />
      <div className={styles.input05textfield01oneline02}>
        <div className={styles.input05textfield01oneline01}>
          <div className={styles.rectangle} />
          <div className={styles.text}>{` `}</div>
          <div className={styles.rightIcon}>times</div>
          <div className={styles.leftIcon}>search</div>
          <div className={styles.div}>|</div>
        </div>
        <div className={styles.ellipse} />
        <div className={styles.ellipse1} />
        <b className={styles.password}>Password</b>
        <div className={styles.ellipse2} />
        <div className={styles.ellipse3} />
        <div className={styles.ellipse4} />
        <div className={styles.ellipse5} />
        <div className={styles.ellipse6} />
        <div className={styles.ellipse7} />
        <div className={styles.ellipse8} />
        <div className={styles.ellipse9} />
      </div>
      <div className={styles.input01basicbutton01regular}>
        <div className={styles.rectangle1} />
        <b className={styles.logIn}>Log In</b>
      </div>
      <b className={styles.logInYour}>Log In Your Account</b>
    </div>
  );
};

Group.propTypes = {
  className: PropTypes.string,
};

export default Group;
