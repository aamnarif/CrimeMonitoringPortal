import PropTypes from "prop-types";
import styles from "./HowItWorks.module.css";

const HowItWorks = ({ className = "" }) => {
  return (
    <div className={[styles.howItWorks, className].join(" ")}>
      <div className={styles.text}>
        <b className={styles.howItWorks1}>How it works</b>
        <div className={styles.textChild} />
        <div className={styles.discoverHowTo}>
          Discover how to effectively use our portal to report crimes, respond
          to incidents, and access valuable crime statistics in Karachi.
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.iconBg}>
            <img
              className={styles.account21Icon}
              alt=""
              src="/account2-1@2x.png"
            />
          </div>
          <div className={styles.text1}>
            <b className={styles.registerOrLogin}>Register or Login</b>
            <div className={styles.createAnAccount}>
              Create an account or log in to access our features.
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.iconBg}>
            <img className={styles.account21Icon} alt="" src="/cv1-1@2x.png" />
          </div>
          <div className={styles.text1}>
            <b className={styles.registerOrLogin}>Report Crime</b>
            <div className={styles.easilyRegisterYour}>
              Easily register your complaint and report crimes through our
              intuitive interface.
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.iconBg}>
            <img
              className={styles.briefcase31Icon}
              alt=""
              src="/briefcase3-1.svg"
            />
          </div>
          <div className={styles.text1}>
            <b className={styles.registerOrLogin}>Response to Crimes</b>
            <div className={styles.engageWithThe}>
              Engage with the community by responding to crime reports and
              sharing information.
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.iconBg}>
            <img
              className={styles.account21Icon}
              alt=""
              src="/checkmark-1@2x.png"
            />
          </div>
          <div className={styles.text1}>
            <b className={styles.registerOrLogin}>View Crime Statistics</b>
            <div className={styles.easilyRegisterYour}>
              Access detailed crime statistics and insights specific to Karachi.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HowItWorks.propTypes = {
  className: PropTypes.string,
};

export default HowItWorks;
