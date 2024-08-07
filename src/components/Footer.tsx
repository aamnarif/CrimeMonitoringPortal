import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ className = "", group33, propPadding, propPadding1 }) => {
  const footerStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const footer1Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className={[styles.footer, className].join(" ")} style={footerStyle}>
      <div className={styles.footer1} style={footer1Style}>
        <div className={styles.textIcons}>
          <div className={styles.logoTextIcon}>
            <div className={styles.logo}>
              <img className={styles.logoChild} alt="" src={group33} />
              <div className={styles.crimePortal}>Crime Portal</div>
            </div>
            <div className={styles.ourCrimeMonitoring}>
              Our Crime Monitoring Portal provides real-time crime data and
              empowers citizens to report incidents. Together, we enhance public
              safety and foster community collaboration.
            </div>
          </div>
          <div className={styles.text}>
            <div className={styles.pages}>Pages</div>
            <div className={styles.text1}>
              <div className={styles.home}>Home</div>
              <div className={styles.home}>About Us</div>
              <div className={styles.home}>Crime Reports</div>
              <div className={styles.home}>{`Crime Responses `}</div>
              <div className={styles.home}>Contact Us</div>
            </div>
          </div>
          <div className={styles.text2}>
            <div className={styles.pages}>Crime Categories</div>
            <div className={styles.text1}>
              <div className={styles.murder}>Murder</div>
              <div className={styles.murder}>Target Killing</div>
              <div className={styles.murder}>Bomb Blast</div>
              <div className={styles.murder}>{`High Way & Bank Robbery`}</div>
              <div className={styles.murder}>{`Snatching `}</div>
              <div className={styles.murder}>Gang Rape</div>
            </div>
          </div>
          <div className={styles.textInputButton}>
            <div className={styles.newsletter}>Newsletter</div>
            <div className={styles.getUpdatesOf}>
              Get Updates Of Latest Crimes
            </div>
            <div className={styles.input}>
              <div className={styles.emailAddress}>Email Address</div>
            </div>
            <div className={styles.button}>
              <b className={styles.murder}>Subscribe now</b>
            </div>
          </div>
        </div>
        <div className={styles.text4}>
          <div
            className={styles.copyrightCrimePortal}
          >{` © Copyright Crime Portal  2024. `}</div>
          <div className={styles.text5}>
            <div className={styles.privacyPolicy}>Privacy Policy</div>
            <div className={styles.privacyPolicy}>{`Terms & Conditions`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  group33: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propPadding1: PropTypes.any,
};

export default Footer;
