import SignInImage from "../components/SignInImage";
import GroupComponent1 from "../components/GroupComponent1";
import styles from "./Register.module.css";

const Register = () => {
  return (
    <div className={styles.register}>
      <div className={styles.termsAndConditionsContainer}>
        <b className={styles.termsAndConditions}>Terms and Conditions</b>
        <span className={styles.span}>{` | `}</span>
        <b className={styles.termsAndConditions}>Privacy Policy</b>
        <span className={styles.span}>{` | `}</span>
        <b className={styles.termsAndConditions}>Security Policy</b>
      </div>
      <div className={styles.logIn}>
        <div className={styles.group}>
          <div className={styles.input01basicbutton01regularWrapper}>
            <div className={styles.input01basicbutton01regular}>
              <div className={styles.rectangle} />
              <b className={styles.register1}>Register</b>
            </div>
          </div>
          <b className={styles.registerYourAccount}>Register Your Account</b>
        </div>
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
      <GroupComponent1 />
    </div>
  );
};

export default Register;
