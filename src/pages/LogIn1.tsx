import Group from "../components/Group";
import SignInImage from "../components/SignInImage";
import styles from "./LogIn1.module.css";

const LogIn1 = () => {
  return (
    <div className={styles.logIn}>
      <div className={styles.termsAndConditionsContainer}>
        <b className={styles.termsAndConditions}>Terms and Conditions</b>
        <span className={styles.span}>{` | `}</span>
        <b className={styles.termsAndConditions}>Privacy Policy</b>
        <span className={styles.span}>{` | `}</span>
        <b className={styles.termsAndConditions}>Security Policy</b>
      </div>
      <div className={styles.logIn1}>
        <Group />
      </div>
      <SignInImage />
      <div className={styles.groupParent}>
        <img className={styles.groupChild} alt="" src="/group-29@2x.png" />
        <div className={styles.groupGroup}>
          <img className={styles.groupIcon} alt="" src="/group.svg" />
          <img className={styles.groupIcon1} alt="" src="/group1.svg" />
          <img className={styles.groupIcon2} alt="" src="/group2.svg" />
          <img className={styles.groupIcon3} alt="" src="/group3.svg" />
          <img className={styles.groupIcon4} alt="" src="/group4.svg" />
        </div>
        <img className={styles.groupItem} alt="" src="/group-28.svg" />
      </div>
    </div>
  );
};

export default LogIn1;
